import { NextPage } from "next";
import Image from "next/future/image";
import Head from "next/head";
import Link from "next/link";

import logo from "../../assets/logo.svg";
import shirt from "../../assets/shirt.png";
import {
  ProductsContainer,
  SuccessContainer
} from "../../styles/pages/success";

const Success: NextPage = () => {
  return (
    <>
      <Head>
        <title> Compra efetuada | Ignite Shop </title>
      </Head>

      <SuccessContainer>
        <Image src={logo} width={130} height={52} alt="" />

        <ProductsContainer>
          <div>
            <Image src={shirt} width={130} height={142} alt="" />
          </div>
          <div>
            <Image src={shirt} width={130} height={142} alt="" />
          </div>
          <div>
            <Image src={shirt} width={130} height={142} alt="" />
          </div>
        </ProductsContainer>

        <h1>Compra efetuada!</h1>

        <p>
          Uhuul <strong>Caio Vinícius</strong>, sua compra de 3 camisetas já
          está a caminho da sua casa.
        </p>

        <Link href="/"> Voltar para o catálogo </Link>
      </SuccessContainer>
    </>
  );
};

export default Success;
