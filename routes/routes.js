import express from "express";

// User Controllers
import { OLOG_create, OLOG_find_source } from "../controllers/olog.controller.js";
import { OUSR_create, OUSR_find_user } from "../controllers/ousr.controller.js";
import { OSFB_create, OSFB_join_list } from "../controllers/osfb.controller.js";
import { SFB1_create, SFB1_find_id_ousr } from "../controllers/sfb1.controller.js";
import { SFB2_create, SFB2_find_id_ousr } from "../controllers/sfb2.controller.js";

// Customer Controllers
import { customer_create, customer_delete, customer_retrieve, customer_item_group } from "../controllers/customer.controller.js";
import { reportDeliveryOrder_retrieve } from "../controllers/ReportDeliveryOrder.controller.js";
import { reportBalanceDue_retrieve } from "../controllers/ReportBalanceDue.controller.js";
import { reportPaymentDue_retrieve } from "../controllers/ReportPaymentDue.controller.js";

// Item Controllers
import { Item_name_retrieve, Item_retrieve, Item_description_retrieve } from "../controllers/Item.controller.js";

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
router.delete("/api/usr2", customer_delete);
router.get("/api/sim2/do", reportDeliveryOrder_retrieve);
router.get("/api/sim_report/arr", reportBalanceDue_retrieve);
router.get("/api/sim_report/prs", reportPaymentDue_retrieve);
router.get("/api/sim/customer/item", customer_item_group);

// API Upload
router.post("/api/upload", controller.upload);
router.get("/api/files", controller.getListFiles);
router.get("/api/files/:name", controller.download);

// API Item
router.get("/api/sim/item/description", Item_description_retrieve);
router.get("/api/sim/item", Item_retrieve);
router.get("/api/sim/item/name", Item_name_retrieve);

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

// API Videos
router.get("/api/yvid", YVID_find);


//router.put("/:id", olog.update);

//router.delete("/:id", olog.delete);

//router.delete("/", olog.deleteAll);

export default router;
