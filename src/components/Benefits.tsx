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
  { bgColor: "bg-oscar-yellow/10", accentColor: "bg-oscar-yellow" },
  { bgColor: "bg-oscar-blue/10", accentColor: "bg-oscar-blue" },
  { bgColor: "bg-oscar-green/10", accentColor: "bg-oscar-green" },
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
    <section className="py-20 lg:py-28 bg-oscar-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-oscar-blue font-semibold text-sm uppercase tracking-wider mb-3">
            Why Oscar
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-oscar-dark mb-4">
            Our members love us
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Here are a few reasons why people choose Oscar.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const palette = colorPalette[index % colorPalette.length];
            return (
              <div
                key={benefit._id ?? benefit.title}
                className={`${palette.bgColor} rounded-3xl p-8 hover:shadow-lg transition-all duration-300`}
              >
                <div
                  className={`${palette.accentColor} w-16 h-16 rounded-2xl flex items-center justify-center mb-6`}
                >
                  <span className="text-3xl">{benefit.emoji ?? "✨"}</span>
                </div>
                <h3 className="text-xl font-bold text-oscar-dark mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {benefit.description}
                </p>
                <a
                  href={benefit.linkUrl ?? "#"}
                  className="inline-flex items-center gap-2 text-oscar-dark font-semibold hover:gap-3 transition-all"
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
