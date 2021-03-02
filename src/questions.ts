import prompts from "prompts";

type Credentials = {
  username: string;
  masterPassword: string;
};

export const askForCredentials = (): Promise<Credentials> =>
  prompts([
    {
      type: "text",
      name: "username",
      message: "Who are you?",
    },
    {
      type: "password",
      name: "masterPassword",
      message: "Give me the master password?",
    },
  ]);
