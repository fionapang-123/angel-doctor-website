import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

type BrandMarkProps = {
  compact?: boolean;
  /** @deprecated kept for backward compat — same transparent logo used everywhere */
  inverse?: boolean;
  className?: string;
};

export function BrandMark({ compact = false, className }: BrandMarkProps) {
  // RGBA transparent logo — no background block visible on any surface
  const src = "/images/angel-doctor-logo.png";
  // Dimensions: 500×200, ratio 2.5
  const w = compact ? 120 : 280;
  const h = Math.round(w / 2.5);

  return (
    <Link
      href="/"
      aria-label="Angel Doctor — China healthcare, guided end to end"
      className={cn("inline-flex shrink-0", className)}
    >
      <div className={compact ? "w-24 sm:w-28 lg:w-[120px]" : "w-[280px]"}>
        <Image
          src={src}
          alt="Angel Doctor"
          width={w}
          height={h}
          className="h-auto w-full"
          priority
        />
      </div>
    </Link>
  );
}
