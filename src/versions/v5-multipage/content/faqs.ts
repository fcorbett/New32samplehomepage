// FAQ answers are live-site sentences under question headings.
// Sources: https://new32dental.com/fees-insurance/, https://new32dental.com/patient-info/,
// https://new32dental.com/our-services/, https://new32dental.com/family-services/

export type FaqItem = {
  question: string;
  answer: string;
};

export const patientInfoFaqs: FaqItem[] = [
  {
    question: "Do you accept dental insurance?",
    answer:
      "We accept any benefit plan that allows you the freedom to choose your own dentist. In fact, over 90% of our patients utilize dental insurance to help pay for their care. We are, however, not contracted with any insurance companies due to the limitations they impose on our patient's treatment options.",
  },
  {
    question: "Will you help me understand my benefits?",
    answer:
      "There are tens of thousands of different dental benefit plans. Please give us a call if you need help understanding how your benefits would work at our office.",
  },
  {
    question: "What payment options do you offer?",
    answer:
      "When your dental needs, or wants, go beyond your existing budget, we work in partnership with Care Credit to help you reach optimum dental health and get that gorgeous smile you have always wanted. We also accept Visa, MasterCard and American Express.",
  },
  {
    question: "Is there a surcharge for credit card bill pay?",
    answer:
      "As of September 1st, 2022, there will be a 2.25% surcharge on all Visa, Mastercard, and American Express credit card payments. There is no surcharge for debit card payment. All debit cards will need to be phoned into the office for payment processing.",
  },
  {
    question: "Do you offer comfort options for anxious patients?",
    answer:
      "For those anxious patients we offer nitrous oxide (laughing gas) for all appointments. During your appointment, you can listen to any music you choose through our iMac computers. Prefer TV? Watch cable TV or a DVD movie on your own 20″ flat panel monitor.",
  },
];

export const servicesFaqs: FaqItem[] = [
  {
    question: "What services does new32 offer?",
    answer:
      "We are proud to offer the following services: Invisalign® Invisible Braces, Porcelain Veneers, Tooth Colored Fillings, Dental Implants, Nightguards, Sports Guards, Low Radiation Digital X-Rays, and Intraoral scanning.",
  },
  {
    question: "Can the whole family be seen together?",
    answer:
      "Mom and kids can be seen at the same time, or one right after another. It can help a nervous child to see mom, dad, sister or brother do it first.",
  },
];
