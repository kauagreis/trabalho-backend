
import express from "express";
import produtoRoutes from "./routes/produtoRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(express.json());
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/produtos", produtoRoutes);

export default app;
