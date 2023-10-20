import { createContext, useState } from "react";

export const PasswordContext = createContext<unknown>(null);
const PasswordProvider = ({ children }: { children: React.ReactNode }) => {
  const [passLength, setPassLength] = useState(0);
  const [uppercase, setUppercase] = useState(false);
  const [lowercase, setLowercase] = useState(false);
  const [numbers, setNumbers] = useState(false);
  const [special, setSpecial] = useState(false);

  const value = {
    passLength,
    setPassLength,
    uppercase,
    setUppercase,
    lowercase,
    setLowercase,
    numbers,
    setNumbers,
    special,
    setSpecial,
  };

  return (
    <PasswordContext.Provider value={value}>
      {children}
    </PasswordContext.Provider>
  );
};

export default PasswordProvider;
