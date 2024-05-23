import { Router } from "express";

const router = Router();

router.use("/suma", sumaController);
router.use("/resta", restaController);
router.use("/multiplicacion", multiplicacionController);
router.use("/division", divisionController);

export default router;
