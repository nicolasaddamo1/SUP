export const validationNumbers = (req, res, next) => {
  const { num1, num2 } = req.body;
  if (!num1 || !num2) {
    return res
      .status(400)
      .json({ error: "Faltan datos, chequear numero 1 y numero 2" });
  }
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    return res
      .status(400)
      .json({ error: "Los datos enviados no son numericos" });
  }
  next();
};

export const validateDivision = (req, res, next) => {
  const { num2 } = req.body;
  if (num2 === 0) {
    return res
      .status(400)
      .json({ error: "No se puede dividir por 0 (cero)" });
  }
  next();
};
