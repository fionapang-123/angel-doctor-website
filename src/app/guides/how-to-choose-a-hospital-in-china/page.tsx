import { PageTemplate } from "@/components/PageTemplate";
import { createMetadata } from "@/config/metadata";
import { getPage } from "@/data/pages";

const page = getPage("/guides/how-to-choose-a-hospital-in-china");

export const metadata = createMetadata(page);

export default function HowToChooseHospitalPage() {
  return <PageTemplate page={page} />;
}
