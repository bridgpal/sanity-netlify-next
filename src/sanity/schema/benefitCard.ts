import { defineType, defineField } from "sanity";

export const benefitCard = defineType({
  name: "benefitCard",
  title: "Benefit Card",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string" }),
    defineField({ name: "description", title: "Description", type: "text" }),
    defineField({ name: "emoji", title: "Emoji", type: "string", description: "An emoji to display (e.g. 💊, 📱, 🤝)" }),
    defineField({ name: "image", title: "Image", type: "image", options: { hotspot: true } }),
    defineField({ name: "linkText", title: "Link Text", type: "string" }),
    defineField({ name: "linkUrl", title: "Link URL", type: "string" }),
    defineField({ name: "order", title: "Order", type: "number" }),
  ],
});
