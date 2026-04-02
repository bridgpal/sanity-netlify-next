import { draftMode } from "next/headers";

export default async function DraftModeBanner() {
  const { isEnabled } = await draftMode();

  if (!isEnabled) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-amber-500 text-black text-center py-2 px-4 text-sm font-medium">
      Draft Mode Enabled —{" "}
      <a href="/api/draft-mode/disable" className="underline font-bold">
        Exit Preview
      </a>
    </div>
  );
}
