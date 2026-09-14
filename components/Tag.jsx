export default function Tag({ children }) {
  return (
    <span className="rounded-full border border-line-400 px-2.5 py-0.5 font-mono text-[11px] text-muted">
      {children}
    </span>
  );
}
