import { Router } from "express";
import storeController from "../controllers/indexControllers.js";

const router = Router();

router.get("/", storeController.employeeController.getEmployees);
router.get("/:id", storeController.employeeController.getEmployeesById);
router.post("/", storeController.employeeController.addEmployees);
router.put("/:id", storeController.employeeController.updateEmployee);
router.delete("/:id", storeController.employeeController.deleteEmployee);
router.get("/query/:id", storeController.employeeController.getEmployeeQueryById);

export default router;
