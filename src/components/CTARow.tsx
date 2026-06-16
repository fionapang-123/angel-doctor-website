import { CTAButton } from "@/components/CTAButton";

export function CTARow({ className }: { className?: string }) {
  return (
    <div className={`text-center ${className ?? ""}`}>
      <CTAButton cta="carePlan" />
    </div>
  );
}
