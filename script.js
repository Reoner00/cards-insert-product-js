import { fetchCards } from "./utils/fetch.js";

const cardWrapper = document.getElementById("cardWrapper");

const buildCard = (data) => {
  data.forEach((product) => {
    const card = document.createElement("div");
    card.classList.add("card");
    const id = document.createElement("p");
    id.classList.add("id");
    id.textContent = product.id;

    const title = document.createElement("h3");
    title.textContent = product.title;

    const imgUrl = document.createElement("img");
    imgUrl.src = product.imageUrl;

    const description = document.createElement("p");
    description.textContent = product.description;

    const price = document.createElement("p");
    price.textContent = `$${product.price}`;

    const saleLocation = document.createElement("p");
    saleLocation.textContent = product.saleLocation;

    card.append(title, imgUrl, description, price, saleLocation);
    cardWrapper.append(card);
    console.log("Creating card", product);
  });
};

const buildScreen = async () => {
  const products = await fetchCards();
  buildCard(products);
};
buildScreen();
