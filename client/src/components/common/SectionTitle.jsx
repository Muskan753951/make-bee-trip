const SectionTitle = ({ badge, title, subtitle, align = "center" }) => {
  const alignment =
    align === "left" ? "items-start text-left" : "items-center text-center";

  return (
    <div className={`mb-12 flex flex-col ${alignment}`}>
      {badge && (
        <span className="mb-4 inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
          {badge}
        </span>
      )}

      <h2 className="max-w-3xl text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;