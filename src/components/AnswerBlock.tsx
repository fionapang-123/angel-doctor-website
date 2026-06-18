import type { ReactNode } from "react";
import { BadgeCheck } from "lucide-react";

type AnswerBlockProps = {
  eyebrow?: string;
  title: string;
  children: ReactNode;
  className?: string;
};

export function AnswerBlock({
  eyebrow = "Quick Answer",
  title,
  children,
  className = "",
}: AnswerBlockProps) {
  return (
    <section className={`border-y border-primary/10 bg-blush/35 ${className}`}>
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
          <BadgeCheck className="size-3.5" aria-hidden="true" />
          {eyebrow}
        </div>
        <h2 className="mt-3 max-w-3xl text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
          {title}
        </h2>
        <div className="mt-3 max-w-3xl text-sm leading-7 text-muted sm:text-base">{children}</div>
      </div>
    </section>
  );
}
