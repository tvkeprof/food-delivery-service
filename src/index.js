import express from "express";
import cors from "cors";

const app = express();
const port = 9999;
app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/", (req, res) => {
  // Extract 'value' from the request body
  const { value } = req.body;
  console.log("Received value:", value);
  // Send the received value back as the response
  res.send(value);
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
