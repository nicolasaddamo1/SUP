import expres from "express";
import { router } from "./routes/indexRoute.js";
import cors from cors
const app = expres();

app.use(cors())
app.use(express.json());
app.use(router);

export default app;
