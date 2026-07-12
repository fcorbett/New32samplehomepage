import imgLogo from "../../imports/Variation1EditorialSplitV2/076566151a847a70ed0da5d0025b82e9e671fbba.png";
import { CanvasPhotoAnimation } from "../../app/components/CanvasPhotoAnimation";
import { FeaturedQuote } from "../../app/components/FeaturedQuote";
import { OfficeHours } from "../../app/components/OfficeHours";
import { ScrollReveal } from "../../app/components/ScrollReveal";
import { SeattleMetAwards } from "../../app/components/SeattleMetAwards";
import { StickyMobileBar } from "../../app/components/StickyMobileBar";
import { TrustStrip } from "../../app/components/TrustStrip";
import imgRectangle from "../../imports/Variation1EditorialSplitV2/cde4fe2d8a2336157a774459ccad20bdd2f69f4b.png";
import imgRectangle1 from "../../imports/Variation1EditorialSplitV2/6e710aeee4ee940f7ca90e74bd956b48af76288f.png";
import imgRectangle2 from "../../imports/Variation1EditorialSplitV2/4eea9f3c49af300361a5255f380ef56944927452.png";
import { location, phone, reviews } from "../../content/siteFacts";
import { ImageWithFallback } from "../../app/components/figma/ImageWithFallback";
import { Menu, X } from "lucide-react";
import { useState } from "react";

function Links() {
  const linkClassName =
    "whitespace-nowrap hover:opacity-70 transition-opacity";

  return (
    <div className="flex flex-col md:flex-row gap-6 md:gap-5 items-start md:items-center font-medium text-[var(--brand-green)] text-sm">
      <a href="#about" className={linkClassName}>
        about
      </a>
      <a href="#office" className={linkClassName}>
        our office
      </a>
      <a href="#fees" className={linkClassName}>
        fees & insurance
      </a>
      <a href="#gallery" className={linkClassName}>
        gallery
      </a>
      <a href="#services" className={linkClassName}>
        family services
      </a>
      <a href="#info" className={linkClassName}>
        patient info
      </a>
      <a href="#contact" className={linkClassName}>
        contact
      </a>
    </div>
  );
}

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="relative w-full bg-white">
      <div className="flex items-center justify-between px-6 md:px-8 py-6 md:py-8">
        <div className="w-32 md:w-44 h-12 md:h-[75px] relative shrink-0">
          <ImageWithFallback
            src={imgLogo}
            alt="new32 logo"
            className="w-full h-full object-contain"
          />
        </div>

        <div className="hidden md:block">
          <Links />
        </div>

        <button
          className="md:hidden text-[var(--brand-green)] p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden px-6 pb-6 bg-white border-t border-gray-100">
          <Links />
        </div>
      )}
    </nav>
  );
}

function HeroSplit() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 w-full min-w-0">
      <div className="bg-[var(--brand-green)] flex items-center justify-center p-8 md:p-12 aspect-square sm:aspect-auto sm:min-h-[420px] lg:min-h-[480px] w-full min-w-0 box-border">
        <div className="text-white max-w-lg">
          <p className="font-bold text-xs mb-4 lowercase tracking-wider">
            cosmetic and family dentistry · seattle
          </p>
          <h1 className="font-light text-3xl md:text-4xl leading-tight mb-6">
            Committed to providing patients with the highest standard of care
          </h1>
          <a
            href={phone.tel}
            className="inline-block px-5 py-3 bg-white text-[var(--brand-green)] text-sm font-semibold uppercase tracking-wide hover:opacity-90 transition-opacity"
          >
            Call to schedule
          </a>
        </div>
      </div>

      <div className="aspect-square sm:aspect-auto sm:min-h-[420px] lg:min-h-[480px] w-full min-w-0 flex items-center justify-center bg-white overflow-hidden">
        <CanvasPhotoAnimation />
      </div>
    </div>
  );
}

function Intro() {
  return (
    <ScrollReveal className="w-full flex items-center justify-center px-6 md:px-16 py-16 md:py-24 lg:py-32">
      <div className="max-w-5xl w-full">
        <p className="font-semibold text-[var(--brand-green)] text-lg md:text-xl mb-6 md:mb-8">
          welcome to new32
        </p>
        <div className="font-normal text-[var(--brand-ink)] leading-relaxed text-lg md:text-xl space-y-5">
          <p>
            Thank you for considering us for you and your family&apos;s dental
            needs.
          </p>
          <p>
            At new32 we pride ourselves on creating a comfortable dental
            experience and one that will show you how great &apos;going to the
            dentist&apos; should be.
          </p>
        </div>
      </div>
    </ScrollReveal>
  );
}

