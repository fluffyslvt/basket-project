// "use strict";

const buyBtns = [...document.querySelectorAll("[data-name]")];
const basketUi = document.querySelector(".basket-list");
const buyAllBtn = document.querySelector(".btn-buy-all");

const basket = new Basket();

const createBasketUi = () => {
  basketUi.innerText = "";

  for (const product of basket.getBasketSummary()) {
    const newLi = document.createElement("li"); // <li>
    newLi.innerText = product;
    basketUi.appendChild(newLi);
  }

  const basketTotalValue = basket.getTotalValue();
  buyAllBtn.innerText = `Złóż zamówienie na kwotę ${basketTotalValue.toFixed(
    2
  )}zł`;

  buyAllBtn.disabled = basketTotalValue === 0;
};

const addProductToBasket = (e) => {
  const name = e.target.dataset.name;
  const price = Number(e.target.dataset.price);

  const newProduct = new Product(name, price);
  basket.add(newProduct);
  createBasketUi();
};

const buyAllProducts = () => {
  const basketTotalValue = basket.getTotalValue();
  alert(`Zakupiono produkty o wartości: ${basketTotalValue.toFixed(2)}zł`);

  basket.clear();
  createBasketUi();
};

buyBtns.forEach((btn) => {
  btn.addEventListener("click", addProductToBasket);
});

buyAllBtn.addEventListener("click", buyAllProducts);
