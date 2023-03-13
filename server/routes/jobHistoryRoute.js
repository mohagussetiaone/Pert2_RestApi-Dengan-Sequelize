import { Router } from "express";
import storeController from "../controllers/indexControllers.js";

const router = Router();

router.get("/", storeController.jobHistoryController.getJobHistory);
router.get("/:id", storeController.jobHistoryController.getJobHistoryById);
router.post("/", storeController.jobHistoryController.addJobHistory);
router.put("/:id", storeController.jobHistoryController.updateJobHistory);
router.delete("/:id", storeController.jobHistoryController.deleteJobHistory);
router.get("/query/:id", storeController.jobHistoryController.getJobHistoryQueryById);

export default router;
