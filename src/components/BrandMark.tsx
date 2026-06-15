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
  // Aspect ratio: 1536/1024 = 1.5
  const w = compact ? 220 : 280;
  const h = Math.round(w / 1.5);

  return (
    <Link
      href="/"
      aria-label="Angel Doctor — China healthcare, guided end to end"
      className={cn("inline-flex shrink-0", className)}
    >
      <div style={{ width: w }}>
        <Image
          src={src}
          alt="Angel Doctor"
          width={w}
          height={h}
          style={{ width: "100%", height: "auto" }}
          priority
        />
      </div>
    </Link>
  );
}
