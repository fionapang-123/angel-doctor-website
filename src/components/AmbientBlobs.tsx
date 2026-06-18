export function AmbientBlobs() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,231,245,0.76)_0%,rgba(255,255,255,0)_38%),linear-gradient(160deg,rgba(238,243,255,0.86)_18%,rgba(255,255,255,0)_66%)]" />
      <div className="absolute inset-x-0 top-0 h-px bg-white/80" />
      <div className="absolute inset-y-0 left-1/2 w-px bg-teal/5" />
    </div>
  );
}
