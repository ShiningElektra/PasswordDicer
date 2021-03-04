// import { hasAccess } from "./commands";
// import { printNoAccess, printWelcomeMessage } from "./messages";
// import { askForCredentials } from "./questions";

// Datenbankanbindung -Anfang-
import { MongoClient } from "mongodb";
import dotenv from "dotenv";
import {
  closeDB,
  connectDB,
  createPasswordDoc,
  deleteValue,
  getCollection,
  readPasswordDoc,
  updatePasswordDoc,
} from "./db";
dotenv.config();

const run = async () => {
  const url = process.env.MONGODB_URL;

  try {
    await connectDB(url, "PasswordDicer-Elektra");

    // // Erstellen db Eintrags
    // await createPasswordDoc({
    //   name: "Elektra",
    //   value: "1111",
    // });

    // // Auslesen des db Eintrags
    // console.log(await readPasswordDoc("Elektra"));

    // Eintrag updaten
    await updatePasswordDoc("Elektra", { value: "1234" });
    // Eintrag löschen
    // console.log(await deleteValue("Elektra"));

    await closeDB();
  } catch (error) {
    console.error(error);
  }
  // Datenbankanbindung -Ende-

  // const run = async () => {
  //   printWelcomeMessage();
  //   const credentials = await askForCredentials();
  //   if (!hasAccess(credentials.masterPassword)) {
  //     printNoAccess();
  //     run();
  //     return;
  //   }

  // const action = await askForAction();
  // switch (action.command) {
  //   case "set":
  //     handleSetPassword(action.passwordName);
  //     break;
  //   case "get":
  //     handelGetPassword(action.passwordName);
  //     break;
  // }
};
run();
