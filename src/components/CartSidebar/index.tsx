import axios from "axios";
import Image from "next/future/image";
import Link from "next/link";
import { Handbag, X } from "phosphor-react";
import { useState } from "react";
import { useShoppingCart } from "use-shopping-cart";

import {
  CardSideNavContainer,
  CloseButton,
  DetailsContainer,
  EmptyCart,
  ImageContainer,
  ProductContainer
} from "./styles";

function CartSideBar() {
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] =
    useState(false);
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

  async function handleBuyProducts() {
    const productsToCheckout = cartList.map((product) => {
      return {
        price: product.priceId,
        quantity: product.quantity
      };
    });

    try {
      setIsCreatingCheckoutSession(true);

      const response = await axios.post("/api/checkout", {
        products: productsToCheckout
      });

      const { checkoutUrl } = response.data;

      window.location.href = checkoutUrl;
    } catch (err) {
      setIsCreatingCheckoutSession(false);
      alert("Falha ao redirecionar ao checkout!");
    }
  }

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
                <Link href={`/product/${cardItem.id}`} prefetch={false}>
                  <ImageContainer>
                    <Image
                      src={cardItem.imageUrl}
                      width={95}
                      height={95}
                      alt=""
                    />
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

          <button
            disabled={cartIsEmpty || isCreatingCheckoutSession}
            onClick={handleBuyProducts}
          >
            Finalizar compra
          </button>
        </footer>
      </CardSideNavContainer>
    </>
  );
}

export { CartSideBar };
