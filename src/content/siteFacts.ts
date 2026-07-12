export const phone = {
  display: "206-381-0732",
  tel: "tel:206-381-0732",
};

export const fax = "206-381-0513";

const GOOGLE_PLACE_ID = "ChIJf2vOKoYUkFQRj-vIo3pM35w";

export const reviews = {
  google: {
    rating: 4.9,
    count: 543,
    // Client-provided Google Business Profile share link.
    url: "https://share.google/MQmeJA5HkRemcSEUy",
    label: "Google",
  },
} as const;

export const seattleMetYears = [
  2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026,
] as const;

export const officeHours = [
  { day: "Monday", hours: "7:00 am – 3:00 pm" },
  { day: "Tuesday", hours: "7:00 am – 3:00 pm" },
  { day: "Wednesday", hours: "7:00 am – 3:00 pm" },
  { day: "Thursday", hours: "7:00 am – 3:00 pm" },
  { day: "Friday", hours: "Closed" },
] as const;

export const location = {
  address: "4915 25th Ave NE, Suite 107, Seattle, WA 98105",
  addressDisplay: "4915 25th Avenue Northeast #107, Seattle, WA 98105",
  parkingNote:
    "Located in Northcut Landing's West building with onsite underground parking.",
  mapsUrl:
    "https://www.google.com/maps/dir//new32+Aesthetic+and+Family+Dentistry/",
  googlePlacesUrl: `https://www.google.com/maps/place/?q=place_id:${GOOGLE_PLACE_ID}`,
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
