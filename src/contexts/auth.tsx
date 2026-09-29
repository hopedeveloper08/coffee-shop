import { createContext, useState } from "react";
import type { ReactNode } from "react";

type AuthContextType = {
  user: string;
  login: () => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType>({
  user: "",
  login: () => {},
  logout: () => {},
});

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState("");

  const login = () => {
    setUser("رضا شهرکی");
  };

  const logout = () => {
    setUser("");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
