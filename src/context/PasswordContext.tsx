import { createContext, useState } from "react";

export const PasswordContext = createContext<unknown>(null);

const PasswordProvider = ({ children }: { children: React.ReactNode }) => {
  const [passLength, setPassLength] = useState(0);

  return (
    <PasswordContext.Provider value={{ passLength, setPassLength }}>
      {children}
    </PasswordContext.Provider>
  );
};

export default PasswordProvider;
