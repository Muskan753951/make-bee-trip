
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logoImg from "../../assets/images/logo.png";
import { useAuth } from "../../context/AuthContext";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { isLoggedIn, user, openLogin, logout } = useAuth();

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#" className="flex items-center gap-3">
          <img
            src={logoImg}
            alt="Make Bee Trip Logo"
            className="h-14 w-auto max-w-52.5 object-contain sm:h-16"
          />
          <div className="hidden sm:block">
            <p className="text-base font-semibold tracking-wide text-white">
              Make Bee Trip
            </p>
            <p className="text-xs text-slate-400">
              Travel smarter, feel better
            </p>
          </div>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          <a
            href="#services"
            className="text-sm font-medium text-slate-300 transition hover:text-cyan-400"
          >
            Services
          </a>
          <a
            href="#destinations"
            className="text-sm font-medium text-slate-300 transition hover:text-cyan-400"
          >
            Destinations
          </a>
          <a
            href="#hotels"
            className="text-sm font-medium text-slate-300 transition hover:text-cyan-400"
          >
            Hotels
          </a>
          <a
            href="#testimonials"
            className="text-sm font-medium text-slate-300 transition hover:text-cyan-400"
          >
            Reviews
          </a>
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          {isLoggedIn ? (
            <>
              <span className="text-sm font-medium text-slate-300">
                Hi, {user?.name}
              </span>
              <button
                onClick={logout}
                className="rounded-full border border-cyan-400/30 px-5 py-2 text-sm font-medium text-cyan-300 transition hover:border-cyan-300 hover:bg-cyan-400/10"
              >
                Logout
              </button>
            </>
          ) : (
            <button
              onClick={openLogin}
              className="rounded-full border border-cyan-400/30 px-5 py-2 text-sm font-medium text-cyan-300 transition hover:border-cyan-300 hover:bg-cyan-400/10"
            >
              Login/signup
            </button>
          )}
        </div>

        <button
          type="button"
          className="inline-flex rounded-full border border-white/10 p-2 text-white transition hover:bg-white/10 md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-white/10 bg-slate-950 md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4 sm:px-6">
            <a
              href="#services"
              className="text-sm font-medium text-slate-300 transition hover:text-cyan-400"
              onClick={() => setMenuOpen(false)}
            >
              Services
            </a>
            <a
              href="#destinations"
              className="text-sm font-medium text-slate-300 transition hover:text-cyan-400"
              onClick={() => setMenuOpen(false)}
            >
              Destinations
            </a>
            <a
              href="#hotels"
              className="text-sm font-medium text-slate-300 transition hover:text-cyan-400"
              onClick={() => setMenuOpen(false)}
            >
              Hotels
            </a>
            <a
              href="#testimonials"
              className="text-sm font-medium text-slate-300 transition hover:text-cyan-400"
              onClick={() => setMenuOpen(false)}
            >
              Reviews
            </a>

            {isLoggedIn ? (
              <div className="mt-2 flex flex-col gap-3">
                <span className="text-sm font-medium text-slate-300">
                  Hi, {user?.name}
                </span>
                <button
                  onClick={() => {
                    logout();
                    setMenuOpen(false);
                  }}
                  className="rounded-full bg-cyan-400 px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
                >
                  Logout
                </button>
              </div>
            ) : (
              <button
                onClick={() => {
                  openLogin();
                  setMenuOpen(false);
                }}
                className="mt-2 rounded-full bg-cyan-400 px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                Login/signup
              </button>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;