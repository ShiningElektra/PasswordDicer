import chalk from "chalk";

export const printWelcomeMessage = () => {
  console.log("Dice 🎲 your Password");
};

export const printNoAccess = () => {
  console.log(chalk.red("Get out of here!"));
};

export const printPasswordSet = (passwordName: string) => {
  console.log(`You set a new ${passwordName} password.`);
};

export const printPassword = (passwordName: string, passwordValue: string) => {
  console.log(`Your ${passwordName} password is ${passwordValue}!`);
};
