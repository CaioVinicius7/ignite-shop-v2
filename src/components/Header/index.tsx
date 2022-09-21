import Image from "next/future/image";
import { Handbag } from "phosphor-react";
import { useShoppingCart } from "use-shopping-cart";

import logo from "../../assets/logo.svg";
import { CartButton, HeaderContainer } from "./styles";

function Header() {
  const { handleCartClick, cartCount } = useShoppingCart();

  return (
    <HeaderContainer>
      <Image src={logo} alt="Logo" />

      <CartButton onClick={handleCartClick}>
        {cartCount !== 0 && <span>{cartCount}</span>}

        <Handbag size={32} weight="bold" />
      </CartButton>
    </HeaderContainer>
  );
}

export { Header };
