export default function PasswordOptions() {
  return (
    <div className="mainbody__options">
      <label htmlFor="uppercase" className="mainbody__options--option">
        <input type="checkbox" name="uppercase" id="uppercase" />
        <span>Include Uppercase Letters</span>
      </label>

      <label htmlFor="lowercase" className="mainbody__options--option">
        <input type="checkbox" name="lowercase" id="lowercase" />
        <span>Include Lowercase Letters</span>
      </label>

      <label htmlFor="numbers" className="mainbody__options--option">
        <input type="checkbox" name="numbers" id="numbers" />
        <span>Include Numbers</span>
      </label>

      <label htmlFor="special" className="mainbody__options--option">
        <input type="checkbox" name="special" id="special" />
        <span>Include Symbols</span>
      </label>
    </div>
  );
}
