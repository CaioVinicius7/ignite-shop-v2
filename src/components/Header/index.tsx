import Image from "next/future/image";
import { Handbag } from "phosphor-react";

import logo from "../../assets/logo.svg";
import { CartButton, HeaderContainer } from "./styles";

function Header() {
  return (
    <HeaderContainer>
      <Image src={logo} alt="Logo" />

      <CartButton>
        <Handbag size={32} weight="bold" />
      </CartButton>
    </HeaderContainer>
  );
}

export { Header };
