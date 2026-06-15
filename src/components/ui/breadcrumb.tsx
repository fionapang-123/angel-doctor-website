import Link from "next/link";
import { ChevronRight } from "lucide-react";
import type { LinkItem } from "@/types/page";
import { cn } from "@/lib/utils";

export function Breadcrumb({ items, className }: { items: LinkItem[]; className?: string }) {
  return (
    <nav aria-label="Breadcrumb" className={cn("text-sm text-muted", className)}>
      <ol className="flex flex-wrap items-center gap-1.5">
        {items.map((item, index) => (
          <li key={item.href} className="flex items-center gap-1.5">
            {index > 0 ? <ChevronRight aria-hidden="true" className="size-3.5 text-muted/60" /> : null}
            <Link href={item.href} className="rounded-md px-1 py-1 transition hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/25">
              {item.label}
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  );
}
