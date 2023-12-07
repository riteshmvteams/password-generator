import { createContext, useState } from "react";
import { generatePassword } from "../utils/generate";

export type contextType = {
  passLength: number;
  setPassLength: (val: number) => void;
  uppercase: boolean;
  setUppercase: (val: boolean) => void;
  lowercase: boolean;
  setLowercase: (val: boolean) => void;
  numbers: boolean;
  setNumbers: (val: boolean) => void;
  special: boolean;
  setSpecial: (val: boolean) => void;
  getPassword: () => void;
  password: string;
  copyClipboard: () => void;
};

export const PasswordContext = createContext<contextType | undefined>(
  undefined
);
const PasswordProvider = ({ children }: { children: React.ReactNode }) => {
  const [passLength, setPassLength] = useState(10);
  const [uppercase, setUppercase] = useState(false);
  const [lowercase, setLowercase] = useState(false);
  const [numbers, setNumbers] = useState(false);
  const [special, setSpecial] = useState(false);
  const [password, setPassword] = useState<string>("");

  const getPassword = () => {
    if (passLength < 10) {
      window.alert("Select atleast 10 characters");
      return;
    }
    const pass = generatePassword(
      passLength,
      uppercase,
      lowercase,
      numbers,
      special
    );
    setPassword(pass);
  };

  const copyClipboard = () => {
    window.navigator.clipboard.writeText(password);
  };

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
    getPassword,
    password,
    copyClipboard,
  };

  return (
    <PasswordContext.Provider value={value}>
      {children}
    </PasswordContext.Provider>
  );
};

export default PasswordProvider;
