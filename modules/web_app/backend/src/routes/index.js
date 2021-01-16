import express from "express";
const routers = express();
import User from "./users/index"

routers.use("/api/v1/", User);
routers.get("/", (req, res) => {
  res.send("TopDup!");
});
export default routers;
