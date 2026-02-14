import app from "./app.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv"
dotenv.config()

const PORT = process.env.PORT || 3000;

app.listen(process.env.PORT, async (err) => {
  if (err) {
    console.log(`server failed with error ${err}`);
  } else {
    await connectDB();
    console.log(`server is running at http://localhost:${PORT}`);
  }
});
