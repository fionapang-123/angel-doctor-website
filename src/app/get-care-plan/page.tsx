import { redirect } from "next/navigation";
import { createMetadata } from "@/config/metadata";

const page = {
  slug: "/get-care-plan",
  title: "Get Your Care Plan | Angel Doctor",
  description:
    "Start a care plan request with Angel Doctor for medical travel coordination, hospital matching, and local medical escort support in China.",
};

export const metadata = createMetadata(page);

export default function GetCarePlanPage() {
  redirect("/contact");
}
