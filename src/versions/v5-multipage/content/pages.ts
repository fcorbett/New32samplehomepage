// Page copy sourced exclusively from https://new32dental.com/
// Image-heavy module — only import from lazy route pages, not HomePage.
import imgAbout from "../../../imports/hero-team/nicole-goddard-team-hero.jpg?w=400;800&format=avif;webp;jpg&as=picture";
import imgOffice from "../../../imports/office/office.jpg?w=400;800&format=avif;webp;jpg&as=picture";
import imgServices from "../../../imports/office/our-services.jpg?w=400;800&format=avif;webp;jpg&as=picture";
import imgPatient from "../../../imports/office/patient.jpg?w=400;800&format=avif;webp;jpg&as=picture";
import imgOffice1 from "../../../imports/our-office/062207-14-1.jpg?w=400;800&format=avif;webp;jpg&as=picture";
import imgOffice2 from "../../../imports/our-office/july-07-10b-1.jpg?w=400;800&format=avif;webp;jpg&as=picture";
import imgOffice3 from "../../../imports/our-office/july-07-11-1.jpg?w=400;800&format=avif;webp;jpg&as=picture";
import imgOffice4 from "../../../imports/our-office/july-07-12-1.jpg?w=400;800&format=avif;webp;jpg&as=picture";
import imgBeforeAfter1 from "../../../imports/before-and-after/img-0002.jpg?w=400;800&format=avif;webp;jpg&as=picture";
import imgBeforeAfter2 from "../../../imports/before-and-after/img-0016.jpg?w=400;800&format=avif;webp;jpg&as=picture";
import imgBeforeAfter3 from "../../../imports/before-and-after/bracken-1.jpg?w=400;800&format=avif;webp;jpg&as=picture";
import imgBeforeAfter4 from "../../../imports/before-and-after/bracken-2.jpg?w=400;800&format=avif;webp;jpg&as=picture";
import { phone } from "../../../content/siteFacts";
import type { PageContent, PageSeo, PictureData } from "./pageTypes";

export type { PageContent, PageSeo, PictureData };

// Source: https://new32dental.com/about/
export const aboutPage: PageContent & {
  paragraphs: string[];
  affiliationsHeading: string;
} = {
  h1: "About new32",
  lead:
    "Dr. Shaw and Dr. Jacobsen met over 10 years ago at the University of Washington and have been close friends ever since. This longevity has led to an enormous amount of trust, not only in their friendship but also in their partnership.",
  paragraphs: [
    "Their long history with the University of Washington and with Seattle has inspired a strong desire to serve the community that has served them so well over the years.",
    "As this field continues to advance in technology and product development, both doctors are committed to keeping up-to-date with various disciplines in dentistry.",
  ],
  affiliationsHeading: "Professional Affiliations",
  image: imgAbout,
  imageAlt: "The new32 dentists smiling together outdoors in Seattle",
  seo: {
    title: "About | new32 Cosmetic and Family Dentistry | Seattle",
    description:
      "Meet the new32 team. Dr. Shaw and Dr. Jacobsen met at the University of Washington and serve Seattle from Northcut Landing near University Village.",
    dateModified: "August 2026",
  },
};

// Source: https://new32dental.com/our-office/
export const officePage: PageContent & {
  paragraphs: string[];
  virtualTourHeading: string;
  virtualTourBody: string;
} = {
  h1: "Our office at Northcut Landing",
  lead:
    "Our office, in the new Northcut Landing center, is the peak of today's dentistry. Northcut Landing is conveniently located on 25th Avenue, across the street from University Village.",
  paragraphs: [
    "Our advanced techniques and equipment will give you healthy teeth and gums while minimizing the time you spend in the office.",
    "The gorgeous design of new32 will let you forget you are at the dentist. It has already been acclaimed by Seattle's dental community as one of the most beautiful offices in the area.",
  ],
  // Live site has a Google tour page; we fold it in as a section (no new marketing copy).
  virtualTourHeading: "Google tour",
  // Source: https://new32dental.com/contact-us/ (parking note paired with map section)
  virtualTourBody:
    "We are located in Northcut Landing's West building. There is plenty of onsite, underground parking available.",
  image: imgOffice,
  imageAlt: "The new32 dental office at Northcut Landing",
  seo: {
    title: "Our office | new32 Cosmetic and Family Dentistry | Seattle",
    description:
      "Visit new32 at Northcut Landing on 25th Avenue, across the street from University Village in Seattle. Advanced techniques in a beautiful office.",
    dateModified: "August 2026",
  },
};

