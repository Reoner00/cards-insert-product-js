const URL = "https://680a11fb1f1a52874cdf0a12.mockapi.io";

export const fetchCards = async () => {
  const response = await fetch(`${URL}/Products-phone`);
  const data = await response.json();
  return data;
};
