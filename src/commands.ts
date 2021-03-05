import { printPassword, printPasswordSet } from "./messages";
import { askForPasswordValue } from "./questions";
import { readPasswordDoc, updatePasswordDoc, createPasswordDoc } from "./db";

export const hasAccess = (masterPassword: string): boolean =>
  masterPassword === "4321";

export const handleSetPassword = async (
  passwordName: string
): Promise<void> => {
  const passwordValue = await createPasswordDoc(passwordDoc);
  // ToDO use response.passwordValue to update password
  printPasswordSet(response.passwordValue);
};

export const handleGetPassword = async (
  passwordName: string
): Promise<void> => {
  const passwordDoc = await readPasswordDoc(passwordName);
  if (!passwordDoc) {
    console.log("What the hell?");
    return;
  }
  printPassword(passwordDoc.name, passwordDoc.value);
};
