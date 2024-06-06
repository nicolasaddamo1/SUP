import { Router } from "express";
import { validationNumbers, validateDivision } from "./validations.js";

const router = Router();

router.use("/suma", sumaController);
router.use("/resta", restaController);
router.use("/multiplicacion", multiplicacionController);
router.use("/division", divisionController);


export default router;
