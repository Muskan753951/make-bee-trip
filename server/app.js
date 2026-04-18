

import express, { json } from "express";
import cors from "cors";
import bookingRoutes from "./routes/bookingRoutes.js";

const app = express();

app.use(cors());
app.use(json());

app.use("/api", bookingRoutes);

export default app;