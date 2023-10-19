export default function CharachterSlider() {
  return (
    <div className="mainbody__character">
      <h4 className="mainbody__character--title">Character Length</h4>
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
