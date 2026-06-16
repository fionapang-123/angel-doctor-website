import { PageTemplate } from "@/components/PageTemplate";
import { createMetadata } from "@/config/metadata";
import { getPage } from "@/data/pages";

const page = getPage("/guides/china-medical-travel-process");

export const metadata = createMetadata(page);

export default function ChinaMedicalTravelProcessPage() {
  return <PageTemplate page={page} />;
}
