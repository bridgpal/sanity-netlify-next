import { sanityFetch } from "./live";

export async function getHeroSection() {
  const { data } = await sanityFetch({
    query: `*[_type == "heroSection"][0]{
      heading,
      subheading,
      primaryButtonText,
      primaryButtonLink,
      secondaryButtonText,
      secondaryButtonLink,
      "backgroundImageUrl": backgroundImage.asset->url
    }`,
  });
  return data;
}

export async function getFeatureCards() {
  const { data } = await sanityFetch({
    query: `*[_type == "featureCard"] | order(order asc){
      _id,
      title,
      description,
      icon,
      color,
      linkText,
      linkUrl,
      order
    }`,
  });
  return data;
}

export async function getBenefitCards() {
  const { data } = await sanityFetch({
    query: `*[_type == "benefitCard"] | order(order asc){
      _id,
      title,
      description,
      emoji,
      linkText,
      linkUrl,
      order
    }`,
  });
  return data;
}

export async function getCtaBanner() {
  const { data } = await sanityFetch({
    query: `*[_type == "ctaBanner"][0]{
      heading,
      subheading,
      buttonText,
      buttonLink
    }`,
  });
  return data;
}

export async function getInfoSections() {
  const { data } = await sanityFetch({
    query: `*[_type == "infoSection"] | order(order asc){
      _id,
      title,
      description,
      emoji,
      linkText,
      linkUrl,
      order
    }`,
  });
  return data;
}
