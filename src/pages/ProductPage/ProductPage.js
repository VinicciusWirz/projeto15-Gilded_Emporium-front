import { useState } from "react";
import { useEffect } from "react";
import { FaStar } from "react-icons/fa";
import { useParams } from "react-router-dom";
import MenuNav from "../../components/MenuNav";
import apiProducts from "../../services/apiProducts";
import {
  BannerContainer,
  ImageContainer,
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
  const [product, setProduct] = useState({});
  const params = useParams();
  useEffect(() => {
    apiProducts
      .getProductsID(params.id)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
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
            <img src={product?.picture} alt={product?.name} />
          </ImageContainer>

          <ProductInfo>
            <div>
              <h4>{product?.name}</h4>
            </div>
            <Rate>
              <FaStar style={{ color: "rgb(250,250,0)" }} /> (4,5)
            </Rate>
            <ItemDescription>{product.description}</ItemDescription>
            <Keywords>{product.keywords?.join(", ")}</Keywords>
            <OrderWrapper>
              R${" "}
              {(product.price / 100).toLocaleString("pt-BR", {
                style: "decimal",
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
              <button onClick={() => console.log(product._id)}>
                Adicionar ao carrinho
              </button>
            </OrderWrapper>
          </ProductInfo>
        </ProductContainer>
      </MainView>
    </PageContainer>
  );
}
