import { useEffect, useState } from "react";
import ChatBot from "./components/ChatBot";
import AnalyticsPage from "./pages/AnalyticsPage";
import CertificationsPage from "./pages/CertificationsPage";
import LandingPage from "./pages/LandingPage";

function normalizeHashRoute(): string {
  const raw = window.location.hash.replace(/^#/, "") || "/";
  const path = raw.split("?")[0];
  if (!path.startsWith("/")) {
    return `/${path}`;
  }
  return path === "" ? "/" : path;
}

function AppNav() {
  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-swaroop-100">
      <div className="max-w-6xl mx-auto px-4 py-2 flex items-center justify-between gap-3">
        <a href="#/" className="flex items-center gap-2 min-w-0">
          <img src="/leaf.svg" alt="" className="w-6 h-6 shrink-0" />
          <span className="font-bold text-sm text-swaroop-800 truncate">
            Swaroop Formulation Industries
          </span>
        </a>
        <div className="flex items-center gap-4 text-sm font-medium text-gray-600">
          <a href="#/" className="hover:text-swaroop-700 transition">
            Home
          </a>
          <a href="#/certifications" className="hover:text-swaroop-700 transition">
            Certifications
          </a>
          <a href="#/analytics" className="hover:text-swaroop-700 transition">
            Analytics
          </a>
        </div>
      </div>
    </nav>
  );
}

export default function App() {
  const [route, setRoute] = useState<string>(normalizeHashRoute);

  useEffect(() => {
    const sync = () => setRoute(normalizeHashRoute());
    sync();
    window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, []);

  const page =
    route === "/certifications" ? (
      <CertificationsPage />
    ) : route === "/analytics" ? (
      <AnalyticsPage />
    ) : (
      <LandingPage />
    );

  return (
    <>
      <AppNav />
      {page}
      <ChatBot />
    </>
  );
}
