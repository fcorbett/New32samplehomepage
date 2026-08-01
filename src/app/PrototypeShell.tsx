import { Suspense, useEffect, useRef } from "react";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
  useParams,
} from "react-router";
import { VersionPicker } from "./components/VersionPicker";
import { defaultVersionId, getVersionById } from "../versions/registry";

const GA_MEASUREMENT_ID = "G-PQ3X8RDYHS";
const routerBasename = import.meta.env.BASE_URL.replace(/\/$/, "") || "/";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

function AnalyticsPageViews() {
  const location = useLocation();
  const isFirstPath = useRef(true);

  useEffect(() => {
    // Initial pageview is sent by the gtag snippet in index.html.
    if (isFirstPath.current) {
      isFirstPath.current = false;
      return;
    }
    window.gtag?.("config", GA_MEASUREMENT_ID, {
      page_path: location.pathname + location.search,
    });
  }, [location.pathname, location.search]);

  return null;
}

function VersionPage() {
  const { versionId } = useParams<{ versionId: string }>();
  const version = getVersionById(versionId ?? defaultVersionId);
  const VersionApp = version.component;

  return (
    <>
      <VersionPicker />
      <Suspense
        fallback={
          <div className="min-h-screen flex items-center justify-center bg-[var(--brand-frame)] text-[var(--brand-ink)]">
            Loading prototype…
          </div>
        }
      >
        <VersionApp />
      </Suspense>
    </>
  );
}

export default function PrototypeShell() {
  return (
    <BrowserRouter basename={routerBasename}>
      <AnalyticsPageViews />
      <Routes>
        <Route
          path="/"
          element={<Navigate to={`/v/${defaultVersionId}`} replace />}
        />
        <Route path="/v/:versionId/*" element={<VersionPage />} />
        <Route
          path="*"
          element={<Navigate to={`/v/${defaultVersionId}`} replace />}
        />
      </Routes>
    </BrowserRouter>
  );
}
