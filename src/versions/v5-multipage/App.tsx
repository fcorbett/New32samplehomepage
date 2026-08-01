import { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router";
import "./v5-theme.css";
import { SiteLayout } from "./components/SiteLayout";
import { HomePage } from "./pages/HomePage";

const AboutPage = lazy(() =>
  import("./pages/AboutPage").then((m) => ({ default: m.AboutPage })),
);
const BioPage = lazy(() =>
  import("./pages/BioPage").then((m) => ({ default: m.BioPage })),
);
const OfficePage = lazy(() =>
  import("./pages/OfficePage").then((m) => ({ default: m.OfficePage })),
);
const ServicesPage = lazy(() =>
  import("./pages/ServicesPage").then((m) => ({ default: m.ServicesPage })),
);
const GalleryPage = lazy(() =>
  import("./pages/GalleryPage").then((m) => ({ default: m.GalleryPage })),
);
const PatientInfoPage = lazy(() =>
  import("./pages/PatientInfoPage").then((m) => ({
    default: m.PatientInfoPage,
  })),
);
const ContactPage = lazy(() =>
  import("./pages/ContactPage").then((m) => ({ default: m.ContactPage })),
);
const PrivacyPracticesPage = lazy(() =>
  import("./pages/PrivacyPracticesPage").then((m) => ({
    default: m.PrivacyPracticesPage,
  })),
);
const PrivacyPolicyPage = lazy(() =>
  import("./pages/PrivacyPolicyPage").then((m) => ({
    default: m.PrivacyPolicyPage,
  })),
);

function RedirectHome() {
  return <Navigate to="/" replace />;
}

function PageFallback() {
  return (
    <div
      className="w-full min-h-[40vh] bg-[var(--pnw-white)]"
      aria-hidden
    />
  );
}

export default function App() {
  return (
    <div className="theme-pnw-5 min-h-screen w-full overflow-x-clip">
      <Routes>
        <Route element={<SiteLayout />}>
          <Route index element={<HomePage />} />
          <Route
            path="about"
            element={
              <Suspense fallback={<PageFallback />}>
                <AboutPage />
              </Suspense>
            }
          />
          <Route
            path="about/:slug"
            element={
              <Suspense fallback={<PageFallback />}>
                <BioPage />
              </Suspense>
            }
          />
          <Route
            path="our-office"
            element={
              <Suspense fallback={<PageFallback />}>
                <OfficePage />
              </Suspense>
            }
          />
          <Route
            path="our-services"
            element={
              <Suspense fallback={<PageFallback />}>
                <ServicesPage />
              </Suspense>
            }
          />
          <Route
            path="gallery"
            element={
              <Suspense fallback={<PageFallback />}>
                <GalleryPage />
              </Suspense>
            }
          />
          <Route
            path="patient-info"
            element={
              <Suspense fallback={<PageFallback />}>
                <PatientInfoPage />
              </Suspense>
            }
          />
          <Route
            path="contact-us"
            element={
              <Suspense fallback={<PageFallback />}>
                <ContactPage />
              </Suspense>
            }
          />
          <Route
            path="privacy-practices"
            element={
              <Suspense fallback={<PageFallback />}>
                <PrivacyPracticesPage />
              </Suspense>
            }
          />
          <Route
            path="privacy-policy"
            element={
              <Suspense fallback={<PageFallback />}>
                <PrivacyPolicyPage />
              </Suspense>
            }
          />
          <Route path="*" element={<RedirectHome />} />
        </Route>
      </Routes>
    </div>
  );
}
