import zyrowasteLogo from "../assets/Zyrowaste_Updated.jpg";

/** Set to true to let the mark span most of the viewport (flat artwork works best). */
export const SPLASH_LOGO_FILL_SCREEN = false;

type SplashScreenProps = {
  /** Logo height as a fraction of viewport height (default ~1/3). Ignored when `SPLASH_LOGO_FILL_SCREEN` is true. */
  logoVhFraction?: number;
};

/**
 * Short intro: Zyrowaste-forward branding, then the rest of the app stays on Swaroop / group navigation.
 * For artwork with a white box around the mark, try `mix-blend-multiply` on a light background, or use a PNG/SVG with transparency.
 */
export function SplashScreen({ logoVhFraction = 1 / 3 }: SplashScreenProps) {
  const vhPercent = Math.round(logoVhFraction * 100);

  return (
    <div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-gradient-to-br from-white via-swaroop-50 to-emerald-50 px-6"
      role="presentation"
      aria-hidden="true"
    >
      <div className="splash-animate flex flex-col items-center gap-5 text-center max-w-lg">
        <div
          className={
            SPLASH_LOGO_FILL_SCREEN
              ? "flex items-center justify-center w-[min(92vw,720px)] max-h-[min(70vh,520px)]"
              : "flex items-center justify-center"
          }
          style={
            SPLASH_LOGO_FILL_SCREEN
              ? undefined
              : { height: `${vhPercent}vh`, maxHeight: "min(40vh, 360px)" }
          }
        >
          <img
            src={zyrowasteLogo}
            alt="Zyrowaste"
            className={
              SPLASH_LOGO_FILL_SCREEN
                ? "max-h-full max-w-full w-auto h-auto object-contain rounded-2xl shadow-lg ring-1 ring-black/5"
                : "h-full w-auto max-w-[min(90vw,520px)] object-contain object-center rounded-2xl shadow-lg ring-1 ring-black/5"
            }
            draggable={false}
          />
        </div>
        <div className="space-y-1">
          <p className="text-2xl font-extrabold tracking-tight text-swaroop-800">Zyrowaste</p>
          <p className="text-sm text-gray-600">
            Biodegradable packaging ·{" "}
            <span className="font-medium text-swaroop-700">zyrowaste.in</span>
          </p>
        </div>
      </div>
    </div>
  );
}
