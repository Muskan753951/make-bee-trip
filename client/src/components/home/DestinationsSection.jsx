import SectionTitle from "../common/SectionTitle";

const destinations = [
  {
    name: "Bali, Indonesia",
    image:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1000&q=80",
    desc: "Tropical beaches, private villas, and relaxing nature escapes.",
  },
  {
    name: "Paris, France",
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1000&q=80",
    desc: "Romantic streets, iconic landmarks, and unforgettable culture.",
  },
  {
    name: "Dubai, UAE",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1000&q=80",
    desc: "Luxury shopping, modern skylines, and desert adventures.",
  },
  {
    name: "Manali, India",
    image:
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1000&q=80",
    desc: "Snowy peaks, mountain roads, and cozy scenic stays.",
  },
];

const DestinationsSection = () => {
  return (
    <section id="destinations" className="bg-slate-950 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="Top Destinations"
          title="Explore trending places for your next unforgettable journey"
          subtitle="Choose from world-famous travel spots, handpicked for beauty, comfort, and experience."
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {destinations.map((item, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-900/70"
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/20 to-transparent" />
                <div className="absolute bottom-0 left-0 p-5">
                  <h3 className="text-2xl font-semibold text-white">
                    {item.name}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-200">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DestinationsSection;