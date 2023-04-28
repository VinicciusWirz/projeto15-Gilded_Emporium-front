import { FaStarHalfAlt, FaStar, FaRegStar } from "react-icons/fa";
import { AiFillFire } from "react-icons/ai";
import {
  BannerContainer,
  DescriptionContainer,
  MainView,
  MenuNav,
  PageContainer,
  ProductItem,
  ProductList,
  ProductsSections,
} from "./styles";
import { useEffect } from "react";
import apiProducts from "../../services/apiProducts";
import { useState } from "react";

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
        <MenuNav>
          <button>
            <div>
              <p>Ofertas do dia</p>
            </div>
          </button>
          <button>
            <div>
              <p>Eletrodomésticos</p>
            </div>
          </button>
          <button>
            <div>
              <p>Eletrônicos</p>
            </div>
          </button>
          <button>
            <div>
              <p>Instrumentos</p>
            </div>
          </button>
          <button>
            <div>
              <p>Decoração</p>
            </div>
          </button>
        </MenuNav>
        <ProductsSections>
          <article>
            <h6>Se liga nos lançamentos!</h6>
            <ProductList>
              {newProducts.map((p) => (
                <ProductItem onClick={() => console.log(p._id)} key={p._id}>
                  <img src={p.picture} alt={p.name} />
                  <h3>{p.name}</h3>
                  <DescriptionContainer>
                    <span>{p.description}</span>
                  </DescriptionContainer>
                  <div>
                    R${" "}
                    {(p.price / 100).toLocaleString("pt-BR", {
                      style: "decimal",
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                    <div>
                      {Number(p.review) > 4.5 ? (
                        <FaStar style={{ color: "rgb(250,250,0)" }} />
                      ) : Number(p.review) > 1 ? (
                        <FaStarHalfAlt style={{ color: "rgb(250,250,0)" }} />
                      ) : (
                        <FaRegStar style={{ color: "rgb(250,250,0)" }} />
                      )}
                      ({p.review})
                    </div>
                  </div>
                </ProductItem>
              ))}
            </ProductList>
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
            <ProductList>
              {hotDeals.map((p) => (
                <ProductItem onClick={() => console.log(p._id)} key={p._id}>
                  <img src={p.picture} alt={p.name} />
                  <h3>{p.name}</h3>
                  <DescriptionContainer>
                    <span>{p.description}</span>
                  </DescriptionContainer>
                  <div>
                    R${" "}
                    {(p.price / 100).toLocaleString("pt-BR", {
                      style: "decimal",
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                    <div>
                      {Number(p.review) > 4.5 ? (
                        <FaStar style={{ color: "rgb(250,250,0)" }} />
                      ) : Number(p.review) > 1 ? (
                        <FaStarHalfAlt style={{ color: "rgb(250,250,0)" }} />
                      ) : (
                        <FaRegStar style={{ color: "rgb(250,250,0)" }} />
                      )}
                      ({p.review})
                    </div>
                  </div>
                </ProductItem>
              ))}
            </ProductList>
          </article>
        </ProductsSections>
      </MainView>
    </PageContainer>
  );
}
