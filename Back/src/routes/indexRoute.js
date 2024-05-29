import { Router } from "express";
import { validationNumbers, validateDivision } from "./validations.js";

const router = Router();

router.use("/suma", validationNumbers, sumaController);
router.use("/resta", validationNumbers, restaController);
router.use("/multiplicacion", validationNumbers, multiplicacionController);
router.use("/division", validationNumbers, validateDivision, divisionController);

export default router;
