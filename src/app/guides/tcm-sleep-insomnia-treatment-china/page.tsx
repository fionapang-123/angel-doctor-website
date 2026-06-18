import { PageTemplate } from "@/components/PageTemplate";
import { createMetadata } from "@/config/metadata";
import { getPage } from "@/data/pages";

const page = getPage("/guides/tcm-sleep-insomnia-treatment-china");

export const metadata = createMetadata(page);

export default function TCMSleepInsomniaTreatmentPage() {
  return <PageTemplate page={page} />;
}
