import express from "express";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(5002, () => {
  console.log("Image Uploader Server is running on port 5002");
});
