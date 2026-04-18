import { createContext, useContext, useMemo, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [authOpen, setAuthOpen] = useState(false);
  const [authMode, setAuthMode] = useState("login");
  const [user, setUser] = useState(null);

  const openLogin = () => {
    setAuthMode("login");
    setAuthOpen(true);
  };

  const openSignup = () => {
    setAuthMode("signup");
    setAuthOpen(true);
  };

  const closeAuth = () => {
    setAuthOpen(false);
  };

  const login = (email) => {
    setUser({
      name: email?.split("@")[0] || "Traveler",
      email,
    });
    setIsLoggedIn(true);
    setAuthOpen(false);
  };

  const signup = (name, email) => {
    setUser({
      name: name || "Traveler",
      email,
    });
    setIsLoggedIn(true);
    setAuthOpen(false);
  };

  const logout = () => {
    setUser(null);
    setIsLoggedIn(false);
  };

  const requireAuth = (callback, mode = "login") => {
    if (isLoggedIn) {
      if (callback) callback();
      return;
    }
    setAuthMode(mode);
    setAuthOpen(true);
  };

  const value = useMemo(
    () => ({
      isLoggedIn,
      user,
      authOpen,
      authMode,
      setAuthMode,
      openLogin,
      openSignup,
      closeAuth,
      login,
      signup,
      logout,
      requireAuth,
    }),
    [isLoggedIn, user, authOpen, authMode]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);