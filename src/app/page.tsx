import { HomePage } from "@/components/HomePage";
import { createMetadata } from "@/config/metadata";
import { getPage } from "@/data/pages";

const page = getPage("/");

export const metadata = createMetadata(page);

export default function Home() {
  return <HomePage />;
}
