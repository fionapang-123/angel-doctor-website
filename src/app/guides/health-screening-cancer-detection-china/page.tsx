import { PageTemplate } from "@/components/PageTemplate";
import { createMetadata } from "@/config/metadata";
import { getPage } from "@/data/pages";

const page = getPage("/guides/health-screening-cancer-detection-china");

export const metadata = createMetadata(page);

export default function HealthScreeningCancerDetectionPage() {
  return <PageTemplate page={page} />;
}
