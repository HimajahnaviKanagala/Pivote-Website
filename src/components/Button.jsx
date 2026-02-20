export default function Button({
  children,
  variant = "primary",
  onClick,
  type = "button",
}) {
  const base =
    "inline-flex items-center gap-2.5 text-sm font-medium tracking-wide px-7 py-3.5 rounded-sm cursor-pointer transition-all duration-200 border-none font-body";

  const variants = {
    primary: "bg-ink text-paper hover:bg-accent",
    outline:
      "bg-transparent text-ink border-2 border-ink hover:bg-ink hover:text-paper",
    ghost: "bg-transparent text-accent p-0 hover:gap-4",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${base} ${variants[variant]}`}
    >
      {children}
    </button>
  );
}
