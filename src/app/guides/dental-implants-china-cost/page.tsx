import { PageTemplate } from "@/components/PageTemplate";
import { createMetadata } from "@/config/metadata";
import { getPage } from "@/data/pages";

const page = getPage("/guides/dental-implants-china-cost");

export const metadata = createMetadata(page);

export default function DentalImplantsChinaCostPage() {
  return <PageTemplate page={page} />;
}
