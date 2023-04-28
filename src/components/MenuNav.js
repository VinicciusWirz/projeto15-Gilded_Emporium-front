import styled from "styled-components";

export default function MenuNav() {
  return (
    <MenuNavStyle>
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
    </MenuNavStyle>
  );
}

const MenuNavStyle = styled.nav`
  display: flex;
  justify-content: space-between;
  border-radius: 0px 0px 5px 5px;
  background: #ffff;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
  min-width: 90%;
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
    :hover {
      p {
        transform: scale(1.08);
      }
    }
    p {
      width: 100%;
      height: 25px;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: transform 0.1s ease-in-out;
    }
    &:not(:first-child) {
      div {
        border-left: 1px solid gray;
      }
    }
    &:first-child {
      font-weight: 700;
    }
  }
`;
