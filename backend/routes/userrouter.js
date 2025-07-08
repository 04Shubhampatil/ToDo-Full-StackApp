import { Router } from "express"
import { singUp,Login } from "../controller/authcontroller.js";
import {signupValidation,loginValidation} from "../middleware/validation.js";

const router = Router();

router.post("/signup",signupValidation, singUp);

router.post("/login",loginValidation, Login);

export default router;