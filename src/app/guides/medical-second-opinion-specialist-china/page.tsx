import { PageTemplate } from "@/components/PageTemplate";
import { createMetadata } from "@/config/metadata";
import { getPage } from "@/data/pages";

const page = getPage("/guides/medical-second-opinion-specialist-china");

export const metadata = createMetadata(page);

export default function MedicalSecondOpinionSpecialistPage() {
  return <PageTemplate page={page} />;
}
