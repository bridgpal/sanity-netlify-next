import { ArrowRight } from "lucide-react";

interface HeroData {
  heading?: string;
  subheading?: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  backgroundImageUrl?: string;
}

const defaults: HeroData = {
  heading: "Health insurance made for real life",
  subheading:
    "We're not just a health insurance company. We're your healthcare partner, making it easier to stay healthy.",
  primaryButtonText: "Activate member account",
  primaryButtonLink: "#",
  secondaryButtonText: "Shop plans",
  secondaryButtonLink: "#",
};

export default function Hero({ data }: { data?: HeroData | null }) {
  const hero = { ...defaults, ...data };

  const words = (hero.heading ?? "").split(" ");
  const accentWords = words.slice(-2).join(" ");
  const mainWords = words.slice(0, -2).join(" ");

  return (
    <section className="relative bg-oscar-ivory overflow-hidden grain">
      {/* Organic background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-oscar-sage/8 blob animate-float" />
        <div className="absolute bottom-0 -left-20 w-[400px] h-[400px] bg-oscar-terracotta/6 blob delay-300 animate-float" />
        <div className="absolute top-1/2 right-1/4 w-[200px] h-[200px] bg-oscar-gold/8 rounded-full blur-2xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-36">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Text content — 7 columns */}
          <div className="lg:col-span-7 space-y-10">
            {/* Kicker line */}
            <div className="animate-fade-up flex items-center gap-3">
              <div className="editorial-divider" />
              <span className="text-oscar-terracotta font-semibold text-sm uppercase tracking-[0.2em]">
                Healthcare reimagined
              </span>
            </div>

            <h1 className="animate-fade-up delay-100 font-display text-5xl sm:text-6xl lg:text-7xl text-oscar-forest leading-[1.05] tracking-tight">
              {mainWords}{" "}
              <span className="text-oscar-terracotta italic">{accentWords}</span>
            </h1>

            <p className="animate-fade-up delay-200 text-lg sm:text-xl text-oscar-forest/60 max-w-lg leading-relaxed font-light">
              {hero.subheading}
            </p>

            <div className="animate-fade-up delay-300 flex flex-col sm:flex-row gap-4 pt-2">
              <a
                href={hero.primaryButtonLink}
                className="group inline-flex items-center justify-center gap-3 bg-oscar-terracotta text-white px-8 py-4 rounded-full font-semibold text-base hover:bg-oscar-terracotta/90 transition-all duration-300 shadow-lg shadow-oscar-terracotta/20 hover:shadow-xl hover:shadow-oscar-terracotta/30"
              >
                {hero.primaryButtonText}
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a
                href={hero.secondaryButtonLink}
                className="inline-flex items-center justify-center gap-2 border-2 border-oscar-forest/20 text-oscar-forest px-8 py-4 rounded-full font-semibold text-base hover:border-oscar-forest hover:bg-oscar-forest hover:text-oscar-ivory transition-all duration-500"
              >
                {hero.secondaryButtonText}
              </a>
            </div>
          </div>

          {/* Visual collage — 5 columns, asymmetric editorial grid */}
          <div className="lg:col-span-5 relative hidden lg:block">
            <div className="relative">
              {/* Main large card */}
              <div className="animate-scale-in delay-200 bg-oscar-warm rounded-[2rem] p-8 shadow-xl shadow-oscar-forest/5">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 bg-oscar-sage/20 rounded-2xl flex items-center justify-center shrink-0">
                    <span className="text-3xl">👨‍👩‍👧</span>
                  </div>
                  <div>
                    <p className="font-display text-xl text-oscar-forest">Family Coverage</p>
                    <p className="text-oscar-forest/50 text-sm mt-1">Plans for every stage of life</p>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { label: "Virtual Care", icon: "🩺" },
                    { label: "$3 Meds", icon: "💊" },
                    { label: "24/7 Access", icon: "📱" },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="bg-oscar-ivory/80 rounded-xl p-3 text-center"
                    >
                      <span className="text-xl block mb-1">{item.icon}</span>
                      <span className="text-xs font-medium text-oscar-forest/60">
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating accent card — offset */}
              <div className="animate-scale-in delay-400 absolute -bottom-8 -left-8 bg-oscar-terracotta text-white rounded-2xl p-5 shadow-lg shadow-oscar-terracotta/20 w-48">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">🏃‍♀️</span>
                  <span className="font-display text-lg">Active Living</span>
                </div>
                <p className="text-white/70 text-xs leading-relaxed">
                  Wellness rewards for staying active every day
                </p>
              </div>

              {/* Small floating badge */}
              <div className="animate-scale-in delay-500 absolute -top-4 -right-4 bg-oscar-gold text-oscar-forest rounded-full w-20 h-20 flex flex-col items-center justify-center shadow-lg animate-float">
                <span className="font-display text-lg leading-none">4.8</span>
                <span className="text-[10px] font-semibold tracking-wider uppercase opacity-70">
                  Rating
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
