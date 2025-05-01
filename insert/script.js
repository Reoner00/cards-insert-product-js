import { insertProduct } from "../utils/fetch.js";
import { validateInsert } from "../utils/validation.js";

const productName = document.getElementById("productName");
const productDescription = document.getElementById("description");
const productPrice = document.getElementById("price");
const productSaleLocation = document.getElementById("saleLocation");
const productImageUrl = document.getElementById("imgUrl");
const productForm = document.getElementById("productForm");
const message = document.getElementById("message");
const btnArrow = document.getElementById("btnArrowBack");

productForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const data = {
    title: productName.value,
    description: productDescription.value,
    price: productPrice.value,
    saleLocation: productSaleLocation.value,
    imgUrl: productImageUrl.value,
  };

  const isValidationError = validateInsert(data, message);
  if (isValidationError) {
    return;
  }
  const product = await insertProduct(data);
  if (product) {
    message.textContent = "Product added successfully!";
    message.style.color = "green";
    productForm.reset();
  }
});

btnArrow.addEventListener("click", () => {
  window.location.href = "../index.html";
});
