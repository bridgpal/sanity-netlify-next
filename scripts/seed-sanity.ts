import { createClient } from "@sanity/client";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "66jdgzyv";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const token = process.env.SANITY_API_WRITE_TOKEN;

if (!token) {
  console.error(
    "Missing SANITY_API_WRITE_TOKEN. Set it as an environment variable to seed data.\n" +
      "You can create a token at: https://www.sanity.io/manage/project/" +
      projectId +
      "/api#tokens"
  );
  process.exit(1);
}

const client = createClient({
  projectId,
  dataset,
  token,
  apiVersion: "2024-01-01",
  useCdn: false,
});

const documents = [
  // Hero Section
  {
    _type: "heroSection",
    _id: "heroSection",
    heading: "Health insurance made for real life",
    subheading:
      "We're not just a health insurance company. We're your healthcare partner, making it easier to stay healthy.",
    primaryButtonText: "Activate member account",
    primaryButtonLink: "#activate",
    secondaryButtonText: "Shop plans",
    secondaryButtonLink: "#plans",
  },

  // Feature Cards
  {
    _type: "featureCard",
    _id: "feature-1",
    title: "Access your account",
    description:
      "Set up your Oscar account to manage your plan, view your ID card, and more.",
    icon: "UserCheck",
    color: "bg-oscar-blue",
    linkText: "Activate account",
    linkUrl: "#activate",
    order: 1,
  },
  {
    _type: "featureCard",
    _id: "feature-2",
    title: "Pay seamlessly",
    description:
      "Set up autopay so you never miss a payment. It's fast, easy, and secure.",
    icon: "CreditCard",
    color: "bg-oscar-green",
    linkText: "Set up autopay",
    linkUrl: "#autopay",
    order: 2,
  },
  {
    _type: "featureCard",
    _id: "feature-3",
    title: "Find great doctors",
    description:
      "Search our network to find doctors, specialists, and facilities near you.",
    icon: "Stethoscope",
    color: "bg-oscar-coral",
    linkText: "Find a doctor",
    linkUrl: "#doctors",
    order: 3,
  },

  // Benefit Cards
  {
    _type: "benefitCard",
    _id: "benefit-1",
    title: "Savings with $3 meds",
    description:
      "Get hundreds of generic medications for as low as $3, delivered right to your door.",
    emoji: "💊",
    linkText: "See details",
    linkUrl: "#meds",
    order: 1,
  },
  {
    _type: "benefitCard",
    _id: "benefit-2",
    title: "Virtual care, anywhere",
    description:
      "Talk to a doctor 24/7 from the comfort of your home. No appointment needed.",
    emoji: "📱",
    linkText: "See details",
    linkUrl: "#virtual-care",
    order: 2,
  },
  {
    _type: "benefitCard",
    _id: "benefit-3",
    title: "A Care Team by your side",
    description:
      "Your dedicated Care Team handles the hard stuff — finding doctors, understanding costs, and more.",
    emoji: "🤝",
    linkText: "See details",
    linkUrl: "#care-team",
    order: 3,
  },

  // CTA Banner
  {
    _type: "ctaBanner",
    _id: "ctaBanner",
    heading: "Questions about coverage?",
    subheading:
      "We're here to help. Get answers to common questions about plans, coverage, and more.",
    buttonText: "Visit our FAQ",
    buttonLink: "#faq",
  },

  // Info Sections
  {
    _type: "infoSection",
    _id: "info-1",
    title: "Oscar for Employers",
    description: "Offer your team health insurance they'll actually love.",
    emoji: "🏢",
    linkText: "Learn more",
    linkUrl: "#employers",
    order: 1,
  },
  {
    _type: "infoSection",
    _id: "info-2",
    title: "What Oscar does",
    description:
      "We use technology and a human touch to make health insurance simpler.",
    emoji: "❤️",
    linkText: "Learn more",
    linkUrl: "#about",
    order: 2,
  },
  {
    _type: "infoSection",
    _id: "info-3",
    title: "AI @ Oscar",
    description:
      "See how we use AI to improve the healthcare experience for everyone.",
    emoji: "🧠",
    linkText: "Learn more",
    linkUrl: "#ai",
    order: 3,
  },
];

async function seed() {
  console.log(`Seeding Sanity project "${projectId}" dataset "${dataset}"...`);

  const transaction = client.transaction();

  for (const doc of documents) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    transaction.createOrReplace(doc as any);
  }

  const result = await transaction.commit();
  console.log(`Successfully seeded ${documents.length} documents.`);
  console.log("Transaction ID:", result.transactionId);
}

seed().catch((err) => {
  console.error("Seeding failed:", err.message);
  process.exit(1);
});
