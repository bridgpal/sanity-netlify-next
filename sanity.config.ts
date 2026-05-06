"use client";

import { dashboardTool } from "@sanity/dashboard";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { presentationTool } from "sanity/presentation";
import { netlifyWidget } from "sanity-plugin-dashboard-widget-netlify";
import { schema } from "@/sanity/schema";
import { projectId, dataset } from "@/sanity/config";

type NetlifySite = {
  title: string;
  apiId: string;
  buildHookId: string;
  name: string;
  url?: string;
  branch?: string;
};

function getNetlifySite(): NetlifySite | null {
  const title = process.env.NEXT_PUBLIC_SANITY_STUDIO_NETLIFY_SITE_TITLE;
  const apiId = process.env.NEXT_PUBLIC_SANITY_STUDIO_NETLIFY_API_ID;
  const buildHookId =
    process.env.NEXT_PUBLIC_SANITY_STUDIO_NETLIFY_BUILD_HOOK_ID;
  const name = process.env.NEXT_PUBLIC_SANITY_STUDIO_NETLIFY_SITE_NAME;

  if (!title || !apiId || !buildHookId || !name) {
    return null;
  }

  return {
    title,
    apiId,
    buildHookId,
    name,
    url: process.env.NEXT_PUBLIC_SANITY_STUDIO_NETLIFY_SITE_URL,
    branch: process.env.NEXT_PUBLIC_SANITY_STUDIO_NETLIFY_BRANCH,
  };
}

const netlifySite = getNetlifySite();

export default defineConfig({
  name: "healthco-studio",
  title: "HealthCo Studio",
  projectId,
  dataset,
  plugins: [
    dashboardTool({
      widgets: netlifySite
        ? [
            netlifyWidget({
              title:
                process.env.NEXT_PUBLIC_SANITY_STUDIO_NETLIFY_WIDGET_TITLE ||
                "Netlify Deploys",
              sites: [netlifySite],
            }),
          ]
        : [],
    }),
    structureTool(),
    presentationTool({
      previewUrl: {
        previewMode: {
          enable: "/api/draft-mode/enable",
        },
      },
    }),
    visionTool(),
  ],
  schema,
  basePath: "/studio",
});
