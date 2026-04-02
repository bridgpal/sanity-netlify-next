import { client } from "./client";

export async function getHeroSection() {
  return client.fetch(
    `*[_type == "heroSection"][0]{
      heading,
      subheading,
      primaryButtonText,
      primaryButtonLink,
      secondaryButtonText,
      secondaryButtonLink,
      "backgroundImageUrl": backgroundImage.asset->url
    }`
  );
}

export async function getFeatureCards() {
  return client.fetch(
    `*[_type == "featureCard"] | order(order asc){
      _id,
      title,
      description,
      icon,
      color,
      linkText,
      linkUrl,
      order
    }`
  );
}

export async function getBenefitCards() {
  return client.fetch(
    `*[_type == "benefitCard"] | order(order asc){
      _id,
      title,
      description,
      emoji,
      linkText,
      linkUrl,
      order
    }`
  );
}

export async function getCtaBanner() {
  return client.fetch(
    `*[_type == "ctaBanner"][0]{
      heading,
      subheading,
      buttonText,
      buttonLink
    }`
  );
}

export async function getInfoSections() {
  return client.fetch(
    `*[_type == "infoSection"] | order(order asc){
      _id,
      title,
      description,
      emoji,
      linkText,
      linkUrl,
      order
    }`
  );
}
