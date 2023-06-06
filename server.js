import express from "express";
import cors from "cors";
import { fileURLToPath } from "url";
import { dirname } from "path";

const app = express();

// var corsOptions = {
//     origin: "http://localhost:8081"
// };

// app.use(cors(corsOptions));

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
global.__basedir = __dirname;

app.use(
  cors({
    credentials: true,
    allowedHeaders: "*",
    allowedOrigins: "*",
  })
);

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

import db from "./config/db.config.js"
try {
    await db.authenticate();
    console.log("Connection has been established successfully.");
} catch (error) {
    console.error("Unable to connect to the database:", error);
}

app.get("/", (req, res) => {
    res.json({ message: "Welcome to 'Hello World'" });
});

import Router from "./routes/routes.js";
app.use(Router)

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});

export default { __basedir }