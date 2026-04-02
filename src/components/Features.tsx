import { UserCheck, CreditCard, Stethoscope, ArrowRight, type LucideIcon } from "lucide-react";

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
    color: "bg-oscar-blue",
    linkText: "Activate account",
  },
  {
    title: "Pay seamlessly",
    description:
      "Set up autopay so you never miss a payment. It's fast, easy, and secure.",
    icon: "CreditCard",
    color: "bg-oscar-green",
    linkText: "Set up autopay",
  },
  {
    title: "Find great doctors",
    description:
      "Search our network to find doctors, specialists, and facilities near you.",
    icon: "Stethoscope",
    color: "bg-oscar-coral",
    linkText: "Find a doctor",
  },
];

export default function Features({ data }: { data?: FeatureData[] | null }) {
  const features = data && data.length > 0 ? data : defaultFeatures;

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-oscar-dark mb-4">
            Get started with Oscar
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            New to Oscar? Here are three things you can do right now.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature) => {
            const IconComponent = iconMap[feature.icon ?? ""] ?? UserCheck;
            const color = feature.color ?? "bg-oscar-blue";
            return (
              <div
                key={feature._id ?? feature.title}
                className="group bg-white border border-gray-100 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div
                  className={`${color} w-14 h-14 rounded-xl flex items-center justify-center mb-6`}
                >
                  <IconComponent className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-oscar-dark mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {feature.description}
                </p>
                <a
                  href={feature.linkUrl ?? "#"}
                  className="inline-flex items-center gap-2 text-oscar-blue font-semibold group-hover:gap-3 transition-all"
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
