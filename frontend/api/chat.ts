/**
 * Vercel Serverless Function -- proxies chat requests to Groq API.
 * Keeps API keys server-side. Used in Level 1 (direct LLM) and as
 * fallback before the FastAPI backend is introduced in Level 2.
 */

interface GroqRequest {
  messages: { role: string; content: string }[];
}

export default async function handler(req: Request): Promise<Response> {
  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { "Content-Type": "application/json" },
    });
  }

  const apiKey = process.env.GROQ_API_KEY;
  if (!apiKey) {
    return new Response(
      JSON.stringify({ error: "GROQ_API_KEY not configured" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }

  try {
    const body: GroqRequest = await req.json();

    const groqRes = await fetch(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "llama-3.3-70b-versatile",
          messages: body.messages,
          temperature: 0.7,
          max_tokens: 1024,
        }),
      }
    );

    if (!groqRes.ok) {
      const errText = await groqRes.text();
      return new Response(
        JSON.stringify({ error: "Groq API error", details: errText }),
        { status: groqRes.status, headers: { "Content-Type": "application/json" } }
      );
    }

    const data = await groqRes.json();
    const reply = data.choices?.[0]?.message?.content ?? "No response.";

    return new Response(JSON.stringify({ reply }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    return new Response(
      JSON.stringify({ error: "Internal error", details: String(err) }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}

export const config = {
  runtime: "edge",
};
