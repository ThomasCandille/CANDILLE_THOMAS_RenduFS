import  Express  from "express";
import { getChampions, getChampion, createChampion, updateChampion, deleteChampion } from "../controllers/ChampionController.js";

const router = Express.Router();

router.get("/", getChampions);
router.get("/:id", getChampion);
router.post("/", createChampion);
router.put("/:id", updateChampion);
router.delete("/:id", deleteChampion);

export default router;