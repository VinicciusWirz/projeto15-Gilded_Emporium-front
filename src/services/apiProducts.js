import axios from "axios";

const url = `${process.env.REACT_APP_API_URL}/products`;
function getProducts() {
  return axios.get(url);
}

function getProductsID(id) {
  return axios.get(`${url}/${id}`);
}

const apiProducts = { getProducts, getProductsID };
export default apiProducts;
