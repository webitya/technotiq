import Link from "next/link";

export default function Button({
  children,
  href,
  variant = "primary", // 'primary' | 'secondary' | 'accent' | 'outline'
  size = "md", // 'sm' | 'md' | 'lg'
  className = "",
  type = "button",
  onClick,
  ...props
}) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-full transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 active:scale-[0.98]";

  const sizes = {
    sm: "text-xs px-4 py-2 gap-1.5",
    md: "text-sm px-6 py-3 gap-2.5",
    lg: "text-base px-8 py-3.5 gap-3",
  };

  const variants = {
    primary:
      "bg-black text-white hover:bg-slate-900 shadow-sm hover:shadow-md focus-visible:ring-black",
    secondary:
      "bg-white text-slate-900 border border-slate-200 hover:border-slate-300 hover:bg-slate-50 shadow-sm focus-visible:ring-slate-400",
    accent:
      "bg-[#6803F5] text-white hover:bg-[#5502C7] shadow-sm hover:shadow-lg hover:shadow-purple-500/20 focus-visible:ring-purple-600",
    outline:
      "bg-transparent text-[#6803F5] border border-[#6803F5] hover:bg-purple-50 focus-visible:ring-purple-600",
  };

  const combinedClasses = `${baseStyles} ${sizes[size] || sizes.md} ${variants[variant] || variants.primary} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedClasses} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={combinedClasses} {...props}>
      {children}
    </button>
  );
}
