import { PageTemplate } from "@/components/PageTemplate";
import { createMetadata } from "@/config/metadata";
import { getPage } from "@/data/pages";

const page = getPage("/guides/can-foreigners-see-doctors-in-china");

export const metadata = createMetadata(page);

export default function ForeignersSeeDoctorsPage() {
  return <PageTemplate page={page} />;
}
