import { useEffect, useRef } from "react";
import { BrowserRouter, useLocation } from "react-router";
import V5App from "../versions/v5-multipage/App";

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

export default function ProductionApp() {
  return (
    <BrowserRouter basename={routerBasename}>
      <AnalyticsPageViews />
      <V5App />
    </BrowserRouter>
  );
}
