export default function CharachterSlider() {
  return (
    <div className="mainbody__character">
      <div className="mainbody__character--wrap">
        <h4 className="mainbody__character--title">Character Length</h4>
        <h4 className="mainbody__character--count">0</h4>
      </div>
      <input
        type="range"
        className="mainbody__character--input"
        min={0}
        max={30}
        // value={10}
        step={1}
      />
    </div>
  );
}
