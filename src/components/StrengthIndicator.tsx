// @ts-nocheck
import { useContext } from "react";
import { PasswordContext, contextType } from "../context/PasswordContext";

export default function StrengthIndicator() {
  const { passLength } = useContext<contextType>(PasswordContext);
  const passLengthIndicator =
    passLength <= 12
      ? "Low"
      : passLength > 12 && passLength < 23
      ? "Medium"
      : passLength > 22
      ? "Good"
      : "";

  return (
    <div className="mainbody__strength">
      <h4 className={`mainbody__strength--title ${passLengthIndicator}`}>
        Strength
      </h4>
      <div className={`mainbody__strength--indicator ${passLengthIndicator}`}>
        <h4 className={`${passLengthIndicator}`}>{passLengthIndicator}</h4>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}
