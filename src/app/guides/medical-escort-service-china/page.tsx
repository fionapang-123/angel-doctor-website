import { PageTemplate } from "@/components/PageTemplate";
import { createMetadata } from "@/config/metadata";
import { getPage } from "@/data/pages";

const page = getPage("/guides/medical-escort-service-china");

export const metadata = createMetadata(page);

export default function MedicalEscortServicePage() {
  return <PageTemplate page={page} />;
}
