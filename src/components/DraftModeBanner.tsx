"use client";

import { usePathname } from "next/navigation";

type DraftModeBannerProps = {
  isDraftModeEnabled: boolean;
};

export default function DraftModeBanner({
  isDraftModeEnabled,
}: DraftModeBannerProps) {
  const pathname = usePathname();
  const isStudioRoute = pathname?.startsWith("/studio");

  if (!isDraftModeEnabled || isStudioRoute) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-amber-500 text-black text-center py-2 px-4 text-sm font-medium">
      Draft Mode Enabled —{" "}
      <a href="/api/draft-mode/disable" className="underline font-bold">
        Exit Preview
      </a>
    </div>
  );
}
