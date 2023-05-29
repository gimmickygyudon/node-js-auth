import express from "express";
import { create, findAll, findOne } from "../controllers/olog.controller.js";

const router = express.Router();

// Create a new Tutorial
// router.post("/", olog.create);
router.post("/api/olog", create);

// Retrieve all Tutorials
router.get("/api/olog", findAll);

// Retrieve all published Tutorials
//router.get("/published", olog.findAllPublished);

// Retrieve a single Tutorial with id
router.get("/api/olog/:id", findOne);

// Update a Tutorial with id
//router.put("/:id", olog.update);

// Delete a Tutorial with id
//router.delete("/:id", olog.delete);

// Delete all Tutorials
//router.delete("/", olog.deleteAll);

export default router;