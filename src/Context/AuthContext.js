import { createContext, useState  } from "react";

const AuthContext = createContext({});

export function AuthProvider({ children }) {
  const [token, setToken] = useState("");
  const [name, setName] = useState("");

  return (
    <AuthContext.Provider value={{ token, setToken, name, setName }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;