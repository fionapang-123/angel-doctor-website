import { hospitalAvailabilityDisclaimer, medicalDisclaimer } from "@/config/site";
import type { PageContent } from "@/types/page";

export function DisclaimerBlock({ type }: { type: PageContent["disclaimer"] }) {
  if (!type || type === "none") return null;

  const body =
    type === "hospital"
      ? `${hospitalAvailabilityDisclaimer} ${medicalDisclaimer}`
      : type === "legal"
        ? "This page is a foundation legal page for the Angel Doctor website. It should be reviewed by qualified counsel before production use."
        : medicalDisclaimer;

  const title =
    type === "hospital" ? "Important Notes on Hospital Access" : "Medical Disclaimer";

  return (
    <section className="mx-auto max-w-3xl px-4 pb-14 sm:px-6 lg:px-8">
      <div className="rounded-2xl border border-line bg-mist/50 px-6 py-5">
        <h2 className="text-sm font-semibold text-foreground">{title}</h2>
        <p className="mt-2 text-sm leading-6 text-muted">{body}</p>
      </div>
    </section>
  );
}
