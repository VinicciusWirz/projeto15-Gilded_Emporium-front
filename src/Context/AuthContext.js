import { createContext, useState } from "react";

const AuthContext = createContext({});

export function AuthProvider({ children }) {
  const localData = localStorage.getItem("auth");
  let nameStored = "";
  let tokenStored = "";
  if (localData) {
    const { name, token } = JSON.parse(localData);
    nameStored = name;
    tokenStored = token;
  }
  const [token, setToken] = useState(tokenStored);
  const [name, setName] = useState(nameStored);

  return (
    <AuthContext.Provider value={{ token, setToken, name, setName }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
