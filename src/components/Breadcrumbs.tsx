import { Breadcrumb } from "@/components/ui/breadcrumb";
import type { LinkItem } from "@/types/page";

export function Breadcrumbs({ items }: { items: LinkItem[] }) {
  return <Breadcrumb items={items} />;
}
