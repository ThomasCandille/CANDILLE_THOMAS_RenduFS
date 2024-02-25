import  Express  from "express";

import ChampionRoutes from "./routes/ChampionRoutes.js";

const router = Express.Router();

router.use("/champions", ChampionRoutes);

export default router;