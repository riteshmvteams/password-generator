// @ts-nocheck
import { useContext } from "react";
import { PasswordContext, contextType } from "../context/PasswordContext";

export default function Button() {
  const { passLength, uppercase, lowercase, numbers, special, getPassword } =
    useContext<contextType>(PasswordContext);

  const isDisabled =
    passLength < 10 || (!uppercase && !lowercase && !numbers && !special);
  // const dis = passLength < 10 || !uppercase
  return (
    <button className="generateBtn" disabled={isDisabled} onClick={getPassword}>
      <span className="generateBtn__text">Generate</span>
      <span className="generateBtn__icon">
        <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#24232C"
            d="m5.106 12 6-6-6-6-1.265 1.265 3.841 3.84H.001v1.79h7.681l-3.841 3.84z"
          ></path>
        </svg>
      </span>
    </button>
  );
}
