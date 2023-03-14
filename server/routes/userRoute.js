import { Router } from "express";
import indexController from "../controllers/indexControllers.js";
import autJwt from "../middleware/authJwt.js";

const router = Router();

router.post("/signup", indexController.userController.signup);
router.post("/signin", autJwt.authenticate, autJwt.login);

export default router;
