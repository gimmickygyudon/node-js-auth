import express from "express";
import { OLOG_create, OLOG_find_source } from "../controllers/olog.controller.js";
import { OUSR_create, OUSR_find_user } from "../controllers/ousr.controller.js";

const router = express.Router();

router.post("/api/olog", OLOG_create);
router.get("/api/olog", OLOG_find_source);

router.post("/api/ousr", OUSR_create);
router.get("/api/ousr", OUSR_find_user);

//router.put("/:id", olog.update);

//router.delete("/:id", olog.delete);

//router.delete("/", olog.deleteAll);

export default router;
