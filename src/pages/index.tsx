import type { NextPage } from "next";
import Image from "next/future/image";
import Head from "next/head";
import { Handbag } from "phosphor-react";

import shirt from "../assets/shirt.png";
import { CartButton, HomeContainer, Product } from "../styles/pages/home";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title> Home | Ignite Shop </title>
      </Head>

      <HomeContainer>
        <Product>
          <Image src={shirt} width={520} height={480} alt="" />

          <footer>
            <div>
              <strong> Camiseta Beyond the Limits </strong>
              <span> R$ 49,90 </span>
            </div>

            <CartButton>
              <Handbag size={32} weight="bold" />
            </CartButton>
          </footer>
        </Product>
      </HomeContainer>
    </>
  );
};

export default Home;
