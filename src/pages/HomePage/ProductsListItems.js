import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { DescriptionContainer, ProductItem } from "./styles";

export default function ProductsListItems({ item }) {
  const navigate = useNavigate();
  const { _id, name, picture, description, price, rate } = item;
  return (
    <>
      <ProductItem onClick={() => navigate(`/produto/${_id}`)} key={_id}>
        <img src={picture} alt={name} />
        <h3>{name}</h3>
        <DescriptionContainer>
          <span>{description}</span>
        </DescriptionContainer>
        <div>
          R${" "}
          {(price / 100).toLocaleString("pt-BR", {
            style: "decimal",
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}
          <div>
            {Number(rate) > 4.5 ? (
              <FaStar style={{ color: "rgb(250,250,0)" }} />
            ) : Number(rate) > 1 ? (
              <FaStarHalfAlt style={{ color: "rgb(250,250,0)" }} />
            ) : (
              <FaRegStar style={{ color: "rgb(250,250,0)" }} />
            )}
            ({rate})
          </div>
        </div>
      </ProductItem>
    </>
  );
}
