import { handleGetPassword, handleSetPassword, hasAccess } from "./commands";
import { printNoAccess, printWelcomeMessage } from "./messages";
import { askForCredentials, askForAction } from "./questions";

// Datenbankanbindung -Anfang-
import { MongoClient } from "mongodb";
import dotenv from "dotenv";
import {
  closeDB,
  connectDB,
  createPasswordDoc,
  getCollection,
  readPasswordDoc,
  updatePasswordDoc,
} from "./db";
dotenv.config();

type CommandToFunction = {
  set: (passwordName: string) => Promise<void>;
  get: (passwordName: string) => Promise<void>;
};
const commandToFunction: CommandToFunction = {
  set: handleSetPassword,
  get: handleGetPassword,
};

const run = async () => {
  const url = process.env.MONGODB_URL;
  printWelcomeMessage();

  try {
    const credentials = await askForCredentials();
    if (!hasAccess(credentials.masterPassword)) {
      printNoAccess();
      run();
      return;
    }
    await connectDB(url, "PasswordDicer-Elektra");

    // Erstellen db Eintrags
    // await createPasswordDoc({
    //   name: "Leon",
    //   value: "2222",
    // });

    // // Auslesen des db Eintrags
    // console.log(await readPasswordDoc("Leon"));

    // Eintrag updaten
    // await updatePasswordDoc("Elektra", { value: "1234" });

    // Eintrag löschen
    // console.log(await deleteValue("Elektra"));

    // Datenbankanbindung -Ende-

    const action = await askForAction();
    const commandFunction = commandToFunction[action.command];
    commandFunction(action.passwordName);

    await closeDB();
  } catch (error) {
    console.error(error);
  }
};

run();
