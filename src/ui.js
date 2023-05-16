// "use strict";

const buyBtns = [...document.querySelectorAll("[data-name]")];
const basketUi = document.querySelector(".basket-list");

const basket = new Basket();

const createBasketUi = () => {
  basketUi.innerText = "";

  for (const product of basket.getBasketSummary()) {
    const newLi = document.createElement("li"); // <li>
    newLi.innerText = product;
    basketUi.appendChild(newLi);
  }
};

const addProductToBasket = (e) => {
  const name = e.target.dataset.name;
  const price = Number(e.target.dataset.price);

  const newProduct = new Product(name, price);
  basket.add(newProduct);
  createBasketUi();
};

buyBtns.forEach((btn) => {
  btn.addEventListener("click", addProductToBasket);
});
