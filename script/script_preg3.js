select1 = document.querySelector("#select1");
select2 = document.querySelector("#select2");
select3 = document.querySelector("#select3");
verifica= document.querySelector("#verifica");
limpiar = document.querySelector("#limpiar");
resultado = document.querySelector("#resultado");
verifica.addEventListener("click", () => {
  var password = select1.value + select2.value + select3.value;
  if (password === "911") {
    resultado.innerHTML = "Pasword 1 correcto!";
  } else if (password === "714") {
    resultado.innerHTML = "Pasword 2 correcto!";
  }
  else {
    resultado.innerHTML = "Password incorrecto!";
  }
});
limpiar.addEventListener("click", () => {
  select1.value = "0";
  select2.value = "0";
  select3.value = "0";
  resultado.innerHTML = "";
});

