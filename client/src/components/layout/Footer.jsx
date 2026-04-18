const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-slate-950">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div className="lg:col-span-2">
          <h3 className="text-2xl font-semibold text-white">Make Bee Trip</h3>
          <p className="mt-4 max-w-xl text-sm leading-7 text-slate-400">
            Your modern travel partner for flights, buses, trains, hotels, and
            unforgettable destination planning. Explore smarter routes, better
            stays, and premium travel experiences in one place.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
            Quick Links
          </h4>
          <ul className="mt-4 space-y-3 text-sm text-slate-400">
            <li>
              <a href="#services" className="transition hover:text-white">
                Services
              </a>
            </li>
            <li>
              <a href="#destinations" className="transition hover:text-white">
                Destinations
              </a>
            </li>
            <li>
              <a href="#hotels" className="transition hover:text-white">
                Hotels
              </a>
            </li>
            <li>
              <a href="#testimonials" className="transition hover:text-white">
                Reviews
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
            Contact
          </h4>
          <ul className="mt-4 space-y-3 text-sm text-slate-400">
            <li>Delhi, India</li>
            <li>support@makebeetrip.com</li>
            <li>+91 98765 43210</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 px-4 py-5 text-center text-sm text-slate-500">
        © 2026 Make Bee Trip. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;