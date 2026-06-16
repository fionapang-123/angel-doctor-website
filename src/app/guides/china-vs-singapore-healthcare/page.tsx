import { PageTemplate } from "@/components/PageTemplate";
import { createMetadata } from "@/config/metadata";
import { getPage } from "@/data/pages";

const page = getPage("/guides/china-vs-singapore-healthcare");

export const metadata = createMetadata(page);

export default function ChinaVsSingaporeHealthcarePage() {
  return <PageTemplate page={page} />;
}
