import express, { request, response } from "express";
const app = express();
import bcrypt from "bcrypt";
import { MongoClient } from "mongodb";
import * as dotenv from "dotenv";
import usersRouter from "./routes/users.route.js";
import cors from "cors";
dotenv.config();
app.use(cors());

//MongoDB Connection
const PORT = process.env.PORT || 5000;
const MONGO_URL = process.env.MONGO_URL;
const client = new MongoClient(MONGO_URL);
await client.connect();
console.log("MongoDB connected successfully!");

app.get("/", function (request, response) {
  response.send("Movies DB🙋‍♂️, 🌏 🎊✨🤩");
});
app.use(express.json());

app.use("/users", usersRouter);
//PORT CONSOLE

app.listen(PORT, () => console.log(`The server started in: ${PORT} ✨✨`));

export { client };
