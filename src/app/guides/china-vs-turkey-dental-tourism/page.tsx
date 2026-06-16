import { PageTemplate } from "@/components/PageTemplate";
import { createMetadata } from "@/config/metadata";
import { getPage } from "@/data/pages";

const page = getPage("/guides/china-vs-turkey-dental-tourism");

export const metadata = createMetadata(page);

export default function ChinaVsTurkeyDentalTourismPage() {
  return <PageTemplate page={page} />;
}
