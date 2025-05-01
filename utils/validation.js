export const validateInsert = (data, message) => {
  let isError = false;

  if (
    !data.title ||
    !data.description ||
    !data.price ||
    !data.saleLocation ||
    !data.imgUrl
  ) {
    if (message) {
      message.textContent = "Fill all fields before submitting.";
      message.style.color = "red";
    }
    isError = true;
  }

  if (data.title && data.title.length < 3) {
    if (message) {
      message.textContent = "Title must be at least 3 characters long.";
      message.style.color = "red";
    }
    isError = true;
  }

  if (data.description && data.description.length < 8) {
    if (message) {
      message.textContent = "Description must be at least 8 characters long.";
      message.style.color = "red";
    }
    isError = true;
  }

  if (isNaN(data.price)) {
    if (message) {
      message.textContent = "Price must be a number.";
      message.style.color = "red";
    }
    isError = true;
  }

  const imageUrlRegex =
    /^https?:\/\/.*\.(jpg|jpeg|png|gif|bmp|webp|svg)(\?.*)?$/i;

  if (data.imgUrl && !imageUrlRegex.test(data.imgUrl)) {
    if (message) {
      message.textContent = "Image URL is invalid.";
      message.style.color = "red";
    }
    isError = true;
  }
  return isError;
};
