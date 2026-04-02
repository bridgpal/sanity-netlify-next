import { defineType, defineField } from "sanity";

export const featureCard = defineType({
  name: "featureCard",
  title: "Feature Card",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string" }),
    defineField({ name: "description", title: "Description", type: "text" }),
    defineField({
      name: "icon",
      title: "Icon Name",
      type: "string",
      description: "Lucide icon name (e.g., 'UserCheck', 'CreditCard', 'Stethoscope')",
    }),
    defineField({
      name: "color",
      title: "Accent Color",
      type: "string",
      description: "Tailwind CSS color class (e.g., 'bg-oscar-blue', 'bg-oscar-green')",
    }),
    defineField({ name: "linkText", title: "Link Text", type: "string" }),
    defineField({ name: "linkUrl", title: "Link URL", type: "string" }),
    defineField({ name: "order", title: "Order", type: "number" }),
  ],
});
