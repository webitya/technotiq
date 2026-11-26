import Link from "next/link";

export default function PageHeader({
  title,
  highlight,
  description,
  breadcrumbs = [],
}) {
  return (
    <section className="relative pt-16 pb-20 overflow-hidden bg-slate-900 text-white border-b border-slate-800">
      {/* Subtle background tech grid */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#6803F5_1px,transparent_1px)] [background-size:24px_24px]" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#6803F5]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#27B2DD]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Clean Breadcrumb */}
        {breadcrumbs.length > 0 && (
          <nav className="flex items-center space-x-2 text-xs text-slate-400 mb-6 font-mono font-normal">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            {breadcrumbs.map((crumb, idx) => (
              <span key={idx} className="flex items-center space-x-2">
                <span className="text-slate-600">/</span>
                {crumb.href ? (
                  <Link href={crumb.href} className="hover:text-white transition-colors">
                    {crumb.name}
                  </Link>
                ) : (
                  <span className="text-slate-300 font-normal">{crumb.name}</span>
                )}
              </span>
            ))}
          </nav>
        )}

        <div className="max-w-3xl">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight leading-tight text-white">
            {title}{" "}
            {highlight && (
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B5CF6] via-[#A855F7] to-[#27B2DD]">
                {highlight}
              </span>
            )}
          </h1>
          {description && (
            <p className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              {description}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
