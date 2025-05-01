import { fetchProductId } from "../utils/fetch.js";
import { deleteCarById } from "../utils/fetch.js";

const url = new URL(window.location.href);
const id = url.searchParams.get("id");
const productName = document.getElementById("productName");
const imgUrl = document.getElementById("imgUrl");
const productDescription = document.getElementById("description");
const productPrice = document.getElementById("price");
const btnDelete = document.getElementById("btnDelete");
const message = document.getElementById("message");

const insertDataScreen = async (product) => {
  productName.textContent = product.productName;
  imgUrl.src = product.imgUrl;
  productDescription.textContent = product.description;
  productPrice.textContent = `$${product.price}`;
};

const buildScreen = async () => {
  const product = await fetchProductId(id);
  insertDataScreen(product);
};
buildScreen();

btnDelete.addEventListener("click", async () => {
  const product = await deleteCarById(id);
  if (product) {
    message.textContent = "Product deleted successfully!";
    message.style.color = "green";

    setTimeout(() => {
      window.location.href = "../index.html";
    }, 1500);
  } else {
    message.textContent = "Error deleting product.";
    message.style.color = "red";
  }
});
