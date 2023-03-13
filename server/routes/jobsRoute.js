import { Router } from "express";
import storeController from "../controllers/indexControllers.js";

const router = Router();

router.get("/", storeController.jobsController.getJobs);
router.get("/:id", storeController.jobsController.getJobById);
router.post("/", storeController.jobsController.addJob);
router.put("/:id", storeController.jobsController.updateJob);
router.delete("/:id", storeController.jobsController.deleteJob);
router.get("/query/:id", storeController.jobsController.getJobQueryById);

export default router;
