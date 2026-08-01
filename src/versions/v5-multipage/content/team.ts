// Source: https://new32dental.com/about/ and individual bio pages
import imgShaw from "../../../imports/team/dr-beth-shaw.jpg?w=320;640&format=avif;webp;jpg&as=picture";
import imgJacobsen from "../../../imports/team/dr-beth-jacobsen.jpg?w=320;640&format=avif;webp;jpg&as=picture";
import imgGilmore from "../../../imports/team/dr-stacy-gilmore.jpg?w=320;640&format=avif;webp;jpg&as=picture";
import imgCarly from "../../../imports/team/carly.jpg?w=320;640&format=avif;webp;jpg&as=picture";
import imgBonnie from "../../../imports/team/bonnie.jpg?w=320;640&format=avif;webp;jpg&as=picture";
import imgRenita from "../../../imports/team/renita.jpg?w=320;640&format=avif;webp;jpg&as=picture";
import imgLeah from "../../../imports/team/leah.jpg?w=320;640&format=avif;webp;jpg&as=picture";
import imgSunnie from "../../../imports/team/sunnie.jpg?w=320;640&format=avif;webp;jpg&as=picture";
import type { PictureData } from "./pageTypes";

export type TeamRole =
  | "dentist"
  | "hygienist"
  | "assistant"
  | "front-desk";

export type TeamMember = {
  slug: string;
  name: string;
  role: TeamRole;
  roleLabel: string;
  shortBlurb: string;
  bio: string[];
  image: PictureData;
  seoTitle: string;
  seoDescription: string;
  /** Person schema fields for JSON-LD */
  personSchema?: {
    jobTitle: string;
    alumniOf?: string[];
  };
};

