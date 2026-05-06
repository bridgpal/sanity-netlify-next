import { ArrowRight } from "lucide-react";

interface InfoCardData {
  _id?: string;
  title: string;
  description: string;
  emoji?: string;
  linkText?: string;
  linkUrl?: string;
}

const colorPalette = [
  "bg-healthco-yellow/10",
  "bg-healthco-coral/10",
  "bg-healthco-blue/10",
];

const defaultCards: InfoCardData[] = [
  {
    title: "HealthCo for Employers",
    description: "Offer your team health insurance they'll actually love.",
    emoji: "🏢",
  },
  {
    title: "What HealthCo does",
    description:
      "We use technology and a human touch to make health insurance simpler.",
    emoji: "❤️",
  },
  {
    title: "AI @ HealthCo",
    description:
      "See how we use AI to improve the healthcare experience for everyone.",
    emoji: "🧠",
  },
];

export default function InfoCards({ data }: { data?: InfoCardData[] | null }) {
  const cards = data && data.length > 0 ? data : defaultCards;

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-healthco-dark">
            Learn more about HealthCo
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <a
              key={card._id ?? card.title}
              href={card.linkUrl ?? "#"}
              className={`group ${colorPalette[index % colorPalette.length]} rounded-3xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 block`}
            >
              <div className="text-5xl mb-6">{card.emoji ?? "📄"}</div>
              <h3 className="text-xl font-bold text-healthco-dark mb-3">
                {card.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {card.description}
              </p>
              <span className="inline-flex items-center gap-2 text-healthco-blue font-semibold group-hover:gap-3 transition-all">
                {card.linkText ?? "Learn more"}
                <ArrowRight className="w-4 h-4" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
