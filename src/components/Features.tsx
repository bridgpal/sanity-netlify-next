import {
  UserCheck,
  CreditCard,
  Stethoscope,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";

interface FeatureData {
  _id?: string;
  title: string;
  description: string;
  icon?: string;
  color?: string;
  linkText: string;
  linkUrl?: string;
}

const iconMap: Record<string, LucideIcon> = {
  UserCheck,
  CreditCard,
  Stethoscope,
};

const defaultFeatures: FeatureData[] = [
  {
    title: "Access your account",
    description:
      "Set up your Oscar account to manage your plan, view your ID card, and more.",
    icon: "UserCheck",
    color: "bg-oscar-sage",
    linkText: "Activate account",
  },
  {
    title: "Pay seamlessly",
    description:
      "Set up autopay so you never miss a payment. It's fast, easy, and secure.",
    icon: "CreditCard",
    color: "bg-oscar-teal",
    linkText: "Set up autopay",
  },
  {
    title: "Find great doctors",
    description:
      "Search our network to find doctors, specialists, and facilities near you.",
    icon: "Stethoscope",
    color: "bg-oscar-terracotta",
    linkText: "Find a doctor",
  },
];

const accentBorders = [
  "border-l-oscar-sage",
  "border-l-oscar-teal",
  "border-l-oscar-terracotta",
];

export default function Features({ data }: { data?: FeatureData[] | null }) {
  const features = data && data.length > 0 ? data : defaultFeatures;

  return (
    <section className="relative py-24 lg:py-32 bg-white grain">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header — editorial style */}
        <div className="max-w-2xl mb-20">
          <div className="flex items-center gap-3 mb-6">
            <div className="editorial-divider" />
            <span className="text-oscar-terracotta font-semibold text-xs uppercase tracking-[0.2em]">
              Getting started
            </span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl text-oscar-forest leading-tight mb-4">
            Get started with Oscar
          </h2>
          <p className="text-oscar-forest/50 text-lg leading-relaxed">
            New to Oscar? Here are three things you can do right now.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => {
            const IconComponent = iconMap[feature.icon ?? ""] ?? UserCheck;
            const colorClass = feature.color ?? "bg-oscar-sage";
            return (
              <div
                key={feature._id ?? feature.title}
                className={`group relative bg-oscar-ivory/50 border-l-4 ${accentBorders[index % accentBorders.length]} rounded-r-2xl p-8 lg:p-10 card-lift`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div
                  className={`${colorClass} w-12 h-12 rounded-xl flex items-center justify-center mb-8 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}
                >
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-display text-2xl text-oscar-forest mb-3">
                  {feature.title}
                </h3>
                <p className="text-oscar-forest/50 leading-relaxed mb-8">
                  {feature.description}
                </p>
                <a
                  href={feature.linkUrl ?? "#"}
                  className="inline-flex items-center gap-2 text-oscar-terracotta font-semibold text-sm tracking-wide group-hover:gap-3 transition-all duration-300"
                >
                  {feature.linkText}
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
