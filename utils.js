const sumar = (a, b) => {
  if (typeof a !== "number" || typeof b !== "number") {
    alert("Debes ingresar numeros");
  }
  return a + b;
};

const resta = (a, b) => {
  if (typeof a !== "number" || typeof b !== "number") {
    alert("Debes ingresar numeros");
  }
  return a - b;
};

const multiply = (a) => {
  return (b) => {
    return a * b;
  };
};

function dividir(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    return "Solo puedes Dividir Numeros";
  } else if (b === 0) {
    return "No puedes dividir por 0";
  } else {
    return a / b;
  }
}
