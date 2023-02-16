import app from "./app";
import { createServer } from "http";
import { connectToDB } from "./data-source";

connectToDB();

const PORT = 8080;

const server = createServer(app);

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
