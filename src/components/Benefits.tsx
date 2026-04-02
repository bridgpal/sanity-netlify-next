import { ArrowRight } from "lucide-react";

interface BenefitData {
  _id?: string;
  title: string;
  description: string;
  emoji?: string;
  linkText?: string;
  linkUrl?: string;
}

const colorPalette = [
  { bg: "bg-oscar-gold/10", accent: "bg-oscar-gold", ring: "ring-oscar-gold/20" },
  { bg: "bg-oscar-teal/10", accent: "bg-oscar-teal", ring: "ring-oscar-teal/20" },
  { bg: "bg-oscar-sage/10", accent: "bg-oscar-sage", ring: "ring-oscar-sage/20" },
];

const defaultBenefits: BenefitData[] = [
  {
    title: "Savings with $3 meds",
    description:
      "Get hundreds of generic medications for as low as $3, delivered right to your door.",
    emoji: "💊",
    linkText: "See details",
  },
  {
    title: "Virtual care, anywhere",
    description:
      "Talk to a doctor 24/7 from the comfort of your home. No appointment needed.",
    emoji: "📱",
    linkText: "See details",
  },
  {
    title: "A Care Team by your side",
    description:
      "Your dedicated Care Team handles the hard stuff — finding doctors, understanding costs, and more.",
    emoji: "🤝",
    linkText: "See details",
  },
];

export default function Benefits({ data }: { data?: BenefitData[] | null }) {
  const benefits = data && data.length > 0 ? data : defaultBenefits;

  return (
    <section className="relative py-24 lg:py-32 bg-oscar-warm overflow-hidden grain">
      {/* Decorative organic shape */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-oscar-sage/5 blob -translate-y-1/3 translate-x-1/3" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header — offset editorial layout */}
        <div className="grid lg:grid-cols-12 gap-8 mb-20">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <div className="editorial-divider" />
              <span className="text-oscar-terracotta font-semibold text-xs uppercase tracking-[0.2em]">
                Why Oscar
              </span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl text-oscar-forest leading-tight">
              Our members{" "}
              <span className="italic text-oscar-terracotta">love</span> us
            </h2>
          </div>
          <div className="lg:col-span-5 lg:col-start-8 flex items-end">
            <p className="text-oscar-forest/50 text-lg leading-relaxed">
              Here are a few reasons why people choose Oscar for their health
              insurance needs.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {benefits.map((benefit, index) => {
            const palette = colorPalette[index % colorPalette.length];
            return (
              <div
                key={benefit._id ?? benefit.title}
                className={`group ${palette.bg} rounded-3xl p-8 lg:p-10 card-lift ring-1 ${palette.ring}`}
              >
                <div
                  className={`${palette.accent} w-16 h-16 rounded-2xl flex items-center justify-center mb-8 transition-transform duration-500 group-hover:scale-110 shadow-lg`}
                >
                  <span className="text-3xl">{benefit.emoji ?? "✨"}</span>
                </div>
                <h3 className="font-display text-2xl text-oscar-forest mb-3">
                  {benefit.title}
                </h3>
                <p className="text-oscar-forest/50 leading-relaxed mb-8">
                  {benefit.description}
                </p>
                <a
                  href={benefit.linkUrl ?? "#"}
                  className="inline-flex items-center gap-2 text-oscar-forest font-semibold text-sm tracking-wide group-hover:gap-3 group-hover:text-oscar-terracotta transition-all duration-300"
                >
                  {benefit.linkText ?? "See details"}
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
