import { BsFillTrash3Fill } from "react-icons/bs";
import styled from "styled-components";

export default function CartPage() {
  return (
    <MainView>
      <Container>
        <ProductsList>
          <Product>
            <img />
            <ProductInfo>
              <h2>Produto</h2>
              <span>Descrição</span>
              <p>R$: 50,00</p>
            </ProductInfo>
            <ProductOptions>
              <BsFillTrash3Fill size="18px" cursor="pointer" />
              <div>Quantidade: 1</div>
            </ProductOptions>
          </Product>
        </ProductsList>
        <OrderContainer>
          <OrderInfo>
            <Subtotal>
              <div>Subtotal:</div>
              <div>R$50,00</div>
            </Subtotal>
            <Quantity>
              <div>Total de items:</div>
              <div>1 item</div>
            </Quantity>
            <ButtonWrapper>
              <button>Finalizar pedido</button>
              <button>Limpar carrinho</button>
            </ButtonWrapper>
          </OrderInfo>
        </OrderContainer>
      </Container>
    </MainView>
  );
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
  /* height: 100%; */
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
  height: 100%;
  h2 {
    height: 20%;
    font-family: "Raleway";
    font-style: normal;
    font-weight: 700;
    font-size: 19px;
    line-height: 22px;
    display: flex;
    align-items: center;
    color: #000000;
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
