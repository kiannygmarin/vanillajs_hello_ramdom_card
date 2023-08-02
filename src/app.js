/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const HandleBoton = e => {
  console.log("Me clickeaste");
  console.log(e);
  return;
};

window.onload = function() {
  //write your code here
  let body = document.querySelector("body");
  console.log(body);
  body.classList.add("bg", "bg-success");

  let nuevoDiv = document.createElement("DIV");
  let app = document.querySelector("#app");
  nuevoDiv.classList.add(
    "container",
    "bg",
    "bg-white",
    "border",
    "border-dark",
    "mt-4",
    "carta"
  );
  nuevoDiv.innerHTML = `<div class="row symbol heading">Fila 1</div><div class="row number">Fila 2</div><div class="row symbol reverse">Fila 3</div>`;

  app.appendChild(nuevoDiv);
  let numeros = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
  console.log(
    "esto debería dar el tercer elemento que es el número 3:",
    numeros[2],
    "La longitud del arreglo numeros es:",
    numeros.length
  );

  //Sección donde eligimos un número aleatorio para la carta
  let numeroAleatorio = Math.floor(Math.random() * numeros.length);
  console.log("numeroAleatorio:", numeroAleatorio);
  console.log("elemento aleatorio:", numeros[numeroAleatorio]);

  let fila2 = document.querySelector(".number");
  fila2.innerHTML = `${numeros[numeroAleatorio]}`;

  let suit = [
    { suit: " ♥ ", color: "red" },
    { suit: " ♦ ", color: "red" },
    { suit: " ♠ ", color: "black" },
    { suit: " ♣ ", color: "black" }
  ];

  let suitAleatoria = Math.floor(Math.random() * suit.length);
  console.log(suit[suitAleatoria]);

  let fila1 = document.querySelector(".heading");
  fila1.innerHTML = `${suit[suitAleatoria]["suit"]}`;

  let fila3 = document.querySelector(".reverse");
  fila3.innerHTML = `${suit[suitAleatoria]["suit"]}`;

  fila1.style.color = suit[suitAleatoria]["color"];
  fila3.style.color = suit[suitAleatoria]["color"];

  fila2.classList.add("justify-content-center");

  let boton = document.createElement("button");
  let textoBoton = document.createTextNode("Generador");

  boton.appendChild(textoBoton);

  boton.addEventListener("Generador", () => location.reload());

  body.appendChild(boton);
};
