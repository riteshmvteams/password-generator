// @ts-nocheck

import { useContext } from "react";
import { PasswordContext, contextType } from "../context/PasswordContext";

export default function PasswordOptions() {
  const {
    uppercase,
    lowercase,
    numbers,
    special,
    setUppercase,
    setLowercase,
    setNumbers,
    setSpecial,
  } = useContext<contextType>(PasswordContext);

  return (
    <div className="mainbody__options">
      <label htmlFor="uppercase" className="mainbody__options--option">
        <input
          checked={uppercase}
          onChange={() => setUppercase(!uppercase)}
          type="checkbox"
          name="uppercase"
          id="uppercase"
        />
        <span>Include Uppercase Letters</span>
      </label>

      <label htmlFor="lowercase" className="mainbody__options--option">
        <input
          checked={lowercase}
          onChange={() => setLowercase(!lowercase)}
          type="checkbox"
          name="lowercase"
          id="lowercase"
        />
        <span>Include Lowercase Letters</span>
      </label>

      <label htmlFor="numbers" className="mainbody__options--option">
        <input
          checked={numbers}
          onChange={() => setNumbers(!numbers)}
          type="checkbox"
          name="numbers"
          id="numbers"
        />
        <span>Include Numbers</span>
      </label>

      <label htmlFor="special" className="mainbody__options--option">
        <input
          checked={special}
          onChange={() => setSpecial(!special)}
          type="checkbox"
          name="special"
          id="special"
        />
        <span>Include Symbols</span>
      </label>
    </div>
  );
}
