import { ArrowRight } from "lucide-react";

interface InfoCardData {
  _id?: string;
  title: string;
  description: string;
  emoji?: string;
  linkText?: string;
  linkUrl?: string;
}

const cardStyles = [
  { bg: "bg-oscar-gold/8", border: "border-oscar-gold/15", hover: "hover:border-oscar-gold/40" },
  { bg: "bg-oscar-terracotta/6", border: "border-oscar-terracotta/12", hover: "hover:border-oscar-terracotta/35" },
  { bg: "bg-oscar-teal/8", border: "border-oscar-teal/15", hover: "hover:border-oscar-teal/40" },
];

const defaultCards: InfoCardData[] = [
  {
    title: "Oscar for Employers",
    description: "Offer your team health insurance they'll actually love.",
    emoji: "🏢",
  },
  {
    title: "What Oscar does",
    description:
      "We use technology and a human touch to make health insurance simpler.",
    emoji: "❤️",
  },
  {
    title: "AI @ Oscar",
    description:
      "See how we use AI to improve the healthcare experience for everyone.",
    emoji: "🧠",
  },
];

export default function InfoCards({ data }: { data?: InfoCardData[] | null }) {
  const cards = data && data.length > 0 ? data : defaultCards;

  return (
    <section className="relative py-24 lg:py-32 bg-oscar-ivory grain">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Centered editorial header */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-8 h-px bg-oscar-terracotta/30" />
            <span className="text-oscar-terracotta font-semibold text-xs uppercase tracking-[0.2em]">
              Explore
            </span>
            <div className="w-8 h-px bg-oscar-terracotta/30" />
          </div>
          <h2 className="font-display text-4xl sm:text-5xl text-oscar-forest">
            Learn more about Oscar
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {cards.map((card, index) => {
            const style = cardStyles[index % cardStyles.length];
            return (
              <a
                key={card._id ?? card.title}
                href={card.linkUrl ?? "#"}
                className={`group ${style.bg} border ${style.border} ${style.hover} rounded-3xl p-8 lg:p-10 card-lift block transition-all duration-500`}
              >
                <div className="text-5xl mb-8 transition-transform duration-500 group-hover:scale-110">
                  {card.emoji ?? "📄"}
                </div>
                <h3 className="font-display text-2xl text-oscar-forest mb-3">
                  {card.title}
                </h3>
                <p className="text-oscar-forest/50 leading-relaxed mb-8">
                  {card.description}
                </p>
                <span className="inline-flex items-center gap-2 text-oscar-terracotta font-semibold text-sm tracking-wide group-hover:gap-3 transition-all duration-300">
                  {card.linkText ?? "Learn more"}
                  <ArrowRight className="w-4 h-4" />
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
