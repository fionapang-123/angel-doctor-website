import { PageTemplate } from "@/components/PageTemplate";
import { createMetadata } from "@/config/metadata";
import { getPage } from "@/data/pages";

const page = getPage("/guides/acupuncture-pain-management-china");

export const metadata = createMetadata(page);

export default function AcupuncturePainManagementPage() {
  return <PageTemplate page={page} />;
}
