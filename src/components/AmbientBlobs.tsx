export function AmbientBlobs() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="animate-blob absolute -left-20 -top-20 size-72 rounded-full bg-blush/60 blur-3xl" />
      <div className="animate-blob absolute -right-16 top-1/3 size-64 rounded-full bg-blush/50 blur-3xl" style={{ animationDelay: "-6s" }} />
      <div className="animate-blob absolute bottom-0 left-1/3 size-56 rounded-full bg-blush/40 blur-3xl" style={{ animationDelay: "-12s" }} />
    </div>
  );
}
