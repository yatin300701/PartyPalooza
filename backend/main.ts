import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";
import { createConnection, db } from "./helpers/connection";
import loginRoutes from "./routes/loginRoutes";
import productRoutes from "./routes/productsRoutes";
import commentRoutes from "./routes/commentsRoutes";

dotenv.config();

const port = process.env.port;
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());
// products
app.use("/api", loginRoutes);
app.use("/api/products", productRoutes);
app.use("/api/comments", commentRoutes);
// people bought pre
// review and comment

app.listen(port, () => {
  createConnection().then((_) => {
    console.log("listening..", port);
  });
});
