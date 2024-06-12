import express from "express";
import UserRoutes from "./routes/UserRoutes.js"
const app = express();
const port = 3000;

app.use('/api/users', UserRoutes);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});