export type PageSeo = {
  title: string;
  description: string;
  dateModified?: string;
};

export type PictureData = {
  sources: Record<string, string>;
  img: {
    src: string;
    w: number;
    h: number;
  };
};

export type PageContent = {
  h1: string;
  lead: string;
  seo: PageSeo;
  image?: PictureData;
  imageAlt?: string;
};
