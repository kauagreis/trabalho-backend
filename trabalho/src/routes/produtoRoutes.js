
import { Router } from "express";
import auth from "../middleware/auth.js";
import { criar, listar, buscar, atualizar, remover } from "../controllers/produtoController.js";

const router = Router();

router.get("/", listar);
router.get("/:id", buscar);
router.post("/", auth, criar);
router.put("/:id", auth, atualizar);
router.delete("/:id", auth, remover);

export default router;
