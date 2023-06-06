import express from "express";
import { OLOG_create, OLOG_find_source } from "../controllers/olog.controller.js";
import { OUSR_create, OUSR_find_user } from "../controllers/ousr.controller.js";
import { OSFB_create, OSFB_find_id_ousr } from "../controllers/osfb.controller.js";
import { SFB1_create, SFB1_find_id_ousr } from "../controllers/sfb1.controller.js";
import { SFB2_create, SFB2_find_id_ousr } from "../controllers/sfb2.controller.js";

import controller from "../controllers/file.controller.js";

const router = express.Router();

router.post("/api/olog", OLOG_create);
router.get("/api/olog", OLOG_find_source);

router.post("/api/ousr", OUSR_create);
router.get("/api/ousr", OUSR_find_user);

router.post("/api/osfb", OSFB_create);
router.get("/api/osfb", OSFB_find_id_ousr);

router.post("/api/sfb1", SFB1_create);
router.get("/api/sfb1", SFB1_find_id_ousr);

router.post("/api/sfb2", SFB2_create);
router.get("/api/sfb2", SFB2_find_id_ousr);

router.post("/api/upload", controller.upload);
router.get("/api/files", controller.getListFiles);
router.get("/api/files/:name", controller.download);

//router.put("/:id", olog.update);

//router.delete("/:id", olog.delete);

//router.delete("/", olog.deleteAll);

export default router;
