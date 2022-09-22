import Image from "next/future/image";
import Link from "next/link";
import { Handbag } from "phosphor-react";
import { useShoppingCart } from "use-shopping-cart";

import logo from "../../assets/logo.svg";
import { CartButton, HeaderContainer } from "./styles";

function Header() {
  const { handleCartClick, cartCount } = useShoppingCart();

  return (
    <HeaderContainer>
      <Link href="/">
        <Image src={logo} alt="Logo" />
      </Link>

      <CartButton onClick={handleCartClick}>
        {cartCount !== 0 && <span>{cartCount}</span>}

        <Handbag size={32} weight="bold" />
      </CartButton>
    </HeaderContainer>
  );
}

export { Header };
