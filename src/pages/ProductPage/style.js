import styled from "styled-components";

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
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProductContainer = styled.article`
  width: 70%;
  height: 530px;
  background: #ffffff;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  margin-top: 64px;
  margin-bottom: 144px;
  display: flex;
  object-fit: cover;
  padding: 20px;
  img {
    max-width: 80%;
    height: 100%;
    border-radius: 3px;
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
  }
`;
export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
  /* width: 100%; */
  div:nth-child(1) {
    display: flex;
    word-break: break-all;
    align-items: center;
    max-width: 100%;
    border-bottom: 1px solid gray;
    padding-bottom: 15px;
  }
  h4 {
    font-family: "Raleway";
    font-style: normal;
    font-weight: 700;
    font-size: 26px;
    line-height: 31px;
    color: #000000;
  }
`;
export const ItemDescription = styled.p`
  text-align: justify;
  text-justify: inter-word;
  height: 40%;
  max-height: 40%;
  overflow: hidden;
  padding-right: 5%;
`;

export const Keywords = styled.p`
  width: 100%;
  text-align: end;
  padding-right: 20px;
  font-size: 12px;
`;

export const Rate = styled.span`
  font-family: "Raleway";
  font-style: normal;
  font-weight: 100;
  font-size: 16px;
  line-height: 19px;
  align-items: center;
`;

export const OrderWrapper = styled.div`
  font-family: "Raleway";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 21px;
  display: flex;
  align-items: center;

  color: #000000;
  width: 100%;
  justify-content: space-between;
  button {
    width: 142px;
    height: 60px;

    background: #90ff9c;
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
  }
`;
