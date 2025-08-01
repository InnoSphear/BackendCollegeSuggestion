import express from "express";
import {
  getAllColleges,
  getCollegeById,
  getCollegeBySlug,
  createCollege,
  updateCollege,
  deleteCollege,
} from "../controller/collegeController.js";

const router = express.Router();

router.get("/", getAllColleges);
router.get("/:id", getCollegeById);
router.get("/slug/:slug", getCollegeBySlug);
router.post("/", createCollege);
router.put("/:id", updateCollege);
router.delete("/:id", deleteCollege);

export default router;
