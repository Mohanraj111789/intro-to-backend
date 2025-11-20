import dotenv from 'dotenv';
import connectDB from './config/database.js';
import app from './app.js';
dotenv.config({
  path:'./.env'
});     // Load env FIRST

const startServer = async () => {
  try {
    await connectDB();
    console.log("DB connected");
    app.on("error", (error) => {
      console.error("App Error: " + error.message);
      throw error;
    });
    const PORT = process.env.PORT || 3000;
    app.listen(process.env.PORT, () => console.log(`Server running on port ${PORT}`));

  } catch (error) {
    console.error("Server Error: " + error.message);
    process.exit(1);
  }
  console.log(process.env.MONGODB_URI);
};

startServer();
