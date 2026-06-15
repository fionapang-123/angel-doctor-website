import { PricingPage } from "@/components/PricingPage";
import { createMetadata } from "@/config/metadata";
import { getPage } from "@/data/pages";

const page = getPage("/pricing");

export const metadata = createMetadata(page);

export default function Pricing() {
  return <PricingPage />;
}
