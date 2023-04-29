import { AiFillFire } from "react-icons/ai";
import {
  BannerContainer,
  MainView,
  PageContainer,
  ProductListStyle,
  ProductsSections,
} from "./styles";
import { useEffect } from "react";
import apiProducts from "../../services/apiProducts";
import { useState } from "react";
import MenuNav from "../../components/MenuNav";
import ProductsListItems from "./ProductsListItems";

export default function HomePage() {
  const [newProducts, setNewProducts] = useState([]);
  const [hotDeals, setHotDeals] = useState([]);
  useEffect(() => {
    apiProducts
      .getProducts()
      .then((res) => {
        const products = [...res.data];
        const middleIndex = Math.floor(products.length / 2);
        const firstHalf = products.slice(0, middleIndex).map((p) => {
          return { ...p, review: (Math.random() * 5).toFixed(1) };
        });
        const secondHalf = products.slice(middleIndex).map((p) => {
          return { ...p, review: (Math.random() * 5).toFixed(1) };
        });
        setNewProducts(firstHalf);
        setHotDeals(secondHalf);
      })
      .catch((err) => {
        console.log(err);
      });
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
        <ProductsSections>
          <article>
            <h6>Se liga nos lançamentos!</h6>
            <ProductListStyle>
              {newProducts.map((p) => (
                <ProductsListItems item={p} key={p._id} />
              ))}
            </ProductListStyle>
          </article>
        </ProductsSections>
        <ProductsSections>
          <article>
            <h6>
              Os mais comprados!
              <AiFillFire
                style={{ color: "rgb(240,15,0)", fontSize: "26px" }}
              />
            </h6>
            <ProductListStyle>
              {hotDeals.map((p) => (
                <ProductsListItems item={p} key={p._id} />
              ))}
            </ProductListStyle>
          </article>
        </ProductsSections>
      </MainView>
    </PageContainer>
  );
}
