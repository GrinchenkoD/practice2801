import products from "./dataBases/products.js";
const cart = [{}];
const refs = {
  market: document.querySelector(".product-market"),
};
refs.market.addEventListener("click", addProduct);
function addProduct(event) {
  if (event.target.nodeName !== "BUTTON") return;
  console.log(event.target.getAttribute("name"));
  let name = event.target.getAttribute("name");
  let price = products[name];

  //   cart.forEach((item) => {
  //     item.name === name ? (item.price += price) : cart.push({ name, price });
  //   });
  let el = cart.find((el) => el.name === name);
  el ? (el.price += price) : cart.push({ name, price });
  console.log(cart);
}
