import { ShieldCheck, Wallet, Headphones, Sparkles } from "lucide-react";
import SectionTitle from "../common/SectionTitle";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Trusted Booking Experience",
    desc: "Secure booking flow with reliable options and user-first design for stress-free planning.",
  },
  {
    icon: Wallet,
    title: "Best Price Choices",
    desc: "Compare budget-friendly and premium travel options without wasting time across platforms.",
  },
  {
    icon: Headphones,
    title: "24/7 Travel Support",
    desc: "Get responsive support whenever you need help with bookings, changes, or destination queries.",
  },
  {
    icon: Sparkles,
    title: "Curated Travel Moments",
    desc: "Enjoy thoughtfully selected destinations, stays, and travel experiences for every mood.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-slate-950 py-20">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <SectionTitle
            badge="Why Choose Us"
            title="We make modern travel booking simpler, faster, and more premium"
            subtitle="From planning to booking, every part of your journey is designed to feel smooth, smart, and inspiring."
            align="left"
          />
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {reasons.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="rounded-3xl border border-white/10 bg-slate-900/80 p-6 transition hover:border-cyan-400/20 hover:bg-slate-900"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300">
                  <Icon size={22} />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;