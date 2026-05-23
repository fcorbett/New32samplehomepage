import imgLogo from "../imports/Variation1EditorialSplitV2/076566151a847a70ed0da5d0025b82e9e671fbba.png";
import { CanvasPhotoAnimation } from "./components/CanvasPhotoAnimation";
import { FeaturedQuote } from "./components/FeaturedQuote";
import { OfficeHours } from "./components/OfficeHours";
import { StickyMobileBar } from "./components/StickyMobileBar";
import { TrustStrip } from "./components/TrustStrip";
import imgRectangle from "../imports/Variation1EditorialSplitV2/cde4fe2d8a2336157a774459ccad20bdd2f69f4b.png";
import imgRectangle1 from "../imports/Variation1EditorialSplitV2/6e710aeee4ee940f7ca90e74bd956b48af76288f.png";
import imgRectangle2 from "../imports/Variation1EditorialSplitV2/4eea9f3c49af300361a5255f380ef56944927452.png";
import imgYelp from "../imports/yelp.svg";
import { phone } from "../content/siteFacts";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";
import { Menu, X } from "lucide-react";
import { useState } from "react";

function Links() {
  const linkClassName =
    "whitespace-nowrap hover:opacity-70 transition-opacity";

  return (
    <div className="flex flex-col md:flex-row gap-6 md:gap-5 items-start md:items-center font-medium text-[#94a062] text-sm">
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
          className="md:hidden text-[#94a062] p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X size={24} />
          ) : (
            <Menu size={24} />
          )}
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
      <div className="bg-[#94a062] flex items-center justify-center p-8 aspect-square w-full max-w-[444px] mx-auto sm:mx-0 min-w-0 box-border">
        <div className="text-white">
          <p className="font-bold text-xs mb-4 lowercase tracking-wider">
            cosmetic and family dentistry · seattle
          </p>
          <h1 className="font-light text-3xl leading-tight mb-6">
            Committed to providing patients with the highest standard of care
          </h1>
          <a
            href={phone.tel}
            className="inline-block px-5 py-3 bg-white text-[#94a062] text-sm font-semibold uppercase tracking-wide hover:opacity-90 transition-opacity"
          >
            Call to schedule
          </a>
        </div>
      </div>

      <div className="aspect-square w-full max-w-[444px] mx-auto sm:mx-0 min-w-0 flex items-center justify-center bg-white overflow-hidden">
        <CanvasPhotoAnimation />
      </div>
    </div>
  );
}

function Intro() {
  return (
    <div className="w-full flex items-center justify-center px-6 md:px-16 py-16 md:py-24 lg:py-32">
      <div className="max-w-4xl">
        <p className="font-semibold text-[#94a062] text-lg md:text-xl mb-6 md:mb-8">
          welcome to new32
        </p>
        <div className="font-normal text-[#1a1a18] leading-relaxed text-lg md:text-xl space-y-5">
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
    </div>
  );
}

function PhotoStrip() {
  return (
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
  );
}

function ServiceCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-col gap-4 md:gap-5">
      <h3 className="font-bold text-[#94a062] text-base md:text-lg">{title}</h3>
      <p className="font-normal text-[#7e6b4d] text-sm md:text-base leading-relaxed">
        {description}
      </p>
    </div>
  );
}

function ServicesRow() {
  return (
    <div className="w-full px-6 md:px-16 py-12 md:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 lg:gap-12">
        <ServiceCard
          title="preventive"
          description="Foundational care for lifelong health and a confident smile."
        />
        <ServiceCard
          title="cosmetic"
          description="Invisalign, porcelain veneers, and whitening tailored to you."
        />
        <ServiceCard
          title="restorative"
          description="Implants and precision care to rebuild and protect your smile."
        />
        <ServiceCard
          title="family"
          description="Exceptional care for every age, all under one roof."
        />
      </div>
    </div>
  );
}

function QuoteBand() {
  return (
    <div className="w-full bg-[#7e6b4d] px-6 md:px-16 py-16 md:py-24 lg:py-32">
      <div className="max-w-4xl mx-auto">
        <div className="font-light text-white text-lg md:text-xl lg:text-2xl leading-relaxed space-y-6">
          <p className="text-[20px]">
            Dr. Beth Jacobsen and Dr. Beth Shaw are committed to providing
            patients with the highest standard of care in a warm, nurturing, and
            family-focused environment where education and prevention are
            emphasized. They chose to serve in the dental profession because of
            the profound effect quality dental care can have on a person&apos;s
            health, happiness, and well-being.
          </p>
          <p className="text-[20px]">
            At new32, our practice philosophy centers around you. We are
            passionate about people from our community, their families and
            taking good care of them.
          </p>
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="w-full bg-[#1a1a18] text-white px-6 md:px-16 py-8 md:py-10 pb-20 md:pb-10">
      <div className="flex flex-col md:flex-row md:items-start w-full gap-8 md:gap-4 text-left text-sm">
        <div className="flex flex-col gap-2 md:flex-1">
          <p className="font-bold opacity-70">address</p>
          <a
            href="https://www.google.com/maps/dir//new32+Aesthetic+and+Family+Dentistry/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-normal underline hover:opacity-70 transition-opacity"
          >
            4915 25th Avenue Northeast #107, Seattle, WA 98105
          </a>
        </div>

        <div className="flex flex-col gap-2 md:flex-1">
          <p className="font-bold opacity-70">find us on</p>
          <div className="flex gap-4 items-center">
            <a
              href="http://www.facebook.com/pages/Seattle-WA/new32-Aesthetic-and-Family-Dentistry/38487238404"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-70 transition-opacity"
              aria-label="Visit us on Facebook"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a
              href="http://www.yelp.com/biz/new32-aesthetic-and-family-dentistry-seattle-2"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-70 transition-opacity"
              aria-label="Visit us on Yelp"
            >
              <img src={imgYelp} alt="" className="h-6 w-auto" />
            </a>
          </div>
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
    <div className="min-h-screen w-full bg-[#C0C0C0] p-6 md:p-12 lg:p-[100px]">
      <div className="max-w-[888px] mx-auto bg-white shadow-[0_10px_15px_rgba(0,0,0,0.20)] overflow-x-hidden">
        <Navbar />
        <HeroSplit />
        <TrustStrip />
        <Intro />
        <FeaturedQuote />
        <PhotoStrip />
        <ServicesRow />
        <QuoteBand />
        <OfficeHours />
        <Footer />
      </div>
      <StickyMobileBar />
    </div>
  );
}
