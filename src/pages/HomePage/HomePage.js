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
  const [newProducts, setNewProducts] = useState();
  const [hotDeals, setHotDeals] = useState([]);
  const arrayPlaceholder = [...Array(10)];

  useEffect(() => {
    apiProducts
      .getProducts()
      .then((res) => {
        const products = [...res.data];
        const middleIndex = Math.floor(products.length / 2);
        const firstHalf = products.slice(0, middleIndex);
        const secondHalf = products.slice(middleIndex);
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
              {!newProducts
                ? arrayPlaceholder.map((e, index) => (
                    <ProductsListItems key={index} />
                  ))
                : newProducts.map((p) => (
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
              {!hotDeals
                ? arrayPlaceholder.map((e, index) => (
                    <ProductsListItems key={index} />
                  ))
                : hotDeals.map((p) => (
                    <ProductsListItems item={p} key={p._id} />
                  ))}
            </ProductListStyle>
          </article>
        </ProductsSections>
      </MainView>
    </PageContainer>
  );
}
