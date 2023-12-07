// @ts-nocheck
import { useContext } from "react";
import { PasswordContext, contextType } from "../context/PasswordContext";

export default function CharachterSlider() {
  const { passLength, setPassLength } =
    useContext<contextType>(PasswordContext);

  return (
    <div className="mainbody__character">
      <div className="mainbody__character--wrap">
        <h4 className="mainbody__character--title">Character Length</h4>
        <h4 className="mainbody__character--count">{passLength}</h4>
      </div>
      <input
        type="range"
        className="mainbody__character--input"
        min={0}
        max={30}
        step={1}
        value={passLength}
        onChange={(e) => setPassLength(Number(e.target.value))}
      />
    </div>
  );
}
