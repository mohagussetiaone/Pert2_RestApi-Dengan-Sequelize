import { Router } from "express";
import storeController from "../controllers/indexControllers.js";

const router = Router();

router.get("/", storeController.locationController.getLocations);
router.get("/:id", storeController.locationController.getLocationById);
router.post("/", storeController.locationController.addLocation);
router.put("/:id", storeController.locationController.updateLocation);
router.delete("/:id", storeController.locationController.deleteLocation);
router.get("/query/:id", storeController.locationController.getLocationQueryById);

export default router;
