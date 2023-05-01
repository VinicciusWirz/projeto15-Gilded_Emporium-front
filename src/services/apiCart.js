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

function deleteCart(token) {
  return axios.delete(`${url}/clear`, configGen(token));
}

function removeItem(id, token) {
  return axios.delete(`${url}/remove/${id}`, configGen(token));
}

const apiCart = { addCartProduct, unloadCartProducts, getCart, deleteCart, removeItem };
export default apiCart;
