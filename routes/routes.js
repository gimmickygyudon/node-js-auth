import express from "express";

// User Controllers
import { OLOG_create, OLOG_find_source } from "../controllers/olog.controller.js";
import { OUSR_create, OUSR_find_user } from "../controllers/ousr.controller.js";
import { OSFB_create, OSFB_join_list } from "../controllers/osfb.controller.js";
import { SFB1_create, SFB1_find_id_ousr } from "../controllers/sfb1.controller.js";
import { SFB2_create, SFB2_find_id_ousr } from "../controllers/sfb2.controller.js";

// Item Controllers
import { OITM_find_id, OITM_find_by_name } from "../controllers/sim.oitm.controller.js";
import { sim_BRN1_find_id } from "../controllers/sim.brn1.controller.js";

// Address Controllers
import { sim_OPRV_find_name } from "../controllers/sim.oprv.controller.js";
import { sim_OCTY_find_id } from "../controllers/sim.octy.controller.js";
import { sim_OSDT_find_id } from "../controllers/sim.osdt.controller.js";
import { sim_OVIL_find_id } from "../controllers/sim.ovil.controller.js";

// Payment Controllers
import { OPTY_findAll } from "../controllers/opty.controller.js";
import { OPOR_create } from "../controllers/opor.controller.js";

// Upload Controllers
import controller from "../controllers/file.controller.js";



const router = express.Router();

// API User
router.post("/api/olog", OLOG_create);
router.get("/api/olog", OLOG_find_source);

router.post("/api/ousr", OUSR_create);
router.get("/api/ousr", OUSR_find_user);

router.post("/api/osfb", OSFB_create);
router.get("/api/osfb", OSFB_join_list);

router.post("/api/sfb1", SFB1_create);
router.get("/api/sfb1", SFB1_find_id_ousr);

router.post("/api/sfb2", SFB2_create);
router.get("/api/sfb2", SFB2_find_id_ousr);

// API Upload
router.post("/api/upload", controller.upload);
router.get("/api/files", controller.getListFiles);
router.get("/api/files/:name", controller.download);

// API Item
router.get("/api/sim/oitm/id", OITM_find_id);
router.get("/api/sim/oitm/", OITM_find_by_name);
router.get("/api/sim/brn1", sim_BRN1_find_id);

// API Address
router.get("/api/sim/oprv", sim_OPRV_find_name);
router.get("/api/sim/octy", sim_OCTY_find_id);
router.get("/api/sim/osdt", sim_OSDT_find_id);
router.get("/api/sim/ovil", sim_OVIL_find_id);

// API Payment
router.get("/api/opty", OPTY_findAll);
router.post("/api/opor", OPOR_create);






//router.put("/:id", olog.update);

//router.delete("/:id", olog.delete);

//router.delete("/", olog.deleteAll);

export default router;
