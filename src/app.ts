// import { hasAccess } from "./commands";
// import { printNoAccess, printWelcomeMessage } from "./messages";
// import { askForCredentials } from "./questions";

// Datenbankanbindung -Anfang-
import { MongoClient } from "mongodb";
import dotenv from "dotenv";
import { closeDB, connectDB, getCollection } from "./db";
dotenv.config();

const run = async () => {
  const url = process.env.MONGODB_URL;

  try {
    await connectDB(url, "PasswordDicer-Elektra");
    await getCollection("passwords");
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
