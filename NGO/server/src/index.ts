import express from "express";
import userRoute from "./routes/user";

const app = express();

app.use("/api/user", userRoute);
app.listen(8005, () => {
  console.log("server started");
});
