import { PageTemplate } from "@/components/PageTemplate";
import { createMetadata } from "@/config/metadata";
import { getPage } from "@/data/pages";

const page = getPage("/guides/why-china-public-tertiary-hospitals");

export const metadata = createMetadata(page);

export default function WhyChinaPublicTertiaryHospitalsPage() {
  return <PageTemplate page={page} />;
}
