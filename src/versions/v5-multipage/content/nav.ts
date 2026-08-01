export type PageId =
  | "home"
  | "about"
  | "our-office"
  | "services"
  | "gallery"
  | "patient-info"
  | "contact";

export type NavPage = {
  id: PageId;
  /** Path segment under the site root. Empty string = home. */
  path: string;
  label: string;
};

export const pages: Record<PageId, NavPage> = {
  home: { id: "home", path: "", label: "Home" },
  about: { id: "about", path: "about", label: "About" },
  "our-office": { id: "our-office", path: "our-office", label: "Our office" },
  services: { id: "services", path: "our-services", label: "Services" },
  gallery: { id: "gallery", path: "gallery", label: "Gallery" },
  "patient-info": {
    id: "patient-info",
    path: "patient-info",
    label: "Patient info",
  },
  contact: { id: "contact", path: "contact-us", label: "Contact" },
};

/** Primary nav items (logo handles home). */
export const NAV_ITEMS: NavPage[] = [
  pages.about,
  pages["our-office"],
  pages.services,
  pages.gallery,
  pages["patient-info"],
  pages.contact,
];

/** Footer-only legal links (not in primary nav). */
export const FOOTER_LEGAL_ITEMS: { path: string; label: string }[] = [
  { path: "privacy-practices", label: "Privacy Practices" },
  { path: "privacy-policy", label: "Privacy Policy" },
];
