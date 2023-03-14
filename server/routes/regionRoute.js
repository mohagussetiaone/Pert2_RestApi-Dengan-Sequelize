import { Router } from "express";
import storeController from "../controllers/indexControllers.js";
import upload from "../middleware/multer.js";

const router = Router();

router.get("/", storeController.regionController.getRegions);
router.get("/:id", storeController.regionController.getRegionById);
router.post("/", storeController.regionController.addRegion);
router.put("/:id", storeController.regionController.updateRegion);
router.delete("/:id", storeController.regionController.deleteRegion);
router.get("/query/:id", storeController.regionController.getAllRegionQuery);
router.post("/image", upload.upload, storeController.regionController.createImage);

export default router;
