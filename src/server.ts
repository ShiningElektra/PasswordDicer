import http from "http";
import dotenv from "dotenv";
import { connectDB } from "./db";
import { handleDelete, handleGet, handlePost } from "./routes";

dotenv.config();

const port = process.env.PORT;
const url = process.env.MONGODB_URL;

connectDB(url, "PasswordDicer-Elektra");

const server = http.createServer(async (request, response) => {
  if (request.url === "/") {
    response.statusCode = 200;
    response.setHeader("Content-Type", "application/json");
    response.end("<h1>Your Password Manager<h1>");
    return;
  }

  if (request.method === "POST") {
    handlePost(request, response);
    return;
  }

  const parts = request.url.match(/\/api\/passwords\/(\w+)/);
  if (!parts) {
    response.statusCode = 400;
    response.end();
    return;
  }
  const [, passwordName] = parts;

  if (request.method === "GET") {
    handleGet(request, response, passwordName);
    return;
  }
  if (request.method === "DELETE") {
    handleDelete(request, response, passwordName);
    return;
  }
  response.statusCode = 405;
  response.end();
});

server.listen(port, () => {
  console.log(`Server is running at http://localhost:${port} 🤘`);
});
