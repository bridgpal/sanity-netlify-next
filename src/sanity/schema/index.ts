import { type SchemaTypeDefinition } from "sanity";
import { heroSection } from "./heroSection";
import { featureCard } from "./featureCard";
import { benefitCard } from "./benefitCard";
import { infoSection } from "./infoSection";
import { ctaBanner } from "./ctaBanner";
import { siteSettings } from "./siteSettings";
import { page } from "./page";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [heroSection, featureCard, benefitCard, infoSection, ctaBanner, siteSettings, page],
};
