import { useState } from "react";
import { X, Mail, Lock, User } from "lucide-react";
import { useAuth } from "../../context/AuthContext";

const AuthModal = () => {
  const {
    authOpen,
    authMode,
    setAuthMode,
    closeAuth,
    login,
    signup,
  } = useAuth();

  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });

  const [signupForm, setSignupForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");

  if (!authOpen) return null;

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");

    if (!loginForm.email || !loginForm.password) {
      setError("Please fill in all login fields.");
      return;
    }

    login(loginForm.email);
    setLoginForm({ email: "", password: "" });
  };

  const handleSignup = (e) => {
    e.preventDefault();
    setError("");

    if (
      !signupForm.name ||
      !signupForm.email ||
      !signupForm.password ||
      !signupForm.confirmPassword
    ) {
      setError("Please fill in all signup fields.");
      return;
    }

    if (signupForm.password !== signupForm.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    signup(signupForm.name, signupForm.email);
    setSignupForm({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  const inputClass =
    "w-full rounded-2xl border border-white/10 bg-white/5 py-3 pl-11 pr-4 text-sm text-white outline-none placeholder:text-slate-400 backdrop-blur-md focus:border-cyan-400/40";

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center bg-slate-950/70 px-4 backdrop-blur-sm">
      <div className="relative w-full max-w-md rounded-4xl border border-white/15 bg-white/10 p-5 shadow-[0_20px_80px_rgba(8,145,178,0.18)] backdrop-blur-2xl sm:p-6">
        <button
          onClick={closeAuth}
          className="absolute right-4 top-4 rounded-full border border-white/10 bg-white/5 p-2 text-slate-300 transition hover:bg-white/10 hover:text-white"
        >
          <X size={18} />
        </button>

        <div className="mb-6">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300">
            Welcome
          </p>
          <h2 className="mt-3 text-2xl font-bold text-white">
            {authMode === "login" ? "Login to continue" : "Create your account"}
          </h2>
          <p className="mt-2 text-sm text-slate-300">
            Continue your booking journey with a secure account.
          </p>
        </div>

        <div className="mb-6 flex rounded-full border border-white/10 bg-white/5 p-1">
          <button
            onClick={() => {
              setAuthMode("login");
              setError("");
            }}
            className={`w-1/2 rounded-full px-4 py-2 text-sm font-semibold transition ${
              authMode === "login"
                ? "bg-cyan-400 text-slate-950"
                : "text-slate-300 hover:text-white"
            }`}
          >
            Login
          </button>

          <button
            onClick={() => {
              setAuthMode("signup");
              setError("");
            }}
            className={`w-1/2 rounded-full px-4 py-2 text-sm font-semibold transition ${
              authMode === "signup"
                ? "bg-cyan-400 text-slate-950"
                : "text-slate-300 hover:text-white"
            }`}
          >
            Sign Up
          </button>
        </div>

        {authMode === "login" ? (
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="relative">
              <Mail
                size={16}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              />
              <input
                type="email"
                placeholder="Email address"
                value={loginForm.email}
                onChange={(e) =>
                  setLoginForm({ ...loginForm, email: e.target.value })
                }
                className={inputClass}
              />
            </div>

            <div className="relative">
              <Lock
                size={16}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              />
              <input
                type="password"
                placeholder="Password"
                value={loginForm.password}
                onChange={(e) =>
                  setLoginForm({ ...loginForm, password: e.target.value })
                }
                className={inputClass}
              />
            </div>

            {error && <p className="text-sm text-rose-400">{error}</p>}

            <button
              type="submit"
              className="w-full rounded-2xl bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              Login
            </button>
          </form>
        ) : (
          <form onSubmit={handleSignup} className="space-y-4">
            <div className="relative">
              <User
                size={16}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              />
              <input
                type="text"
                placeholder="Full name"
                value={signupForm.name}
                onChange={(e) =>
                  setSignupForm({ ...signupForm, name: e.target.value })
                }
                className={inputClass}
              />
            </div>

            <div className="relative">
              <Mail
                size={16}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              />
              <input
                type="email"
                placeholder="Email address"
                value={signupForm.email}
                onChange={(e) =>
                  setSignupForm({ ...signupForm, email: e.target.value })
                }
                className={inputClass}
              />
            </div>

            <div className="relative">
              <Lock
                size={16}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              />
              <input
                type="password"
                placeholder="Password"
                value={signupForm.password}
                onChange={(e) =>
                  setSignupForm({ ...signupForm, password: e.target.value })
                }
                className={inputClass}
              />
            </div>

            <div className="relative">
              <Lock
                size={16}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              />
              <input
                type="password"
                placeholder="Confirm password"
                value={signupForm.confirmPassword}
                onChange={(e) =>
                  setSignupForm({
                    ...signupForm,
                    confirmPassword: e.target.value,
                  })
                }
                className={inputClass}
              />
            </div>

            {error && <p className="text-sm text-rose-400">{error}</p>}

            <button
              type="submit"
              className="w-full rounded-2xl bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              Create Account
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default AuthModal;