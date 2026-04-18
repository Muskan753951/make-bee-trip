
import BookingTabs from "./BookingTabs";
import { useAuth } from "../../context/AuthContext";

const HeroSection = () => {
  const { requireAuth } = useAuth();

  return (
    <section className="relative overflow-hidden bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(6,182,212,0.14),transparent_24%),radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.10),transparent_28%)]" />

      <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 md:py-16 lg:px-8 lg:py-20">
        <div className="grid items-start gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
          <div className="max-w-3xl pt-4">
            <span className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
              Smart Travel Booking
            </span>

            <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Search and book flights, trains, buses, and hotels easily
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              Clean travel booking experience with premium UI and faster search.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button
                onClick={() => requireAuth()}
                className="rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                Plan a Trip
              </button>

              <button
                onClick={() => requireAuth(null, "signup")}
                className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/5"
              >
                Create Account
              </button>
            </div>
          </div>

          <div className="lg:pl-4">
            <BookingTabs />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;