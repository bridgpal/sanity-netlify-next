import { ArrowRight, HelpCircle } from "lucide-react";

interface CTABannerData {
  heading?: string;
  subheading?: string;
  buttonText?: string;
  buttonLink?: string;
}

const defaults: CTABannerData = {
  heading: "Questions about coverage?",
  subheading:
    "We're here to help. Get answers to common questions about plans, coverage, and more.",
  buttonText: "Visit our FAQ",
  buttonLink: "#",
};

export default function CTABanner({ data }: { data?: CTABannerData | null }) {
  const cta = { ...defaults, ...data };

  return (
    <section className="bg-healthco-blue py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center mb-6">
          <HelpCircle className="w-12 h-12 text-white/80" />
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          {cta.heading}
        </h2>
        <p className="text-lg text-white/80 max-w-xl mx-auto mb-8">
          {cta.subheading}
        </p>
        <a
          href={cta.buttonLink}
          className="inline-flex items-center gap-2 bg-white text-healthco-blue px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors"
        >
          {cta.buttonText}
          <ArrowRight className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
}
