export const phone = {
  display: "206-381-0732",
  tel: "tel:206-381-0732",
};

export const fax = "206-381-0513";

export const reviews = {
  google: {
    rating: 4.9,
    count: 543,
    url: "https://www.google.com/maps/dir//new32+Aesthetic+and+Family+Dentistry/",
    label: "Google",
  },
  yelp: {
    rating: 4.8,
    count: 52,
    url: "https://www.yelp.com/biz/new32-aesthetic-and-family-dentistry-seattle-2",
    label: "Yelp",
  },
  facebook: {
    recommendedPercent: 98,
    url: "http://www.facebook.com/pages/Seattle-WA/new32-Aesthetic-and-Family-Dentistry/38487238404",
    label: "Facebook",
  },
} as const;

export const seattleMetAward = "Seattle Met Top Dentist 2015–2026";

export const officeHours = [
  { day: "Monday", hours: "7:00 am – 3:00 pm" },
  { day: "Tuesday", hours: "7:00 am – 3:00 pm" },
  { day: "Wednesday", hours: "7:00 am – 3:00 pm" },
  { day: "Thursday", hours: "7:00 am – 3:00 pm" },
  { day: "Friday", hours: "Closed" },
] as const;

export const location = {
  address: "4915 25th Ave NE, Suite 107, Seattle, WA 98105",
  parkingNote:
    "Located in Northcut Landing's West building with onsite underground parking.",
  mapsUrl:
    "https://www.google.com/maps/dir//new32+Aesthetic+and+Family+Dentistry/",
  googlePlacesUrl:
    "https://www.google.com/maps/place/new32+Aesthetic+and+Family+Dentistry/@47.6654,-122.3012,17z/data=!3m1!4b1!4m6!3m5!1s0x5490145d0e2e8f0b:0x0!8m2!3d47.6654!4d-122.3012",
};

export const lastUpdated = "May 2026";

export const featuredQuotes = [
  {
    text: "I genuinely look forward to my dental visits, which was unimaginable to me before coming here.",
    attribution: "Carolyn K., Google review",
  },
  {
    text: "The dentists are highly experienced, competent and empathetic. I highly recommend New32.",
    attribution: "Jon C., Google review",
  },
] as const;
