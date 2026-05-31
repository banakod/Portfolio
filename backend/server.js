import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import contactRoutes from "./routes/contactRoutes.js";

dotenv.config({ override: process.env.NODE_ENV !== "production" });

const app = express();

const allowedOrigins = [
  process.env.FRONTEND_URL,
  process.env.CLIENT_URL,
  process.env.NODE_ENV !== "production" ? "http://localhost:5173" : null,
  process.env.NODE_ENV !== "production" ? "http://127.0.0.1:5173" : null
].filter(Boolean);

app.set("trust proxy", 1);
app.use(cors({
  origin(origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      return callback(null, true);
    }
    return callback(new Error("Not allowed by CORS"));
  }
}));
app.use(express.json());
app.use("/api/contact", contactRoutes);

app.get("/", (req, res) => {
  res.send("Backend Running Successfully");
});

const PORT = process.env.PORT || 5000;
const LOCAL_MONGO_URL = "mongodb://127.0.0.1:27017/portfolio";
const MONGO_URL = process.env.NODE_ENV === "production"
  ? process.env.MONGO_URL
  : process.env.LOCAL_MONGO_URL || LOCAL_MONGO_URL;

const connectMongo = async () => {
  await mongoose.connect(MONGO_URL, {
    serverSelectionTimeoutMS: 8000
  });
  console.log("MongoDB connected");
};

const startServer = async () => {
  if (MONGO_URL && MONGO_URL !== "your_mongodb_connection_string") {
    try {
      await connectMongo();
    } catch (error) {
      console.warn("MongoDB not connected:", error.message);
      console.warn("Permanent fix: add this app's IP address in MongoDB Atlas Network Access, or allow 0.0.0.0/0 for dynamic deployment hosts.");
    }
  } else {
    console.warn("MongoDB connection skipped. Set MONGO_URL in .env to save contacts.");
  }

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};

startServer();
