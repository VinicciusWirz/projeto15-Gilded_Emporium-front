import { IoMdStarHalf } from "react-icons/io";
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

export default function HomePage() {
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
            <p>Ofertas do dia</p>
          </button>
          <button>
            <p>Eletrodomésticos</p>
          </button>
          <button>
            <p>Eletrônicos</p>
          </button>
          <button>
            <p>Instrumentos</p>
          </button>
          <button>
            <p>Decoração</p>
          </button>
        </MenuNav>
        <ProductsSections>
          <article>
            <h6>Se liga nos lançamentos!</h6>
            <ProductList>
              <ProductItem>
                <img src="" alt="" />
                <h3>Titulo do produto</h3>
                <DescriptionContainer>
                  <span>
                    Descriçãoaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                  </span>
                </DescriptionContainer>
                <div>
                  R$ 50,00
                  <div>
                    <IoMdStarHalf />
                    (4,5)
                  </div>
                </div>
              </ProductItem>
            </ProductList>
          </article>
        </ProductsSections>
        <ProductsSections>
          <article>
            <h6>
              Os mais comprados!
              <AiFillFire style={({ color: "red" }, { fontSize: "26px" })} />
            </h6>
            <ProductList>
              <ProductItem>
                <img src="" alt="" />
                <h3>Titulo do produto</h3>
                <DescriptionContainer>
                  <span>
                    Descriçãoaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                  </span>
                </DescriptionContainer>
                <div>
                  R$ 50,00
                  <div>
                    <IoMdStarHalf />
                    (4,5)
                  </div>
                </div>
              </ProductItem>
            </ProductList>
          </article>
        </ProductsSections>
      </MainView>
    </PageContainer>
  );
}
