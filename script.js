import { fetchProducts } from "./utils/fetch.js";

const cardWrapper = document.getElementById("cardWrapper");

const buildCard = (data) => {
  data.forEach((product) => {
    const card = document.createElement("a");

    card.href = `./product/index.html?id=${product.id}`;
    card.classList.add("card");

    const title = document.createElement("h3");
    title.textContent = product.productName;

    const imgUrl = document.createElement("img");
    imgUrl.src = product.imgUrl;

    const price = document.createElement("p");

    price.classList.add("price");
    price.textContent = `$${product.price}`;

    card.append(title, imgUrl, price);
    cardWrapper.append(card);
    console.log("Creating card", product);
  });
};

const buildScreen = async () => {
  const product = await fetchProducts();
  buildCard(product);
};
buildScreen();
