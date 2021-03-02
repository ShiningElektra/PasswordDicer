import chalk from "chalk";

export const printWelcomeMessage = () => {
  console.log("Dice 🎲 your Password");
};

export const printNoAccess = () => {
  console.log(chalk.red("Get out of here!"));
};
