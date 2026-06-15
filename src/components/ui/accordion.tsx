import type { DetailsHTMLAttributes, HTMLAttributes } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export function Accordion({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("divide-y divide-border rounded-2xl border border-border bg-surface", className)} {...props} />;
}

export function AccordionItem({ className, ...props }: DetailsHTMLAttributes<HTMLDetailsElement>) {
  return <details className={cn("group", className)} {...props} />;
}

export function AccordionTrigger({ className, children, ...props }: HTMLAttributes<HTMLElement>) {
  return (
    <summary
      className={cn(
        "flex cursor-pointer list-none items-center justify-between gap-4 p-5 text-left text-base font-semibold text-foreground transition hover:text-primary",
        className,
      )}
      {...props}
    >
      <span>{children}</span>
      <ChevronDown aria-hidden="true" className="size-4 shrink-0 text-primary transition group-open:rotate-180" />
    </summary>
  );
}

export function AccordionContent({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("px-5 pb-5 text-sm leading-6 text-muted", className)} {...props} />;
}
