const UPPERCASE = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const LOWERCASE = "abcdefghijklmnopqrstuvwxyz";
const NUMBERS = "0123456789";
const SPECIAL = "!@#$%^&*+?";

export const generatePassword = (
  numChar: number = 0,
  uppercase?: boolean,
  lowercase?: boolean,
  number?: boolean,
  special?: boolean
) => {
  const upp = uppercase ? UPPERCASE : "";
  const low = lowercase ? LOWERCASE : "";
  const num = number ? NUMBERS : "";
  const spe = special ? SPECIAL : "";
  const randomPasswordFrom = `${upp}${low}${num}${spe}`;
  let generatedPassword = "";

  for (let i = 1; i <= numChar; i++) {
    const randomIndex = Math.floor(Math.random() * randomPasswordFrom.length);
    generatedPassword += randomPasswordFrom[randomIndex];
  }

  return generatedPassword;
};
