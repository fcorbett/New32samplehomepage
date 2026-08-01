import type { PageSeo } from "./pageTypes";

export type LegalSubsection = {
  title: string;
  body: string;
};

export type LegalSection = {
  heading: string;
  intro?: string;
  paragraphs?: string[];
  items?: string[];
  subsections?: LegalSubsection[];
  /** When true, render practice name + phone after paragraphs/intro. */
  contactBlock?: boolean;
  /** Copy rendered after the contact block (e.g. HHS complaint note). */
  paragraphsAfterContact?: string[];
};

export type LegalPageContent = {
  h1: string;
  lead: string;
  breadcrumb: string;
  effectiveDate?: string;
  seo: PageSeo;
  sections: LegalSection[];
};
