"use client";

import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { netlifyTool } from "sanity-plugin-netlify";
import { schema } from "@/sanity/schema";
import { projectId, dataset } from "@/sanity/config";

export default defineConfig({
  name: "oscar-health-studio",
  title: "Oscar Health Studio",
  projectId,
  dataset,
  plugins: [structureTool(), visionTool(), netlifyTool()],
  schema,
  basePath: "/studio",
});
