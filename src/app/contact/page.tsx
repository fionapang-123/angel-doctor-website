import { ContactPageClient } from "@/app/contact/ContactPageClient";
import { createMetadata } from "@/config/metadata";
import { getPage } from "@/data/pages";

const page = {
  ...getPage("/contact"),
  title: "Contact Angel Doctor | Medical Travel Support in China",
  description:
    "Contact Angel Doctor for medical travel coordination, hospital access support, and local medical escort services in China.",
};

export const metadata = createMetadata(page);

export default function ContactPage() {
  return <ContactPageClient />;
}
