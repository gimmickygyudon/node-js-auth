import express from "express";
import { create, findAll, findOne } from "../controllers/olog.controller.js";
import { OUSR_create, OUSR_findAll, OUSR_findOne } from "../controllers/ousr.controller.js";

const router = express.Router();

// Create a new Tutorial
// router.post("/", olog.create);
router.post("/api/olog", create);
router.post("/api/ousr", OUSR_create);

// Retrieve all Tutorials
router.get("/api/olog", findAll);
router.get("/api/ousr", OUSR_findAll);

// Retrieve all published Tutorials
//router.get("/published", olog.findAllPublished);

// Retrieve a single Tutorial with id
router.get("/api/olog/:id", findOne);
router.get("/api/ousr/:id", OUSR_findOne);

// Update a Tutorial with id
//router.put("/:id", olog.update);

// Delete a Tutorial with id
//router.delete("/:id", olog.delete);

// Delete all Tutorials
//router.delete("/", olog.deleteAll);

export default router;