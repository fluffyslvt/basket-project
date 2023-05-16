"use strict";

const basket = new Basket();

const buyBtns = [...document.querySelectorAll("[data-name]")];
buyBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    console.log(e.target.dataset.id);
  });
});
