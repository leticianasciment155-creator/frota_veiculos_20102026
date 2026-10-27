import { Router } from "express";
import { veiculosController } from "../services/veiculos.controller.js";

export const veiculosRouter = Router();

veiculosRouter.get("/", veiculosController.getAll);
veiculosRouter.get("/:id", veiculosController.getById);
veiculosRouter.post("/", veiculosController.create);
veiculosRouter.delete("/:id", veiculosController.delete);
veiculosRouter.put("/:id", veiculosController.updateData);
veiculosRouter.patch("/:id", veiculosController.updateKnex);