import { useContext, useEffect, useState } from "react";
import { BsFillTrash3Fill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import AuthContext from "../../Context/AuthContext";
import CartContext from "../../Context/CartContext";
import apiCart from "../../services/apiCart";
import apiProducts from "../../services/apiProducts";

export default function CartPage() {
  const { cart, setCart } = useContext(CartContext);
  const { token } = useContext(AuthContext);
  const [renderCart, setRenderCart] = useState([]);
  const [total, setTotal] = useState(0);
  const navigate = useNavigate();
  useEffect(() => {
    if (cart.length > 0) {
      renderProducts();
    }
  }, []);

  function renderProducts() {
    if (cart) {
      apiProducts
        .getProductsMany(cart)
        .then(({ data }) => {
          const countedArray = countAmount(cart, data);
          subtotal(countedArray);
          setRenderCart(countedArray);
        })
        .catch((err) => console.log(err));
    } else {
      setRenderCart([]);
      setTotal(0);
    }
  }

  function renderQuery(res) {
    if (res.length > 0) {
      apiProducts
        .getProductsMany(res)
        .then(({ data }) => {
          const countedArray = countAmount(res, data);
          subtotal(countedArray);
          setRenderCart(countedArray);
        })
        .catch((err) => console.log(err));
    } else {
      setRenderCart([]);
      setTotal(0);
    }
  }

  function countAmount(array, data) {
    let counts = data.reduce((acc, product) => {
      return { ...acc, [product._id]: { ...product, amount: 0 } };
    }, {});

    array.forEach((p) => {
      counts[p.productId].amount++;
    });
    return Object.values(counts);
  }

  function subtotal(array) {
    const totalSum = array.reduce((acc, product) => {
      return acc + product.price * product.amount;
    }, 0);
    const convertToCurrency = (totalSum / 100).toLocaleString("pt-BR", {
      style: "decimal",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
    setTotal(convertToCurrency);
  }

  function removeItem(e, id) {
    e.stopPropagation();
    const confirmation =
      "Você está prestes a remover 1 item do carrinho, deseja continuar?";
    if (window.confirm(confirmation)) {
      if (token) {
        apiCart
          .removeItem(id, token)
          .then(() => {
            updateCart();
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        const localCart = removeItemFromLocal(id);
        let newCart = [];
        if (localCart.length > 0) {
          localStorage.setItem("cart", JSON.stringify(localCart));
          newCart = localCart;
        } else {
          localStorage.removeItem("cart");
        }
        renderQuery(newCart);
        setCart(newCart);
      }
    }
  }

  function clearCart() {
    const confirmation =
      "Você está prestes a remover todos os items do carrinho, deseja continuar?";
    if (window.confirm(confirmation)) {
      if (!token) {
        localStorage.removeItem("cart");
        window.location.reload();
      } else {
        apiCart
          .deleteCart(token)
          .then(() => {
            updateCart();
          })
          .catch((err) => {
            console.log(err);
          });
      }
    }
  }

  function updateCart() {
    apiCart
      .getCart(token)
      .then((res) => {
        if (res.data.length !== 0) {
          const serverCart = JSON.stringify(res.data);
          localStorage.setItem("sessionCart", serverCart);
        } else {
          localStorage.removeItem("sessionCart");
        }
        setCart(res.data);
        renderQuery(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <MainView>
      <Container>
        <ProductsList>
          {cart ? (
            renderCart.map((p) => (
              <Product
                key={p.name}
                onClick={() => navigate(`/produto/${p._id}`)}
              >
                <img src={p.picture} alt={p.name} />
                <ProductInfo>
                  <Description>
                    <h2>{p.name}</h2>
                    <span>{p.description}</span>
                  </Description>
                  <p>
                    R$:{" "}
                    {(p.price / 100).toLocaleString("pt-BR", {
                      style: "decimal",
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                  </p>
                </ProductInfo>
                <ProductOptions>
                  <BsFillTrash3Fill
                    size="18px"
                    cursor="pointer"
                    onClick={(e) => removeItem(e, p._id)}
                  />
                  <div>Quantidade: {p.amount}</div>
                </ProductOptions>
              </Product>
            ))
          ) : (
            <EmptyCart>Seu carrinho está vazio.</EmptyCart>
          )}
        </ProductsList>
        <OrderContainer>
          <OrderInfo>
            <Subtotal>
              <div>Subtotal:</div>
              <div>{renderCart.length > 0 ? `R$${total}` : "R$00,00"}</div>
            </Subtotal>
            <Quantity>
              <div>Total de items:</div>
              <div>
                {cart.length} {cart.length > 1 ? "itens" : "item"}
              </div>
            </Quantity>
            <ButtonWrapper>
              <button disabled={!token}>Finalizar pedido</button>
              <button disabled={!cart} onClick={clearCart}>
                Limpar carrinho
              </button>
            </ButtonWrapper>
          </OrderInfo>
        </OrderContainer>
      </Container>
    </MainView>
  );
}

function removeItemFromLocal(id) {
  const localCart = JSON.parse(localStorage.getItem("cart"));
  let indexToRemove = -1;
  localCart.forEach((p, index) => {
    if (p.productId === id) {
      indexToRemove = index;
      return;
    }
  });
  if (indexToRemove !== -1) {
    localCart.splice(indexToRemove, 1);
  }
  return localCart;
}

const Subtotal = styled.div`
  width: 100%;
  font-family: "Raleway";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 18px;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: space-between;
  color: #000000;
`;

const MainView = styled.main`
  display: flex;
  justify-content: center;
  width: 100%;
  padding-bottom: 50px;
  padding-top: 20px;
`;
const Container = styled.div`
  width: 79%;
  height: 80%;
  min-height: 60vh;
  background: #ffffff;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  display: flex;
`;
const ProductsList = styled.ul`
  width: 100%;
  min-height: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
const Product = styled.li`
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 154px;
  width: 100%;
  background: #ffffff;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  gap: 15px;
  img {
    object-fit: contain;
    height: 100%;
    width: 156px;
    min-width: 156px;
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
  }
`;
const OrderContainer = styled.section`
  width: 25%;
  height: 100%;
  padding: 20px 20px 20px 0px;
`;
const OrderInfo = styled.article`
  background: #ffffff;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  gap: 20px;
`;

const Quantity = styled.div`
  width: 100%;
  font-family: "Raleway";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 18px;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: space-between;
  color: #000000;
`;

const ProductOptions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  height: 100%;
  justify-content: space-between;
  min-width: 33%;
  div {
    font-family: "Raleway";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    display: flex;
    align-items: center;

    color: #000000;
  }
`;

const ProductInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  h2 {
    height: 20%;
    font-family: "Raleway";
    font-style: normal;
    font-weight: 700;
    font-size: 19px;
    line-height: 22px;
    display: flex;
    align-items: flex-start;
    color: #000000;
    height: 44px;
  }
  span {
    height: 60%;
    font-family: "Raleway";
    font-style: normal;
    font-weight: 100;
    font-size: 19px;
    line-height: 22px;
    display: flex;
    color: #000000;
  }
  p {
    height: 20%;
    min-height: 20%;
    font-family: "Raleway";
    font-style: normal;
    font-weight: 400;
    font-size: 19px;
    line-height: 22px;
    display: flex;
    align-items: center;
    color: #000000;
  }
`;
const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  border-top: 1px solid lightgray;
  padding-top: 50px;
  gap: 25px;
  button {
    border: none;
    background: #e8e8e8;
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    font-family: "Raleway";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #000000;
    padding: 14px 0px;
    &:first-child {
      background: #91ff9c;
    }
  }
`;
const Description = styled.div`
  span {
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    word-break: break-all;
    text-overflow: ellipsis;
    line-height: 28px;
  }
`;

const EmptyCart = styled.div`
  align-self: center;
  font-family: "Raleway";
  font-style: normal;
  font-weight: 400;
  font-size: 19px;
  line-height: 22px;
  display: flex;
  align-items: center;
  color: #000000;
`;
