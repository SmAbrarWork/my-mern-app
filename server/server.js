import dotenv from "dotenv";
import express from "express";
import nodeRoutes from "./src/routes/nodeRoutes.js";
import { connectDB } from "./src/config/db.js";
import { ratelimiter } from "./src/middleWare/ratelimiter.js";

//create an express app
//dotenv.config() loads environment variables from a .env file into process.env

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5001;

//app.use express.json() is a built-in middleware function in Express. It parses incoming requests with JSON payloads and is based on body-parser.
//app.use is used to mount the specified middleware function(s) at the path which is being
app.use(express.json());
app.use(ratelimiter);
app.use((req, res, next) => {
  console.log("This is a MiddleWare example");
  console.log("Request received:", req.method, req.url);
  next();
});
app.use("/api/nodes", nodeRoutes);

//connect to database
//listen to the server on port 3000 or the port specified in the environment variables
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
});

// eRi7lAjAIP17pWMr

// mongodb+srv://smabrarhasan26_db_user:eRi7lAjAIP17pWMr@cluster0.wyn1c6j.mongodb.net/?appName=Cluster0
