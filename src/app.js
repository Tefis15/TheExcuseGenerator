/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
  generateExcuse();
};

function generateExcuse() {
  let who = ["The dog", "My granma", "His turtle", "My bird"];
  let what = ["eat", "pissed", "crushed", "broked"];
  let when = [
    "before the class",
    "right in time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  let excuse = "";

  excuse = who[Math.floor(Math.random() * who.length)];
  excuse += " ";

  excuse += what[Math.floor(Math.random() * what.length)];
  excuse += " ";

  excuse += when[Math.floor(Math.random() * when.length)];
  excuse += " ";

  const p = document.getElementById("excuse");
  p.innerHTML = excuse;
}
