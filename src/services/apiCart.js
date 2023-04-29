import axios from "axios";

const url = `${process.env.REACT_APP_API_URL}/cart`;

function configGen(token) {
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
}
function addCartProduct(id, token) {
  return axios.post(url, { productId: id }, configGen(token));
}
function unloadCartProducts(cart, token) {
  return axios.post(`${url}/unload`, { cart }, configGen(token));
}
function getCart(token) {
  return axios.get(url, configGen(token));
}

const apiCart = { addCartProduct, unloadCartProducts, getCart };
export default apiCart;
