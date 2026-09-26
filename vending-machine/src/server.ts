import express from "express";
import vendingRoutes from "./routes/vending.routes";

const app = express();

app.use(express.json());

app.use("/api", vendingRoutes);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
