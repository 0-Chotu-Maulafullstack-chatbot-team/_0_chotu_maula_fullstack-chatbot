import ChatBot from "./ChatBot";
import AnalyticsPage from "../pages/AnalyticsPage";
import CertificationsPage from "../pages/CertificationsPage";
import ContactEmailPage from "../pages/ContactEmailPage";
import LandingPage from "../pages/LandingPage";
import SubsidiariesPage from "../pages/SubsidiariesPage";

export function normalizeHashRoute(): string {
  const raw = window.location.hash.replace(/^#/, "") || "/";
  const path = raw.split("?")[0];
  if (!path.startsWith("/")) {
    return `/${path}`;
  }
  return path === "" ? "/" : path;
}

export function AppNav() {
  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-swaroop-100">
      <div className="max-w-6xl mx-auto px-4 py-2 flex items-center justify-between gap-3">
        <a href="#/" className="flex items-center gap-2 min-w-0">
          <img src="/leaf.svg" alt="" className="w-6 h-6 shrink-0" />
          <span className="font-bold text-sm text-swaroop-800 truncate">
            Swaroop Formulation Industries
          </span>
        </a>
        <div className="flex items-center gap-3 sm:gap-4 text-xs sm:text-sm font-medium text-gray-600 flex-wrap justify-end">
          <a href="#/" className="hover:text-swaroop-700 transition">
            Home
          </a>
          <a href="#/subsidiaries" className="hover:text-swaroop-700 transition">
            Subsidiaries
          </a>
          <a href="#/certifications" className="hover:text-swaroop-700 transition">
            Certifications
          </a>
          <a href="#/contact-email" className="hover:text-swaroop-700 transition">
            Email
          </a>
          <a href="#/analytics" className="hover:text-swaroop-700 transition">
            Analytics
          </a>
        </div>
      </div>
    </nav>
  );
}

type RoutesLayoutProps = {
  route: string;
};

export function RoutesLayout({ route }: RoutesLayoutProps) {
  const page =
    route === "/certifications" ? (
      <CertificationsPage />
    ) : route === "/analytics" ? (
      <AnalyticsPage />
    ) : route === "/subsidiaries" ? (
      <SubsidiariesPage />
    ) : route === "/contact-email" ? (
      <ContactEmailPage />
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
