// components
import MainPasswordOptions from "./components/MainPasswordOptions";
import PasswordInput from "./components/PasswordInput";
import Title from "./components/Title";

export default function App() {
  return (
    <main className="passwordApp">
      <section className="passwordApp__container">
        <Title />
        <PasswordInput />
        <MainPasswordOptions />
      </section>
    </main>
  );
}
