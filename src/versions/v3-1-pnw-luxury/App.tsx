import "./v3-1-theme.css";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Intro } from "./components/Intro";
import { FeaturedQuote } from "./components/FeaturedQuote";
import { PhotoGallery } from "./components/PhotoGallery";
import { Services } from "./components/Services";
import { QuoteBand } from "./components/QuoteBand";
import { OfficeHours } from "./components/OfficeHours";
import { Awards } from "./components/Awards";
import { Footer } from "./components/Footer";
import { StickyMobileBar } from "./components/StickyMobileBar";

export default function App() {
  return (
    <div className="theme-pnw-31 min-h-screen w-full overflow-x-hidden">
      <Navbar />
      <Hero />
      <Intro />
      <FeaturedQuote />
      <PhotoGallery />
      <Services />
      <QuoteBand />
      <OfficeHours />
      <Awards />
      <Footer />
      <StickyMobileBar />
    </div>
  );
}
