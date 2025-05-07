import express from "express";
const app = express();
import bcrypt from "bcrypt";
import { MongoClient } from "mongodb";
import dotenv from "dotenv";
import usersRouter from "./routes/users.route.js";
import cors from "cors";
dotenv.config();
app.use(cors());
app.use(express.json());

//MongoDB Connection
const MONGO_URL = process.env.MONGO_URL;
const client = new MongoClient(MONGO_URL);
await client.connect();
console.log("MongoDB connected successfully!");

const PORT = process.env.PORT;
app.get("/", function (request, response) {
  response.send("🎊✨🤩");
});

app.use("/users", usersRouter);
//PORT CONSOLE

app.listen(PORT, () => console.log(`The server started in: ${PORT} ✨✨`));

export { client };
