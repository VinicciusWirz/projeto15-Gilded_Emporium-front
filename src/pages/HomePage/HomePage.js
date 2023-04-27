import styled from "styled-components";

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
        <ProductsSections></ProductsSections>
      </MainView>
    </PageContainer>
  );
}

const PageContainer = styled.div`
  * {
    box-sizing: border-box;
    font-family: "Raleway";
  }
  button {
    border: none;
    cursor: pointer;
    background: none;
  }
  div {
    background: red;
    width: 100%;
  }
`;
const BannerContainer = styled.div`
  object-fit: cover;
  width: 100%;
  height: 360px;
  overflow: hidden;
  z-index: 999;
`;
const MainView = styled.section`
  background: red;
  margin: 0px 72px;
`;

const MenuNav = styled.nav`
  display: flex;
  justify-content: space-between;
  border-radius: 0px 0px 5px 5px;
  background: #ffff;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 20px 0px;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    display: flex;
    align-items: center;
    color: #000000;
    p {
      width: 100%;
      height: 25px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    &:not(:first-child) {
      p {
        border-left: 1px solid gray;
      }
    }
    &:first-child {
      font-weight: 700;
      /* padding-left: 50px; */
    }
    &:last-child {
      /* padding-right: 50px; */
    }
  }
`;

const ProductsSections = styled.article`
height: 500px;
width: 100%;
`;
