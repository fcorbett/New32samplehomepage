import imgLogo from "./076566151a847a70ed0da5d0025b82e9e671fbba.png";
import imgHeroRight from "./f501e2d8e220a52e831bcb8f341003090efc1d38.png";
import imgRectangle from "./cde4fe2d8a2336157a774459ccad20bdd2f69f4b.png";
import imgRectangle1 from "./6e710aeee4ee940f7ca90e74bd956b48af76288f.png";
import imgRectangle2 from "./4eea9f3c49af300361a5255f380ef56944927452.png";

function Links() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-['Inter:Medium',sans-serif] font-medium gap-[40px] items-start leading-[normal] not-italic relative shrink-0 text-[#94a062] text-[14px] whitespace-nowrap" data-name="links">
      <p className="relative shrink-0">about</p>
      <p className="relative shrink-0">our office</p>
      <p className="relative shrink-0">{`fees & insurance`}</p>
      <p className="relative shrink-0">gallery</p>
      <p className="relative shrink-0">family services</p>
      <p className="relative shrink-0">patient info</p>
      <p className="relative shrink-0">contact</p>
    </div>
  );
}

function Navbar() {
  return (
    <div className="bg-[rgba(0,0,0,0)] relative shrink-0 w-full" data-name="navbar">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[64px] py-[32px] relative size-full">
          <div className="h-[75px] relative shrink-0 w-[209px]" data-name="logo">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgLogo} />
          </div>
          <Links />
        </div>
      </div>
    </div>
  );
}

function HeroLeft() {
  return (
    <div className="bg-[#94a062] flex-[1_0_0] h-full min-w-px relative" data-name="hero-left">
      <div className="flex flex-col justify-center size-full">
        <div className="[word-break:break-word] content-stretch flex flex-col items-start justify-center not-italic p-[64px] relative size-full text-white">
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[14px] whitespace-nowrap">cosmetic and family dentistry</p>
          <p className="font-['Inter:Light',sans-serif] font-light leading-[1.3] min-w-full relative shrink-0 text-[52px] w-[min-content]">committed to providing patients with the highest standard of care</p>
        </div>
      </div>
    </div>
  );
}

function HeroSplit() {
  return (
    <div className="content-stretch flex h-[600px] items-start relative shrink-0 w-full" data-name="hero-split">
      <HeroLeft />
      <div className="flex-[1_0_0] h-full min-w-px relative" data-name="hero-right">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgHeroRight} />
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[32px] items-start not-italic relative shrink-0 w-[800px]" data-name="Frame">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#94a062] text-[20px] whitespace-nowrap">welcome to new32</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.6] min-w-full relative shrink-0 text-[#1a1a18] text-[32px] w-[min-content]">Thank you for considering us for you and your family’s dental needs. At new32 we pride ourselves on creating a comfortable dental experience and one that will show you how great ‘going to the dentist’ should be.</p>
    </div>
  );
}

function Intro() {
  return (
    <div className="content-stretch flex flex-col items-center pb-[80px] pt-[120px] relative shrink-0 w-full" data-name="intro">
      <Frame />
    </div>
  );
}

function PhotoStrip() {
  return (
    <div className="content-stretch flex h-[360px] items-start relative shrink-0 w-full" data-name="photo-strip">
      <div className="flex-[1_0_0] h-full min-w-px relative" data-name="Rectangle">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle} />
      </div>
      <div className="flex-[1_0_0] h-full min-w-px relative" data-name="Rectangle">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle1} />
      </div>
      <div className="flex-[1_0_0] h-full min-w-px relative" data-name="Rectangle">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle2} />
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[20px] items-start min-w-px relative" data-name="Frame">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#94a062] whitespace-nowrap">preventive</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.5] min-w-full relative shrink-0 text-[#7e6b4d] w-[min-content]">Foundational care for lifelong health and a confident smile.</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[20px] items-start min-w-px relative" data-name="Frame">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#94a062] whitespace-nowrap">cosmetic</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.5] min-w-full relative shrink-0 text-[#7e6b4d] w-[min-content]">Invisalign, porcelain veneers, and whitening tailored to you.</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[20px] items-start min-w-px relative" data-name="Frame">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#94a062] whitespace-nowrap">restorative</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.5] min-w-full relative shrink-0 text-[#7e6b4d] w-[min-content]">Implants and precision care to rebuild and protect your smile.</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[20px] items-start min-w-px relative" data-name="Frame">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#94a062] whitespace-nowrap">family</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.5] min-w-full relative shrink-0 text-[#7e6b4d] w-[min-content]">Exceptional care for every age, all under one roof.</p>
    </div>
  );
}

function ServicesRow() {
  return (
    <div className="relative shrink-0 w-full" data-name="services-row">
      <div className="[word-break:break-word] content-stretch flex gap-[40px] items-start not-italic p-[64px] relative size-full text-[14px]">
        <Frame1 />
        <Frame2 />
        <Frame3 />
        <Frame4 />
      </div>
    </div>
  );
}

function QuoteBand() {
  return (
    <div className="bg-[#7e6b4d] relative shrink-0 w-full" data-name="quote-band">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center p-[120px] relative size-full">
          <div className="[word-break:break-word] font-['Inter:Light',sans-serif] font-light leading-[0] not-italic relative shrink-0 text-[28px] text-white w-[786px] whitespace-pre-wrap">
            <p className="leading-[normal] mb-0">Dr. Beth Jacobsen and Dr. Beth Shaw are committed to providing patients with the highest standard of care in a warm, nurturing, and family-focused environment where education and prevention are emphasized. They chose to serve in the dental profession because of the profound effect quality dental care can have on a person’s health, happiness, and well-being.</p>
            <p className="leading-[normal] mb-0">​</p>
            <p className="leading-[normal]">At new32, our practice philosophy centers around you. We are passionate about people from our community, their families and taking good care of them.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="Frame">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] opacity-70 relative shrink-0">address</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[0] relative shrink-0">
        <a className="[text-decoration-skip-ink:none] [text-underline-position:from-font] cursor-pointer decoration-from-font decoration-solid leading-[1.5] underline" href="https://www.google.com/maps/dir//new32+Aesthetic+and+Family+Dentistry/" target="_blank">
          <span className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-from-font decoration-solid underline" href="https://www.google.com/maps/dir//new32+Aesthetic+and+Family+Dentistry/" target="_blank">
            4915 25th Avenue Northeast #107, Seattle, WA 98105
          </span>
        </a>
        <span className="leading-[1.5]">&nbsp;</span>
      </p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-end relative shrink-0" data-name="Frame">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] opacity-70 relative shrink-0">phone</p>
      <p className="[text-underline-position:from-font] decoration-from-font decoration-solid font-['Inter:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 underline">206-381-0732</p>
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-[#1a1a18] relative shrink-0 w-full" data-name="footer">
      <div className="flex flex-row items-center size-full">
        <div className="[word-break:break-word] content-stretch flex items-center justify-between not-italic px-[64px] py-[40px] relative size-full text-[14px] text-white whitespace-nowrap">
          <Frame5 />
          <Frame6 />
        </div>
      </div>
    </div>
  );
}

export default function Variation1EditorialSplitV() {
  return (
    <div className="bg-white content-stretch drop-shadow-[0px_10px_10px_rgba(0,0,0,0.1)] flex flex-col items-start relative size-full" data-name="Variation-1-Editorial-Split-v2">
      <Navbar />
      <HeroSplit />
      <Intro />
      <PhotoStrip />
      <ServicesRow />
      <QuoteBand />
      <Footer />
    </div>
  );
}