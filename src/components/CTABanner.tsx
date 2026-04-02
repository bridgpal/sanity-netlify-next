import { ArrowRight } from "lucide-react";

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
    <section className="relative overflow-hidden">
      {/* Deep forest gradient with organic textures */}
      <div className="absolute inset-0 bg-gradient-to-br from-oscar-forest via-oscar-forest to-oscar-teal" />
      <div className="absolute inset-0 grain" />

      {/* Decorative organic shapes */}
      <div className="absolute -top-20 -left-20 w-[300px] h-[300px] bg-oscar-sage/10 blob" />
      <div className="absolute -bottom-16 -right-16 w-[400px] h-[400px] bg-oscar-terracotta/8 blob" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-oscar-gold/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-28">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex justify-center mb-8">
            <div className="w-px h-12 bg-oscar-gold/40" />
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-oscar-ivory leading-tight mb-6">
            {cta.heading}
          </h2>
          <p className="text-oscar-ivory/60 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            {cta.subheading}
          </p>
          <a
            href={cta.buttonLink}
            className="group inline-flex items-center gap-3 bg-oscar-gold text-oscar-forest px-8 py-4 rounded-full font-semibold text-base hover:bg-oscar-gold/90 transition-all duration-300 shadow-lg shadow-oscar-gold/20"
          >
            {cta.buttonText}
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
