import SectionTitle from "../common/SectionTitle";

const testimonials = [
  {
    name: "Aarav Mehta",
    role: "Frequent Traveler",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    review:
      "Make Bee Trip made my vacation planning incredibly easy. The UI feels premium, and I found the perfect hotel and flight combination in minutes.",
  },
  {
    name: "Sneha Kapoor",
    role: "Solo Explorer",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    review:
      "I loved how smooth everything felt, from browsing destinations to checking hotels. It looks modern and actually feels enjoyable to use.",
  },
  {
    name: "Rohan Verma",
    role: "Business Traveler",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
    review:
      "Fast, elegant, and well organized. This platform saved me time when comparing travel options and gave me a much better experience than most travel sites.",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="bg-slate-900 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="Testimonials"
          title="Travelers love the comfort, speed, and experience we deliver"
          subtitle="Real people, real journeys, and memorable booking experiences powered by thoughtful design."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="rounded-[1.75rem] border border-white/10 bg-slate-950/70 p-6 transition hover:-translate-y-2 hover:border-cyan-400/20 hover:shadow-xl hover:shadow-cyan-950/20"
            >
              <p className="text-sm leading-7 text-slate-300">“{item.review}”</p>

              <div className="mt-6 flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-14 w-14 rounded-full object-cover ring-2 ring-cyan-400/20"
                />
                <div>
                  <h3 className="text-base font-semibold text-white">
                    {item.name}
                  </h3>
                  <p className="text-sm text-slate-400">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;