export const teamMembers: TeamMember[] = [
  {
    // Source: https://new32dental.com/about/dr-beth-shaw/
    slug: "dr-beth-shaw",
    name: "Dr. Beth Shaw",
    role: "dentist",
    roleLabel: "Dentist",
    shortBlurb:
      "A UW-trained dentist with Michigan residency experience, Kitsap County roots, and a Seattle practice grounded in family tradition.",
    bio: [
      "Beth is a two time graduate of the University of Washington — from the School of Dentistry, Class of 2008 and with her undergraduate degree in Molecular Biology, Class of 2003. Beth then elected to further advance her education via a one-year dental residency program at the University of Michigan in Ann Arbor. There she learned valuable skills in cosmetic dentistry and oral surgery and further cemented her desire to practice dentistry back in Seattle.",
      "Beth grew up in Silverdale, WA, in beautiful Kitsap County where her father is still practicing dentistry. He has inspired her to become a dentist, and she was lucky to have chosen this path, as she met her husband Scott in dental school. A fun fact about Beth is that her husband, her father, her father-in-law, and her mother-in-law all share Beth's profession. So when you come to visit, know that not only Beth, but an entire family history of dentistry will be at work ensuring you receive the best possible care.",
      "She and Scott currently reside in Ravenna with their kids and their french bulldog. When not in the office, you're likely to find Beth running (a daily passion), skiing (a wintertime obsession), or on those all-too-rare Pacific Northwest days, out in the ski boat enjoying the sunshine.",
    ],
    image: imgShaw,
    seoTitle: "Dr. Beth Shaw | new32 Cosmetic and Family Dentistry | Seattle",
    seoDescription:
      "Meet Dr. Beth Shaw, University of Washington School of Dentistry graduate and dentist at new32 in Seattle's University Village.",
    personSchema: {
      jobTitle: "Dentist",
      alumniOf: [
        "University of Washington School of Dentistry",
        "University of Washington",
        "University of Michigan",
      ],
    },
  },
  {
    // Source: https://new32dental.com/about/dr-beth-jacobsen/
    slug: "dr-beth-jacobsen",
    name: "Dr. Beth Jacobsen",
    role: "dentist",
    roleLabel: "Dentist",
    shortBlurb:
      "A UW Business and Dental School graduate known for personal attention, artistic care, and deep roots in Seattle and Husky life.",
    bio: [
      "After receiving an undergraduate Business degree at the University of Washington in 2001, Beth then pursued a doctorate in the field of dentistry at UW and graduated in 2008. Her artistic abilities, love for science and inherent draw to healthcare made dentistry a natural choice and allowed her to excel at the highly respected University of Washington Dental School.",
      "After graduation, she went into private practice where she has developed an approach to dentistry unequaled in personal attention and professional care. Having spent 10 years at the University of Washington, she was eager to return to practice in Seattle. Her love of the city and of UW makes her a very loyal and enthusiastic Husky fan — you can find her most Saturdays in the fall down at Husky Stadium!",
      "Dr. Jacobsen currently lives in Montlake with her husband Jason, their kids and their golden retriever. Although born in Southern California, she was raised in the south sound area of Washington. Beth now considers herself a tried and true Pacific Northwesterner, with a great love for the outdoors, especially snow skiing, golfing and spending time at her family beach house in Gig Harbor. She also has a passion for all things food and dedicates much of her time to cooking for and entertaining her family and friends.",
    ],
    image: imgJacobsen,
    seoTitle:
      "Dr. Beth Jacobsen | new32 Cosmetic and Family Dentistry | Seattle",
    seoDescription:
      "Meet Dr. Beth Jacobsen, University of Washington Dental School graduate and dentist at new32 in Seattle.",
    personSchema: {
      jobTitle: "Dentist",
      alumniOf: [
        "University of Washington Dental School",
        "University of Washington",
      ],
    },
  },
  {
    // Source: https://new32dental.com/about/dr-stacy-gilmore/
    slug: "dr-stacy-gilmore",
    name: "Dr. Stacy Gilmore",
    role: "dentist",
    roleLabel: "Dentist",
    shortBlurb:
      "A longtime UW DDS specializing in family and cosmetic dentistry, with advanced training from the Las Vegas Institute.",
    bio: [
      "Stacy is a native of Trenton, New Jersey and received her Bachelor of Science Degree in Dental Hygiene at The Ohio State University. Her doctorate of dental surgery was completed in Seattle at the University of Washington Dental School in 1983.",
      "Dr. Gilmore has a passion for helping others improve and maintain a beautiful smile, a desire to promote dental health and overall wellness with kindness and compassion. Family and Cosmetic Dentistry are her specialties and she is a graduate of the Las Vegas Institute for Advanced Dental Studies (LVI.) LVI is one of the world's premiere post-graduate cosmetic dental institutes.",
      "Stacy is a member of the American Dental Association, Washington State Dental Association, Seattle King County Dental Society and the American Academy of Cosmetic Dentistry. She will be working part-time at new32.",
      "When Dr. Gilmore is not working at new32 she can be found volunteering at many local community health clinics or volunteering in third world countries. Honduras is one of those favorite places. Hiking in the Cascades with friends or other staff members is another favorite past-time. She and her husband, Rich, live on Mercer Island. They have two grown daughters, Erin and Lindsey.",
    ],
    image: imgGilmore,
    seoTitle:
      "Dr. Stacy Gilmore | new32 Cosmetic and Family Dentistry | Seattle",
    seoDescription:
      "Meet Dr. Stacy Gilmore, University of Washington Dental School graduate specializing in family and cosmetic dentistry at new32.",
    personSchema: {
      jobTitle: "Dentist",
      alumniOf: [
        "University of Washington Dental School",
        "The Ohio State University",
        "Las Vegas Institute for Advanced Dental Studies",
      ],
    },
  },
  {
    slug: "carly",
    name: "Carly",
    role: "front-desk",
    roleLabel: "Office Manager",
    shortBlurb:
      "Our office manager who thrives on connecting with others and making every patient visit feel welcome from start to finish.",
    bio: [
      "Carly thrives on connecting with others and creating moments that matter. In her role as the office manager, she loves making patients feel welcome and cared for, ensuring every part of their visit is exceptional from start to finish.",
      "Outside of work, Carly loves escaping on runs with a good book in her ears, soaking up the outdoors with her husband Adam and their boys, Judah and Abram, adventuring with girlfriends, and savoring all the best foods the city has to offer.",
    ],
    image: imgCarly,
    seoTitle: "Carly | new32 Cosmetic and Family Dentistry | Seattle",
    seoDescription:
      "Meet Carly, office manager at new32 Cosmetic and Family Dentistry in Seattle.",
    personSchema: {
      jobTitle: "Office Manager",
    },
  },
  {
    slug: "bonnie",
    name: "Bonnie",
    role: "hygienist",
    roleLabel: "Hygienist",
    shortBlurb:
      "A dedicated hygienist known for her gentle, friendly approach and making each visit as comfortable as possible.",
    bio: [
      "Bonnie is a dedicated dental hygienist who takes pride in helping her patients maintain healthy, confident smiles. Known for her gentle and friendly approach, she enjoys building connections and making each visit as comfortable as possible.",
      "Outside of work, Bonnie’s world revolves around her family. She loves spending time with her husband and their two kids, whether they’re at home or off on a long weekend camping trip enjoying the outdoors and making lasting memories.",
    ],
    image: imgBonnie,
    seoTitle: "Bonnie | new32 Cosmetic and Family Dentistry | Seattle",
    seoDescription:
      "Meet Bonnie, dental hygienist at new32 Cosmetic and Family Dentistry in Seattle.",
    personSchema: {
      jobTitle: "Hygienist",
    },
  },
  {
    slug: "renita",
    name: "Renita",
    role: "hygienist",
    roleLabel: "Hygienist",
    shortBlurb:
      "An experienced hygienist who still loves helping patients achieve healthy changes in their oral health.",
    bio: [
      "Renita has been in the dental world for a while and still enjoys coming to work each day. Her favorite parts of her job are helping and seeing patients achieve healthy changes in their oral health. In her spare time, she loves to read, work in the garden, go for walks, and play steel pan. Her motto: keep flossing! 🙂",
    ],
    image: imgRenita,
    seoTitle: "Renita | new32 Cosmetic and Family Dentistry | Seattle",
    seoDescription:
      "Meet Renita, dental hygienist at new32 Cosmetic and Family Dentistry in Seattle.",
    personSchema: {
      jobTitle: "Hygienist",
    },
  },
  {
    slug: "leah",
    name: "Leah",
    role: "hygienist",
    roleLabel: "Hygienist",
    shortBlurb:
      "A Seattle-native hygienist with a warm, patient-centered approach shaped by her own experience with dental anxiety.",
    bio: [
      "Leah is known for her warm, patient-centered approach to care. Having grown up with dental anxiety herself, she brings genuine empathy and understanding to every appointment. Leah is dedicated to creating a calm, comfortable experience while providing thorough, gentle cleanings tailored to each patient’s individual needs.",
      "A Seattle native, Leah earned her undergraduate degree in biology from the University of Washington (go dawgs!) before pursuing her dental hygiene training at Shoreline Community College, where she graduated with honors.",
      "Outside the office, Leah enjoys exploring local breweries with her husband, Kaelin, cheering on the Mariners and Seahawks, discovering new shows to watch, and spending quality time with their golden retrievers, Kona and Archer.",
    ],
    image: imgLeah,
    seoTitle: "Leah | new32 Cosmetic and Family Dentistry | Seattle",
    seoDescription:
      "Meet Leah, dental hygienist at new32 Cosmetic and Family Dentistry in Seattle.",
    personSchema: {
      jobTitle: "Hygienist",
      alumniOf: [
        "University of Washington",
        "Shoreline Community College",
      ],
    },
  },
  {
    slug: "sunnie",
    name: "Sunnie",
    role: "hygienist",
    roleLabel: "Hygienist",
    shortBlurb:
      "A longtime new32 hygienist with 15+ years at the practice who loves watching long-term patients grow and smile.",
    bio: [
      "With 15+ years at new32 Dental, Sunnie is practically part of the foundation! She's dedicated her career to the art of dental health and loves seeing her long-term patients grow and smile over the years. Outside the office, she trades her scaler for the great outdoors, spending quality time with her family and power-listening to her latest audiobook obsession.",
    ],
    image: imgSunnie,
    seoTitle: "Sunnie | new32 Cosmetic and Family Dentistry | Seattle",
    seoDescription:
      "Meet Sunnie, dental hygienist at new32 Cosmetic and Family Dentistry in Seattle.",
    personSchema: {
      jobTitle: "Hygienist",
    },
  },
];

export const doctors = teamMembers.filter((m) => m.role === "dentist");
export const staff = teamMembers.filter((m) => m.role !== "dentist");

export function getMemberBySlug(slug: string): TeamMember | undefined {
  return teamMembers.find((m) => m.slug === slug);
}

// Source: https://new32dental.com/about/
export const affiliations = [
  "Members of the Seattle King County Dental Association and Washington State Dental Association",
  "Members of the Academy of General Dentistry",
  "Members of the American Academy of Pediatric Dentistry",
  "Members of the American Dental Association",
  "Certified in Invisalign",
  "Certified in cad-cam CEREC technology",
] as const;
