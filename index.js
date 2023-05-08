import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import xgroovyRoutes from "./routes/xgroovy.js";

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/xgroovy", xgroovyRoutes);
app.get("/", (req, res) => {
  return res.send("Server running");
});

app.listen(5000, () => {
  console.log("server running at port 5000");
});