// Sources: https://new32dental.com/our-services/ + https://new32dental.com/family-services/
export const servicesPage: PageContent & {
  cosmeticHeading: string;
  cosmeticIntro: string;
  cosmeticList: string[];
  familyHeading: string;
  familyIntro: string;
  familyFeatures: { title: string; body: string }[];
  familyClosing: string;
} = {
  h1: "Our services",
  lead:
    "new32 is proud to offer high-end cosmetic dentistry as well as a broad range of general dentistry for the whole family. We provide the latest technology that dentistry has to offer.",
  cosmeticHeading: "Our services",
  cosmeticIntro: "We are proud to offer the following services:",
  cosmeticList: [
    "Invisalign® Invisible Braces",
    "Porcelain Veneers",
    "Tooth Colored Fillings",
    "Dental Implants",
    "Nightguards",
    "Sports Guards",
    "Low Radiation Digital X-Rays",
    "Intraoral scanning",
  ],
  familyHeading: "Family services",
  familyIntro:
    "No matter the age, your family's teeth are important. If you have questions about your children, your parents or your teeth, please contact our office. Wonderful Smiles for the whole family! Visit our beautiful state-of-the-art office today! We offer many family-friendly services, including:",
  familyFeatures: [
    {
      title: "Family appointments",
      body: "Mom and kids can be seen at the same time, or one right after another. It can help a nervous child to see mom, dad, sister or brother do it first.",
    },
    {
      title: "TV/DVD in all rooms",
      body: "Our DVD collection includes a wide selection of kid's movies.",
    },
    {
      title: "Boost & KOR whitening",
      body: "With so much to offer for kids, we didn't forget the busy mom!",
    },
  ],
  familyClosing: "Wonderful Smiles for the whole family!",
  image: imgServices,
  imageAlt: "Cosmetic and family dental care at new32",
  seo: {
    title: "Services | new32 Cosmetic and Family Dentistry | Seattle",
    description:
      "new32 offers Invisalign, veneers, implants, fillings, and family-friendly dentistry for the whole family in Seattle.",
    dateModified: "August 2026",
  },
};

