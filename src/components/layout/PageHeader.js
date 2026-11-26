import Link from "next/link";

export default function PageHeader({
  title,
  highlight,
  description,
  breadcrumbs = [],
}) {
  return (
    <section className="relative pt-8 pb-10 sm:pt-12 sm:pb-14 overflow-hidden bg-gradient-to-b from-purple-50/90 via-purple-50/40 to-white border-b border-purple-100">
      {/* Subtle background tech grid */}
      <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#6803F5_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-72 h-72 bg-[#6803F5]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-60 h-60 bg-[#27B2DD]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Clean Breadcrumb */}
        {breadcrumbs.length > 0 && (
          <nav className="flex items-center space-x-2 text-xs text-slate-500 mb-3 font-mono font-normal">
            <Link href="/" className="hover:text-[#6803F5] transition-colors">
              Home
            </Link>
            {breadcrumbs.map((crumb, idx) => (
              <span key={idx} className="flex items-center space-x-2">
                <span className="text-slate-400">/</span>
                {crumb.href ? (
                  <Link href={crumb.href} className="hover:text-[#6803F5] transition-colors">
                    {crumb.name}
                  </Link>
                ) : (
                  <span className="text-slate-800 font-medium">{crumb.name}</span>
                )}
              </span>
            ))}
          </nav>
        )}

        <div className="max-w-3xl">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-medium tracking-tight leading-tight text-slate-900 break-words">
            {title}{" "}
            {highlight && (
              <span className="text-gradient-violet">
                {highlight}
              </span>
            )}
          </h1>
          {description && (
            <p className="mt-2.5 text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed font-normal">
              {description}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
