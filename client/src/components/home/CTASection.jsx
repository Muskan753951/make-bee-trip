import { useAuth } from "../../context/AuthContext";
const CTASection = () => {
  const { requireAuth } = useAuth();
  return (
    <section className="bg-slate-950 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-4xl border border-cyan-400/20 bg-linear-to-r from-cyan-500/15 via-slate-900 to-blue-500/10 px-6 py-14 text-center sm:px-10">
          <div className="absolute -left-10 top-0 h-32 w-32 rounded-full bg-cyan-400/20 blur-3xl" />
          <div className="absolute -right-10 bottom-0 h-32 w-32 rounded-full bg-blue-500/20 blur-3xl" />

          <div className="relative">
            <span className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
              Ready to Travel
            </span>

            <h2 className="mx-auto mt-6 max-w-3xl text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Start planning your next journey with confidence and style
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
              Discover destinations, compare travel options, and book your next
              unforgettable experience with Make Bee Trip.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <button
              onClick={() => requireAuth()}
              className="rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300">
                Book a Trip
              </button>
              <button className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/5">
                Explore Destinations
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;