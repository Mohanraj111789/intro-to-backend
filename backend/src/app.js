import express from "express";
import userRoutes from "./routes/user.route.js";

const app = express();

// parse JSON
app.use(express.json());

// mount all user endpoints
app.use("/api/users", userRoutes);

// test route
app.get("/", (req, res) => {
  res.json({
    message: "Backend is running",
  });
});


export default app;
