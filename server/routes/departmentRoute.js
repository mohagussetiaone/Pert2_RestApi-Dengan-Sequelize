import { Router } from "express";
import storeController from "../controllers/indexControllers.js";

const router = Router();

router.get("/", storeController.departmentController.getDepartments);
router.get("/:id", storeController.departmentController.getDepartmentById);
router.post("/", storeController.departmentController.addDepartment);
router.put("/:id", storeController.departmentController.updateDepartment);
router.delete("/:id", storeController.departmentController.deleteDepartment);
router.get("/query/:id", storeController.departmentController.getDepartmentQueryById);

export default router;
