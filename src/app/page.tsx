import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Benefits from "@/components/Benefits";
import CTABanner from "@/components/CTABanner";
import InfoCards from "@/components/InfoCards";
import Footer from "@/components/Footer";
import {
  getHeroSection,
  getFeatureCards,
  getBenefitCards,
  getCtaBanner,
  getInfoSections,
} from "@/sanity/queries";

export default async function Home() {
  const [hero, features, benefits, ctaBanner, infoCards] = await Promise.all([
    getHeroSection(),
    getFeatureCards(),
    getBenefitCards(),
    getCtaBanner(),
    getInfoSections(),
  ]);

  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero data={hero} />
        <Features data={features} />
        <Benefits data={benefits} />
        <CTABanner data={ctaBanner} />
        <InfoCards data={infoCards} />
      </main>
      <Footer />
    </>
  );
}