function PhotoStrip() {
  return (
    <div className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen max-w-[100vw]">
      <div className="grid grid-cols-1 md:grid-cols-3 w-full">
        <div className="relative h-64 md:h-80 lg:h-96">
          <ImageWithFallback
            src={imgRectangle}
            alt="Dental office photo 1"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
        <div className="relative h-64 md:h-80 lg:h-96">
          <ImageWithFallback
            src={imgRectangle1}
            alt="Dental office photo 2"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
        <div className="relative h-64 md:h-80 lg:h-96">
          <ImageWithFallback
            src={imgRectangle2}
            alt="Dental office photo 3"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

function ServiceCard({
  title,
  description,
  delay,
}: {
  title: string;
  description: string;
  delay: number;
}) {
  return (
    <ScrollReveal delay={delay}>
      <div className="flex flex-col gap-4 md:gap-5 h-full">
        <h3 className="font-bold text-[var(--brand-green)] text-base md:text-lg">
          {title}
        </h3>
        <p className="font-normal text-[var(--brand-brown)] text-sm md:text-base leading-relaxed">
          {description}
        </p>
      </div>
    </ScrollReveal>
  );
}

function ServicesRow() {
  return (
    <div id="services" className="w-full px-6 md:px-16 py-12 md:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 lg:gap-12">
        <ServiceCard
          title="preventive"
          description="Foundational care for lifelong health and a confident smile."
          delay={0}
        />
        <ServiceCard
          title="cosmetic"
          description="Invisalign, porcelain veneers, and whitening tailored to you."
          delay={0.08}
        />
        <ServiceCard
          title="restorative"
          description="Implants and precision care to rebuild and protect your smile."
          delay={0.16}
        />
        <ServiceCard
          title="family"
          description="Exceptional care for every age, all under one roof."
          delay={0.24}
        />
      </div>
    </div>
  );
}

function QuoteBand() {
  return (
    <div className="w-full bg-[var(--brand-brown)] px-6 md:px-16 py-16 md:py-24 lg:py-32">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <div className="font-light text-white text-lg md:text-xl lg:text-2xl leading-relaxed space-y-6">
            <p className="text-[20px]">
              Dr. Beth Jacobsen and Dr. Beth Shaw are committed to providing
              patients with the highest standard of care in a warm, nurturing,
              and family-focused environment where education and prevention are
              emphasized. They chose to serve in the dental profession because
              of the profound effect quality dental care can have on a
              person&apos;s health, happiness, and well-being.
            </p>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <p className="font-light text-white text-lg md:text-xl lg:text-2xl leading-relaxed mt-6 text-[20px]">
            At new32, our practice philosophy centers around you. We are
            passionate about people from our community, their families and
            taking good care of them.
          </p>
        </ScrollReveal>
      </div>
    </div>
  );
}

const GoogleIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
    <path fill="#4285F4" d="M23.745 12.27c0-.825-.069-1.636-.212-2.415H12.24v4.542h6.545c-.27 1.488-1.114 2.766-2.35 3.597v2.964h3.811c2.23-2.053 3.504-5.077 3.504-8.688z"/>
    <path fill="#34A853" d="M12.24 24c3.24 0 5.954-1.077 7.935-2.915l-3.81-2.964c-1.076.724-2.454 1.154-4.125 1.154-3.172 0-5.856-2.14-6.814-5.022H1.492v3.06C3.472 21.238 7.558 24 12.24 24z"/>
    <path fill="#FBBC05" d="M5.426 14.253c-.244-.725-.386-1.503-.386-2.302s.142-1.577.386-2.302V6.59H1.492C.737 8.083.315 9.77.315 11.95c0 2.18.422 3.868 1.177 5.36l3.934-3.057z"/>
    <path fill="#EA4335" d="M12.24 4.747c1.764 0 3.344.606 4.59 1.796l3.447-3.447C18.188 1.076 15.474 0 12.24 0 7.558 0 3.472 2.76 1.492 6.59l3.934 3.058c.958-2.882 3.642-5.023 6.814-5.023z"/>
  </svg>
);

function Footer() {
  const { google } = reviews;

  return (
    <footer className="w-full bg-[var(--brand-ink)] text-white px-6 md:px-16 py-8 md:py-10 pb-20 md:pb-10">
      <div className="flex flex-col md:flex-row md:items-start w-full gap-8 md:gap-4 text-left text-sm">
        <div className="flex flex-col gap-2 md:flex-1">
          <p className="font-bold opacity-70">address</p>
          <a
            href={location.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-normal underline hover:opacity-70 transition-opacity"
          >
            {location.addressDisplay}
          </a>
        </div>

        <div className="flex flex-col gap-2 md:flex-1">
          <p className="font-bold opacity-70">reviews</p>
          <a
            href={google.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 hover:opacity-70 transition-opacity w-fit"
            aria-label="View our Google reviews"
          >
            <GoogleIcon />
            <span className="underline">Google reviews</span>
          </a>
        </div>

        <div className="flex flex-col gap-2 md:flex-1">
          <p className="font-bold opacity-70">phone</p>
          <a
            href={phone.tel}
            className="font-normal underline hover:opacity-70 transition-opacity"
          >
            {phone.display}
          </a>
        </div>

        <div className="flex flex-col gap-2 md:flex-1">
          <p className="font-bold opacity-70">new32</p>
          <a
            href="#about"
            className="font-normal underline hover:opacity-70 transition-opacity"
          >
            about
          </a>
          <a
            href="/privacy-policy"
            className="font-normal underline hover:opacity-70 transition-opacity"
          >
            Privacy Policy
          </a>
          <a
            href="/privacy-practices"
            className="font-normal underline hover:opacity-70 transition-opacity"
          >
            Privacy Practices
          </a>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen w-full bg-[var(--brand-frame)] p-4 md:p-8 lg:px-6 lg:py-10">
      <div className="max-w-6xl xl:max-w-7xl mx-auto bg-white xl:shadow-[0_10px_15px_rgba(0,0,0,0.12)] overflow-x-hidden">
        <Navbar />
        <HeroSplit />
        <TrustStrip />
        <Intro />
        <ScrollReveal>
          <FeaturedQuote />
        </ScrollReveal>
        <PhotoStrip />
        <ServicesRow />
        <QuoteBand />
        <OfficeHours />
        <SeattleMetAwards />
        <Footer />
      </div>
      <StickyMobileBar />
    </div>
  );
}
