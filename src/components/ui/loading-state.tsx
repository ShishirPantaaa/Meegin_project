export function LoadingState({ message = "Loading content..." }: { message?: string }) {
  return (
    <div className="rounded-3xl border border-dashed border-slate-300 bg-white p-8 text-center shadow-sm">
      <p className="text-base font-medium text-slate-600">{message}</p>
    </div>
  );
}
