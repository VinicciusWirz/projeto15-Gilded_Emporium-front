import axios from "axios";

const url = `${process.env.REACT_APP_API_URL}/cart`;

function configGen(token) {
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
}
function addProduct(id, token) {
  return axios.post(url, { productId: id }, configGen(token));
}

const apiCart = { addProduct };
export default apiCart;
