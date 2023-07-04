import express from "express";

// User Controllers
import { OLOG_create, OLOG_find_source } from "../controllers/olog.controller.js";
import { OUSR_create, OUSR_find_user } from "../controllers/ousr.controller.js";
import { OSFB_create, OSFB_join_list } from "../controllers/osfb.controller.js";
import { SFB1_create, SFB1_find_id_ousr } from "../controllers/sfb1.controller.js";
import { SFB2_create, SFB2_find_id_ousr } from "../controllers/sfb2.controller.js";

// Customer Controllers
import { customer_create, customer_retrieve } from "../controllers/customer.controller.js";

// Item Controllers
import { OITM_find } from "../controllers/sim.oitm.controller.js";
import { sim_BRN1_find_id } from "../controllers/sim.brn1.controller.js";

// Address Controllers
import { sim_OPRV_find } from "../controllers/sim.oprv.controller.js";
import { sim_OCTY_find } from "../controllers/sim.octy.controller.js";
import { sim_OSDT_find } from "../controllers/sim.osdt.controller.js";
import { sim_OVIL_find } from "../controllers/sim.ovil.controller.js";
import { USR1_findby_id } from "../controllers/usr1.controller.js";

// Payment Controllers
import { PurchaseOrder_insert, PurchaseOrder_retrieve } from "../controllers/PurchaseOrder.controller.js";

    // Deprecated
    import { OPTY_findAll } from "../controllers/opty.controller.js";
    import { OPOR_create } from "../controllers/opor.controller.js";
    // Deprecated

// YT Video Controllers
import { YVID_find } from "../controllers/YoutubeVids.controller.js";

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

// API Customer
router.post("/api/usr2", customer_create);
router.get("/api/usr2", customer_retrieve);

// API Upload
router.post("/api/upload", controller.upload);
router.get("/api/files", controller.getListFiles);
router.get("/api/files/:name", controller.download);

// API Item
router.get("/api/sim/oitm/", OITM_find);
router.get("/api/sim/brn1", sim_BRN1_find_id);

// API Address
router.get("/api/sim/oprv", sim_OPRV_find);
router.get("/api/sim/octy", sim_OCTY_find);
router.get("/api/sim/osdt", sim_OSDT_find);
router.get("/api/sim/ovil", sim_OVIL_find);
router.get("/api/usr1", USR1_findby_id);

// API Payment
router.post("/api/po", PurchaseOrder_insert);
router.get("/api/po", PurchaseOrder_retrieve);

        // Deprecated
        router.get("/api/opty", OPTY_findAll);
        router.post("/api/opor", OPOR_create);
        // Deprecated

// API Videos
router.get("/api/yvid", YVID_find);


//router.put("/:id", olog.update);

//router.delete("/:id", olog.delete);

//router.delete("/", olog.deleteAll);

export default router;
