import { HowItWorksPage } from "@/components/HowItWorksPage";
import { createMetadata } from "@/config/metadata";
import { getPage } from "@/data/pages";

const page = getPage("/how-it-works");

export const metadata = createMetadata(page);

export default function HowItWorks() {
  return <HowItWorksPage />;
}
