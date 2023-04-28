import { useState } from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { FaStar } from "react-icons/fa";
import { useParams } from "react-router-dom";
import MenuNav from "../../components/MenuNav";
import AuthContext from "../../Context/AuthContext";
import apiCart from "../../services/apiCart";
import apiProducts from "../../services/apiProducts";
import {
  BannerContainer,
  ImageContainer,
  InfoHeader,
  ItemDescription,
  Keywords,
  MainView,
  OrderWrapper,
  PageContainer,
  ProductContainer,
  ProductInfo,
  Rate,
} from "./style";

export default function ProductPage() {
  const [product, setProduct] = useState();
  const params = useParams();
  const { token } = useContext(AuthContext);
  const [loadingCart, setLoadingCart] = useState(false);
  useEffect(() => {
    //Ao cair no catch, enviar para a página 'em construção quando pronta'
    apiProducts
      .getProductsID(params.id)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => console.log(err));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function addToCart(id) {
    if (!token) {
      return alert(
        "você precisa fazer login para adicionar o item no carrinho"
      );
    }
    setLoadingCart(true);
    apiCart
      .addProduct(id, token)
      .then(() => {
        alert("Produto adicionado ao carrinho");
        setLoadingCart(false);
      })
      .catch((err) => {
        alert(`Erro ${err.response.status}: ${err.response.data}`);
        setLoadingCart(false);
      });
  }
  return (
    <PageContainer>
      <BannerContainer>
        <img
          src="https://cdn.discordapp.com/attachments/376089859372089355/1101242522249990164/header_banner_1.png"
          alt="header-logo"
        />
      </BannerContainer>
      <MainView>
        <MenuNav />
        <ProductContainer>
          <ImageContainer>
            <img src={product.picture} alt={product.name} />
          </ImageContainer>

          <ProductInfo>
            <InfoHeader>
              <div>
                <h4>{product?.name}</h4>
              </div>
              <Rate>
                <FaStar style={{ color: "rgb(250,250,0)" }} /> (4,5)
              </Rate>
            </InfoHeader>
            <ItemDescription>{product?.description}</ItemDescription>
            <Keywords>{product?.category}, {product?.keywords?.join(", ")}</Keywords>
            <OrderWrapper>
              R${" "}
              {(product?.price / 100).toLocaleString("pt-BR", {
                style: "decimal",
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
              <button
                onClick={() => addToCart(product?._id)}
                disabled={loadingCart}
              >
                Adicionar ao carrinho
              </button>
            </OrderWrapper>
          </ProductInfo>
        </ProductContainer>
      </MainView>
    </PageContainer>
  );
}
