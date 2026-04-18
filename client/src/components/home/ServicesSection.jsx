import { Plane, Bus, Train, Hotel } from "lucide-react";
import SectionTitle from "../common/SectionTitle";

const services = [
  {
    icon: Plane,
    title: "Flight Booking",
    desc: "Find and compare domestic and international flights with smart filters and quick booking support.",
  },
  {
    icon: Bus,
    title: "Bus Reservation",
    desc: "Book comfortable bus rides across cities with reliable timing, seat selection, and affordable prices.",
  },
  {
    icon: Train,
    title: "Train Search",
    desc: "Check train routes, timings, and availability in one place for faster and easier travel planning.",
  },
  {
    icon: Hotel,
    title: "Hotel Stays",
    desc: "Explore premium hotels and budget-friendly stays with handpicked comfort and location benefits.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="bg-slate-900 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="Our Services"
          title="Everything you need for a complete travel experience"
          subtitle="From transport to stays, Make Bee Trip helps you plan every important part of your journey with speed, comfort, and style."
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="group rounded-3xl border border-white/10 bg-slate-950/70 p-6 transition duration-300 hover:-translate-y-2 hover:border-cyan-400/30 hover:shadow-xl hover:shadow-cyan-950/20"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300 ring-1 ring-cyan-400/20">
                  <Icon size={26} />
                </div>

                <h3 className="mt-6 text-xl font-semibold text-white">
                  {service.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-400">
                  {service.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;