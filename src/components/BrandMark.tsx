import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

type BrandMarkProps = {
  compact?: boolean;
  /** @deprecated kept for backward compat — same transparent logo used everywhere */
  inverse?: boolean;
  src?: string;
  imageWidth?: number;
  imageHeight?: number;
  logoClassName?: string;
  className?: string;
};

export function BrandMark({
  compact = false,
  src = "/images/angel-doctor-logo.png",
  imageWidth,
  imageHeight,
  logoClassName,
  className,
}: BrandMarkProps) {
  const w = imageWidth ?? (compact ? 120 : 280);
  const h = imageHeight ?? Math.round(w / 2.5);

  return (
    <Link
      href="/"
      aria-label="Angel Doctor — China healthcare, guided end to end"
      className={cn("inline-flex shrink-0", className)}
    >
      <div className={logoClassName ?? (compact ? "w-24 sm:w-28 lg:w-[120px]" : "w-[280px]")}>
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
