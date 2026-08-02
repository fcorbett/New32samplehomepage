import { Route, Routes } from "react-router";
import "./v5-theme.css";
import { SiteLayout } from "./components/SiteLayout";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { BioPage } from "./pages/BioPage";
import { OfficePage } from "./pages/OfficePage";
import { ServicesPage } from "./pages/ServicesPage";
import { GalleryPage } from "./pages/GalleryPage";
import { PatientInfoPage } from "./pages/PatientInfoPage";
import { ContactPage } from "./pages/ContactPage";
import { PrivacyPracticesPage } from "./pages/PrivacyPracticesPage";
import { PrivacyPolicyPage } from "./pages/PrivacyPolicyPage";
import { NotFoundPage } from "./pages/NotFoundPage";

export default function App() {
  return (
    <div className="theme-pnw-5 min-h-screen w-full overflow-x-clip">
      <Routes>
        <Route element={<SiteLayout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="about/:slug" element={<BioPage />} />
          <Route path="our-office" element={<OfficePage />} />
          <Route path="our-services" element={<ServicesPage />} />
          <Route path="gallery" element={<GalleryPage />} />
          <Route path="patient-info" element={<PatientInfoPage />} />
          <Route path="contact-us" element={<ContactPage />} />
          <Route path="privacy-practices" element={<PrivacyPracticesPage />} />
          <Route path="privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </div>
  );
}
