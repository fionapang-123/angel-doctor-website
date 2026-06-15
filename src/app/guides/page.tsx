import { PageTemplate } from "@/components/PageTemplate";
import { createMetadata } from "@/config/metadata";
import { getPage } from "@/data/pages";

const page = getPage("/guides");

export const metadata = createMetadata(page);

export default function GuidesPage() {
  return <PageTemplate page={page} />;
}
