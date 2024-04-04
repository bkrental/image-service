import express from "express";
import imageRoute from "./routes/imageRoute";
import dotenvFlow from "dotenv-flow";
import bodyParser from "body-parser";

const app = express();
dotenvFlow.config();

app.use(express.json());
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

app.use("/api/", imageRoute);

app.get("/", (req, res) => {
  res.send("OKEE!");
});

app.listen(5002, () => {
  console.log("Image Uploader Server is running on port 5002");
});