// Sources: https://new32dental.com/patient-info/ + https://new32dental.com/fees-insurance/ + https://new32dental.com/patient-info/bill-pay/
export const patientInfoPage: PageContent & {
  comfortHeading: string;
  comfortIntro: string;
  comfortAmenities: string[];
  feesHeading: string;
  feesParagraphs: string[];
  insuranceNote: string;
  billPayHeading: string;
  billPayParagraphs: string[];
  billPayUrl: string;
  billPayCtaLabel: string;
} = {
  h1: "Patient information",
  lead:
    "Your comfort is our goal. Whether you are in for a routine cleaning or an advanced restorative procedure we will do whatever it takes to help you relax and be comfortable.",
  comfortHeading: "Your comfort",
  comfortIntro:
    "From nitrous oxide to entertainment and small comforts, we do whatever it takes to help you relax during your visit.",
  comfortAmenities: [
    "Nitrous oxide (laughing gas) available for all appointments",
    "Listen to music of your choice, or watch cable TV or a DVD on your own 20″ monitor",
    "Blankets, back pillows, and neck pillows available on request",
    "Free high-speed wifi, plus a 42″ LCD TV in our reception area",
  ],
  feesHeading: "Fees & insurance",
  feesParagraphs: [
    "We appreciate the emotional and financial investment required to proceed with comprehensive dentistry. During your consultation, we will review your treatment plan with you and provide a description of the proposed treatment. We will also discuss your investment prior to any treatment, along with several payment options for your convenience.",
    "We accept any benefit plan that allows you the freedom to choose your own dentist. In fact, over 90% of our patients utilize dental insurance to help pay for their care. We are, however, not contracted with any insurance companies due to the limitations they impose on our patient's treatment options. There are tens of thousands of different dental benefit plans. Please give us a call if you need help understanding how your benefits would work at our office.",
    "When your dental needs, or wants, go beyond your existing budget, we work in partnership with Care Credit to help you reach optimum dental health and get that gorgeous smile you have always wanted. We also accept Visa, MasterCard and American Express.",
  ],
  insuranceNote:
    "We accept any benefit plan that lets you choose your own dentist. We are not contracted with insurance companies.",
  billPayHeading: "Bill pay",
  billPayParagraphs: [
    "Visit our secure bill pay site to pay your bill. As of September 1st, 2022, there will be a 2.25% surcharge on all Visa, Mastercard, and American Express credit card payments. There is no surcharge for debit card payment. All debit cards will need to be phoned into the office for payment processing.",
  ],
  billPayUrl: "https://quickclick.com/r/pxopm",
  billPayCtaLabel: "Visit our secure bill pay site",
  image: imgPatient,
  imageAlt: "Patient comfort amenities at the new32 office",
  seo: {
    title: "Patient info | new32 Cosmetic and Family Dentistry | Seattle",
    description:
      "Patient comfort, fees, insurance, and bill pay information for new32 Cosmetic and Family Dentistry in Seattle.",
    dateModified: "August 2026",
  },
};

// Source: https://new32dental.com/contact-us/
export const contactPage: PageContent = {
  h1: "Contact us",
  lead:
    `We are located in Northcut Landing's West building. There is plenty of onsite, underground parking available. If you would like to schedule an appointment please call us at ${phone.display}.`,
  seo: {
    title: "Contact | new32 Cosmetic and Family Dentistry | Seattle",
    description:
      `Contact new32 at 4915 25th Ave NE, Suite 107, Seattle. Call ${phone.display}. Northcut Landing with underground parking.`,
    dateModified: "August 2026",
  },
};

// Gallery — live gallery pages are image-driven; captions drawn from existing homepage alts + live section titles
export const galleryPage: {
  h1: string;
  lead: string;
  sections: {
    heading: string;
    // headings from live site: gallery, before & after
    photos: { picture: PictureData; alt: string }[];
  }[];
  seo: PageSeo;
} = {
  h1: "Photo gallery",
  // Live gallery pages are image-led; support line from office page (https://new32dental.com/our-office/)
  lead: "The gorgeous design of new32 will let you forget you are at the dentist.",
  sections: [
    {
      heading: "Our office",
      photos: [
        { picture: imgOffice1, alt: "new32 office interior" },
        { picture: imgOffice2, alt: "new32 office interior" },
        { picture: imgOffice3, alt: "new32 office interior" },
        { picture: imgOffice4, alt: "new32 office interior" },
      ],
    },
    {
      heading: "Before & after",
      photos: [
        { picture: imgBeforeAfter1, alt: "Before and after smile at new32" },
        { picture: imgBeforeAfter2, alt: "Before and after smile at new32" },
        { picture: imgBeforeAfter3, alt: "Before and after smile at new32" },
        { picture: imgBeforeAfter4, alt: "Before and after smile at new32" },
      ],
    },
  ],
  seo: {
    title: "Gallery | new32 Cosmetic and Family Dentistry | Seattle",
    description:
      "Gallery of the new32 office and smiles at our Seattle dental practice near University Village.",
    dateModified: "July 2026",
  },
};

// homeSeo lives in ./homeSeo.ts so HomePage does not pull this image graph.
