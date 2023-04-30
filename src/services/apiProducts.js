import axios from "axios";

const url = `${process.env.REACT_APP_API_URL}/products`;
function getProducts() {
  return axios.get(url);
}

function getProductsID(id) {
  return axios.get(`${url}/${id}`);
}

function getProductsMany(products) {
  const productsIds = products.map((p) => p.productId).join(",");
  const config = {
    headers: {
      Filter: JSON.stringify(productsIds),
    },
  };
  return axios.get(`${url}/cart/items`, config);
}

const apiProducts = { getProducts, getProductsID, getProductsMany };
export default apiProducts;
