import styled, { keyframes } from "styled-components";

// animations
const wobble = keyframes`
  0% { transform: translateX(0); }
  25% { transform: translateX(-02%) rotate(-2deg); }
  75% { transform: translateX(2%) rotate(2deg); }
  100% { transform: translateX(0); }
  `;

//styles
export const PageContainer = styled.div`
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
    width: 100%;
  }
`;
export const BannerContainer = styled.div`
  object-fit: cover;
  width: 100%;
  height: 360px;
  overflow: hidden;
  z-index: 999;
`;
export const MainView = styled.section`
  margin: 0px 72px;
`;

export const MenuNav = styled.nav`
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

export const ProductsSections = styled.article`
  height: 500px;
  width: 100%;
  display: flex;
  justify-content: center;
  div {
    margin-top: 64px;
    width: 95%;
  }
  article {
    font-weight: 700;
    margin-left: 10px;
    height: 374px;
    width: 100%;
    margin-top: 64px;
    h6 {
      font-weight: 700;
      margin-left: 10px;
      font-size: 25px;
    }
  }
`;

export const ProductList = styled.ul`
  height: 100%;
  max-width: 95%;
  overflow-x: scroll;
  width: 95%;
  font-family: "Raleway";
  font-style: normal;
  font-size: 19px;
  line-height: 22px;
  color: #000000;
  font-weight: 400;
  display: flex;
  align-items: center;
  gap: 19px;
  &::-webkit-scrollbar {
    width: 12px;
    height: 12px;
    background-color: #f1f1f1;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #ccc;
    border-radius: 10px;
    border: 2px solid #f1f1f1;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: #999;
  }
  h6 {
  }
`;

export const ProductItem = styled.li`
  width: 232px;
  height: 330px;
  background: #ffffff;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  :hover {
    animation-name: ${wobble};
    animation-duration: 0.5s;
    animation-iteration-count: 1;
  }
  div {
    margin-top: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    div {
      width: auto;
      gap: 5px;
    }
  }
  img {
    width: 212px;
    min-width: 212px;
    max-width: 212px;
    height: 180px;
    max-height: 180px;
    min-height: 180px;
    object-fit: cover;
    filter: drop-shadow(0px 0px 4px rgba(0, 0, 0, 0.25));
    border-radius: 5px;
  }
  h3 {
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 21px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    word-break: break-all;
    text-overflow: ellipsis;
  }
`;

export const DescriptionContainer = styled.section`
  height: 18%;
  max-height: 18%;
  width: 100%;
  max-width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  span {
    font-style: normal;
    font-weight: 200;
    font-size: 14px;
    line-height: 16px;
    max-height: 48px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    word-break: break-all;
    text-overflow: ellipsis;
  }
`;
