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

  // Split heading on last two words to apply accent color
  const words = (hero.heading ?? "").split(" ");
  const accentWords = words.slice(-2).join(" ");
  const mainWords = words.slice(0, -2).join(" ");

  return (
    <section className="relative bg-healthco-cream overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-0 w-96 h-96 bg-healthco-yellow/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-healthco-blue/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-healthco-dark leading-tight">
              {mainWords}{" "}
              <span className="text-healthco-blue">{accentWords}</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-lg">
              {hero.subheading}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={hero.primaryButtonLink}
                className="inline-flex items-center justify-center gap-2 bg-healthco-blue text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-healthco-blue/90 transition-colors"
              >
                {hero.primaryButtonText}
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href={hero.secondaryButtonLink}
                className="inline-flex items-center justify-center gap-2 border-2 border-healthco-dark text-healthco-dark px-8 py-4 rounded-full font-semibold text-lg hover:bg-healthco-dark hover:text-white transition-colors"
              >
                {hero.secondaryButtonText}
              </a>
            </div>
          </div>

          {/* Hero image collage */}
          <div className="relative hidden lg:block">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-healthco-blue/10 rounded-3xl h-48 flex items-center justify-center overflow-hidden">
                  <div className="text-center p-6">
                    <div className="w-16 h-16 bg-healthco-blue rounded-full mx-auto mb-3 flex items-center justify-center">
                      <span className="text-3xl">👨‍👩‍👧</span>
                    </div>
                    <p className="text-sm font-medium text-healthco-dark">Family Coverage</p>
                  </div>
                </div>
                <div className="bg-healthco-yellow/20 rounded-3xl h-64 flex items-center justify-center overflow-hidden">
                  <div className="text-center p-6">
                    <div className="w-16 h-16 bg-healthco-yellow rounded-full mx-auto mb-3 flex items-center justify-center">
                      <span className="text-3xl">🏃‍♀️</span>
                    </div>
                    <p className="text-sm font-medium text-healthco-dark">Active Living</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="bg-healthco-green/10 rounded-3xl h-64 flex items-center justify-center overflow-hidden">
                  <div className="text-center p-6">
                    <div className="w-16 h-16 bg-healthco-green rounded-full mx-auto mb-3 flex items-center justify-center">
                      <span className="text-3xl">💊</span>
                    </div>
                    <p className="text-sm font-medium text-healthco-dark">Affordable Meds</p>
                  </div>
                </div>
                <div className="bg-healthco-coral/10 rounded-3xl h-48 flex items-center justify-center overflow-hidden">
                  <div className="text-center p-6">
                    <div className="w-16 h-16 bg-healthco-coral rounded-full mx-auto mb-3 flex items-center justify-center">
                      <span className="text-3xl">🩺</span>
                    </div>
                    <p className="text-sm font-medium text-healthco-dark">Virtual Care</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
