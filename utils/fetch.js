const URL = "https://680a11fb1f1a52874cdf0a12.mockapi.io";

export const fetchProducts = async () => {
  const response = await fetch(`${URL}/Products-phone`);
  const data = await response.json();
  return data;
};

export const insertProduct = async (data) => {
  const response = await fetch(`${URL}/Products-phone`, {
    method: "post",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const item = await response.json();
  return item;
};

export const fetchProductId = async (id) => {
  const response = await fetch(`${URL}/Products-phone/${id}`);
  const data = await response.json();
  return data;
};

export const deleteCarById = async (id) => {
  const response = await fetch(`${URL}/Products-phone/${id}`, {
    method: "DELETE",
  });
  const data = await response.json();
  return data;
};
