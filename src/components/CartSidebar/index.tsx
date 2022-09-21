import Image from "next/future/image";
import Link from "next/link";
import { Handbag, X } from "phosphor-react";
import { useShoppingCart } from "use-shopping-cart";

import shirt from "../../assets/shirt.png";
import {
  CardSideNavContainer,
  CloseButton,
  DetailsContainer,
  EmptyCart,
  ImageContainer,
  ProductContainer
} from "./styles";

function CartSideBar() {
  const {
    handleCartClick,
    shouldDisplayCart,
    cartDetails,
    removeItem,
    cartCount,
    formattedTotalPrice
  } = useShoppingCart();

  const cartIsEmpty = cartCount === 0;

  const cartList = Object.values(cartDetails ?? {}).map((cardItem) => cardItem);

  return (
    <>
      <CardSideNavContainer isVisible={shouldDisplayCart}>
        <CloseButton onClick={handleCartClick}>
          <X size={28} weight="bold" />
        </CloseButton>

        <h1> Sacola de compras </h1>

        <main>
          {cartIsEmpty ? (
            <EmptyCart>
              <Handbag size={64} />
              <strong> Carrinho vazio! </strong>
            </EmptyCart>
          ) : (
            cartList.map((cardItem) => (
              <ProductContainer key={cardItem.id}>
                <Link href="/product/1" prefetch={false}>
                  <ImageContainer>
                    <Image src={shirt} width={95} height={95} alt="" />
                  </ImageContainer>
                </Link>

                <DetailsContainer>
                  <h2>{cardItem.name}</h2>
                  <div>
                    <strong>{cardItem.formattedValue}</strong>

                    <span>Quant: {cardItem.quantity}</span>
                  </div>

                  <span onClick={() => removeItem(cardItem.id)}>Remover</span>
                </DetailsContainer>
              </ProductContainer>
            ))
          )}
        </main>

        <footer>
          <div>
            <span> Quantidade </span>
            <span> {cartCount} itens </span>
          </div>

          <div>
            <strong> Valor total </strong>
            <strong> {formattedTotalPrice} </strong>
          </div>

          <button disabled={cartIsEmpty}>Finalizar compra</button>
        </footer>
      </CardSideNavContainer>
    </>
  );
}

export { CartSideBar };
