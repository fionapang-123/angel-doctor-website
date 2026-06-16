import { PageTemplate } from "@/components/PageTemplate";
import { createMetadata } from "@/config/metadata";
import { getPage } from "@/data/pages";

const page = getPage("/guides/china-vs-thailand-medical-tourism");

export const metadata = createMetadata(page);

export default function ChinaVsThailandMedicalTourismPage() {
  return <PageTemplate page={page} />;
}
