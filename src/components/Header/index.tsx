import Image from "next/future/image";
import { Handbag } from "phosphor-react";
import { useContext } from "react";

import logo from "../../assets/logo.svg";
import { CartSideBarContext } from "../../contexts/CartSideBarContext";
import { CartButton, HeaderContainer } from "./styles";

function Header() {
  const { changeVisibility } = useContext(CartSideBarContext);

  return (
    <HeaderContainer>
      <Image src={logo} alt="Logo" />

      <CartButton onClick={changeVisibility}>
        <Handbag size={32} weight="bold" />
      </CartButton>
    </HeaderContainer>
  );
}

export { Header };
