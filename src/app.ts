// import { hasAccess } from "./commands";
// import { printNoAccess, printWelcomeMessage } from "./messages";
// import { askForCredentials } from "./questions";

import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config();

const run = async () => {
  const url = process.env.MONGODB_URL;

  try {
    const client = await MongoClient.connect(url, {
      useUnifiedTopology: true,
    });
    console.log("Connected to DB!");

    const db = client.db("PasswordDicer-Elektra");

    await db.collection("inventory").insertOne({
      item: "canvas",
      qty: 100,
      tags: ["cotton"],
      size: { h: 28, w: 35.5, uom: "cm" },
    });

    client.close();
  } catch (error) {
    console.error(error);
  }

  // const run = async () => {
  //   printWelcomeMessage();
  //   const credentials = await askForCredentials();
  //   if (!hasAccess(credentials.masterPassword)) {
  //     printNoAccess();
  //     run();
  //     return;
  //   }

  //   // const action = await askForAction();
  //   // switch (action.command) {
  //   //   case "set":
  //   //     handleSetPassword(action.passwordName);
  //   //     break;
  //   //   case "get":
  //   //     handelGetPassword(action.passwordName);
  //   //     break;
  //   // }
};
run();
