"use client";

import Image from "next/image";
import { MapPin, Building2 } from "lucide-react";
import type { Hospital } from "@/data/hospitals";

export function HospitalCard({ hospital, index = 0 }: { hospital: Hospital; index?: number }) {
  const stagger = `stagger-${Math.min(index, 11)}`;
  return (
    <article className={`group animate-fade-up ${stagger} flex flex-col overflow-hidden rounded-2xl border border-line bg-surface shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-primary/15 hover:shadow-card`}>
      {/* Photo */}
      {hospital.photo ? (
        <div className="relative h-32 sm:h-40 w-full overflow-hidden bg-mist">
          <Image
            src={hospital.photo}
            alt={hospital.name}
            fill
            className="object-contain p-3 transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          {/* City badge */}
          <div className="absolute top-2 left-2 flex items-center gap-1 rounded-full bg-white/90 px-2.5 py-0.5 text-[11px] font-medium text-foreground shadow-sm backdrop-blur-sm">
            <MapPin className="size-3 text-primary/70" />
            {hospital.city}
          </div>
        </div>
      ) : (
        <div className="relative h-32 sm:h-40 w-full bg-mist flex items-center justify-center">
          <Building2 className="size-10 text-muted/30" />
          <div className="absolute top-2 left-2 flex items-center gap-1 rounded-full bg-white/90 px-2.5 py-0.5 text-[11px] font-medium text-foreground shadow-sm backdrop-blur-sm">
            <MapPin className="size-3 text-primary/70" />
            {hospital.city}
          </div>
        </div>
      )}

      {/* Content */}
      <div className="flex flex-1 flex-col p-5">
        {/* Name */}
        <h3 className="font-sora text-[15px] font-semibold leading-snug tracking-tight text-foreground group-hover:text-primary transition-colors">
          {hospital.name}
        </h3>
        <p className="mt-0.5 text-[13px] leading-snug text-muted">
          {hospital.nameEn}
        </p>

        {/* Meta */}
        <p className="mt-1.5 text-xs text-muted">
          {hospital.type}
        </p>

        {/* Tags */}
        <div className="mt-3 flex flex-wrap gap-1.5">
          {hospital.treatments.slice(0, 4).map((t) => (
            <span key={t} className="rounded-full border border-line bg-mist/50 px-2.5 py-1 text-[11px] font-medium text-muted transition-colors group-hover:border-primary/15">
              {t}
            </span>
          ))}
          {hospital.treatments.length > 4 && (
            <span className="rounded-full px-2.5 py-1 text-[11px] font-medium text-muted/60">
              +{hospital.treatments.length - 4} more
            </span>
          )}
        </div>

        {/* Support line */}
        <p className="mt-3 text-xs leading-5 text-muted/80">
          Angel Doctor: matching · coordination · translation · local escort
        </p>

        {/* Availability disclaimer */}
        <p className="mt-2 text-[10px] leading-4 text-muted/55">
          Availability depends on department capacity, doctor schedule, and provider confirmation.
        </p>
      </div>
    </article>
  );
}
