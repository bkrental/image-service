import express from "express";
import imageRoute from "./routes/imageRoute";
import dotenvFlow from "dotenv-flow";
import cors from "cors";

const app = express();
dotenvFlow.config();

app.use(express.json());
app.use(
  cors({
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 204,
  })
);

app.use("/api/", imageRoute);

app.get("/", (req, res) => {
  res.send("OKEE!");
});

app.listen(5002, () => {
  console.log("Image Uploader Server is running on port 5002");
});
