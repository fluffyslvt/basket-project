// "use strict";

const buyBtns = [...document.querySelectorAll("[data-name]")];
const basketUi = document.querySelector(".basket-list");
const buyAllBtn = document.querySelector(".btn-buy-all");

const basket = new Basket();

const removeItem = (e) => {
  const id = Number(e.target.dataset.id);
  basket.remove(id);
  createBasketUi();
};

const createBasketUi = () => {
  basketUi.innerText = "";

  // destrukturyzacja obj.
  for (const { id, text } of basket.getBasketSummary()) {
    const newLi = document.createElement("li"); // <li>
    newLi.innerText = text;
    newLi.addEventListener("click", removeItem);
    newLi.dataset.id = id;
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

createBasketUi();
