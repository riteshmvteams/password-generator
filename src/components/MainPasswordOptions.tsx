// component
import Button from "./Button";
import CharachterSlider from "./CharachterSlider";
import PasswordOptions from "./PasswordOptions";
import StrengthIndicator from "./StrengthIndicator";

export default function MainPasswordOptions() {
  return (
    <div className="mainbody">
      <CharachterSlider />
      <PasswordOptions />
      <StrengthIndicator />
      <Button />
    </div>
  );
}
