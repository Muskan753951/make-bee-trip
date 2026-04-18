import SectionTitle from "../common/SectionTitle";
import { useAuth } from "../../context/AuthContext";


const hotels = [
  {
    name: "Grand Horizon Resort",
    location: "Goa, India",
    price: "₹6,500/night",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1000&q=80",
  },
  {
    name: "Skyline Palace Hotel",
    location: "Dubai, UAE",
    price: "₹12,800/night",
    image:
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=1000&q=80",
  },
  {
    name: "Ocean Pearl Stay",
    location: "Bali, Indonesia",
    price: "₹8,400/night",
    image:
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1000&q=80",
  },
];

const HotelsSection = () => {
  const { requireAuth } = useAuth();
  return (
    <section id="hotels" className="bg-slate-900 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="Luxury Stays"
          title="Find elegant hotels and memorable stays wherever you go"
          subtitle="Browse comfortable stays with premium service, scenic views, and top-rated hospitality."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {hotels.map((hotel, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-950/70 transition hover:-translate-y-2 hover:shadow-xl hover:shadow-cyan-950/20"
            >
              <img
                src={hotel.image}
                alt={hotel.name}
                className="h-64 w-full object-cover"
              />

              <div className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white">
                      {hotel.name}
                    </h3>
                    <p className="mt-2 text-sm text-slate-400">
                      {hotel.location}
                    </p>
                  </div>

                  <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-300">
                    4.8 ★
                  </span>
                </div>

                <div className="mt-6 flex items-center justify-between">
                  <p className="text-lg font-bold text-white">{hotel.price}</p>
                  <button  
                  onClick={() => requireAuth()}
                  className="rounded-full bg-cyan-400 px-5 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HotelsSection;



