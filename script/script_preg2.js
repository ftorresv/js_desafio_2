const clear = document.querySelector("#clear");
const input_1 = document.querySelector("#input_1");
const input_2 = document.querySelector("#input_2");
const input_3 = document.querySelector("#input_3");
const result = document.querySelector("#result");
result.innerHTML = "Introduce los Stickers  ";
input_1.addEventListener("change", () => {
  var suma =
    parseInt(input_1.value || 0) +
    parseInt(input_2.value || 0) +
    parseInt(input_3.value || 0);
  if (suma <= 10) {
    result.innerHTML = "Llevas " + suma + " .La suma es menor o igual a 10";
  } else {
    result.innerHTML = "Alto ahí campeón. Llevas demasiados stickers";
  }
});
input_2.addEventListener("change", () => {
  var suma =
    parseInt(input_1.value || 0) +
    parseInt(input_2.value || 0) +
    parseInt(input_3.value || 0);
  if (suma <= 10) {
    result.innerHTML = "Llevas " + suma + " . La suma es menor o igual a 10";
  } else {
    result.innerHTML = "Alto ahí campeón. Llevas demasiados stickers";
  }
});

input_3.addEventListener("change", () => {
  var suma =
    parseInt(input_1.value || 0) +
    parseInt(input_2.value || 0) +
    parseInt(input_3.value || 0);
  if (suma <= 10) {
    result.innerHTML = "Llevas " + suma + " .La suma es menor o igual a 10";
  } else {
    result.innerHTML = "Alto ahí campeón. Llevas demasiados stickers";
  }
});

clear.addEventListener("click", () => {
  input_1.value = "";
  input_2.value = "";
  input_3.value = "";
  result.innerHTML = "Introduce los Stickers  ";
});
