"use strict";

const audio = (document.querySelector(".audioPage").volume = 0.2);
const mainBtn = document.querySelector(".header_btn");
const img1 = document.querySelector(".wallimg");
const img2 = document.querySelector(".wallimg2");
const img3 = document.querySelector(".wallimg3");
const img4 = document.querySelector(".wallimg4");
const img5 = document.querySelector(".wallimg5");
const img6 = document.querySelector(".wallimg6");
const overlay = document.querySelector(".overlay");
const modal = document.querySelector(".modal");

const newArr = [img1, img2, img3, img4, img5, img6];

function rollDice() {
  let dice = Math.trunc(Math.random() * 7) + 1;
  return dice;
}

mainBtn.addEventListener("click", function () {
  img1.src = `../img/midjourney-${rollDice()}.png`;
  img2.src = `../img/midjourney-${rollDice()}.png`;
  img3.src = `../img/midjourney-${rollDice()}.png`;
  img4.src = `../img/midjourney-${rollDice()}.png`;
  img5.src = `../img/midjourney-${rollDice()}.png`;
  img6.src = `../img/midjourney-${rollDice()}.png`;
});

img1.addEventListener("click", function () {
  img1.classList.add("hidden");
});

img2.addEventListener("click", function () {
  img2.classList.add("hidden");
});

img3.addEventListener("click", function () {
  img3.classList.add("hidden");
});

img4.addEventListener("click", function () {
  img4.classList.add("hidden");
});

img5.addEventListener("click", function () {
  img5.classList.add("hidden");
});

img6.addEventListener("click", function () {
  img6.classList.add("hidden");
});