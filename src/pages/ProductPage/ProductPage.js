import { FaStar } from "react-icons/fa";
import MenuNav from "../../components/MenuNav";
import {
  BannerContainer,
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
          <div>
            <img src="https://cdn.discordapp.com/attachments/376089859372089355/1101242522249990164/header_banner_1.png" />
          </div>

          <ProductInfo>
            <div>
              <h4>
                Nome do
                produto
              </h4>
            </div>
            <Rate>
              <FaStar style={{ color: "rgb(250,250,0)" }} /> (4,5)
            </Rate>
            <ItemDescription>
              "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
              est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
              velit, sed quia non numquam eius modi tempora incidunt ut labore
              et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima
              veniam, quis nostrum exercitationem ullam corporis suscipit
              laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem
              vel eum iure reprehenderit qui in ea voluptate velit esse quam
              nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
              voluptas nulla pariatur?"
            </ItemDescription>
            <Keywords>Banana, sabonete</Keywords>
            <OrderWrapper>
              R$ 00,00
              <button>Adicionar ao carrinho</button>
            </OrderWrapper>
          </ProductInfo>
        </ProductContainer>
      </MainView>
    </PageContainer>
  );
}
