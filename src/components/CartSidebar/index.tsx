import Image from "next/future/image";
import Link from "next/link";
import { X } from "phosphor-react";
import { useContext } from "react";

import shirt from "../../assets/shirt.png";
import { CartSideBarContext } from "../../contexts/CartSideBarContext";
import {
  CardSideNavContainer,
  CloseButton,
  DetailsContainer,
  ImageContainer,
  ProductContainer
} from "./styles";

function CartSideBar() {
  const { isHidden, changeVisibility } = useContext(CartSideBarContext);

  return (
    <>
      <CardSideNavContainer isHidden={isHidden}>
        <CloseButton onClick={changeVisibility}>
          <X size={28} weight="bold" />
        </CloseButton>

        <h1> Sacola de compras </h1>

        <main>
          <ProductContainer>
            <Link href="/product/1" prefetch={false}>
              <ImageContainer>
                <Image src={shirt} width={95} height={95} alt="" />
              </ImageContainer>
            </Link>

            <DetailsContainer>
              <h2>Camiseta Beyond the Limits</h2>
              <strong>R$ 79,90</strong>

              <span>Remover</span>
            </DetailsContainer>
          </ProductContainer>

          <ProductContainer>
            <Link href="/product/1" prefetch={false}>
              <ImageContainer>
                <Image src={shirt} width={95} height={95} alt="" />
              </ImageContainer>
            </Link>

            <DetailsContainer>
              <h2>Camiseta Beyond the Limits</h2>
              <strong>R$ 79,90</strong>

              <span>Remover</span>
            </DetailsContainer>
          </ProductContainer>
        </main>

        <footer>
          <div>
            <span> Quantidade </span>
            <span> 2 itens </span>
          </div>

          <div>
            <strong> Valor total </strong>
            <strong> R$ 159,80 </strong>
          </div>

          <button>Finalizar compra</button>
        </footer>
      </CardSideNavContainer>
    </>
  );
}

export { CartSideBar };
