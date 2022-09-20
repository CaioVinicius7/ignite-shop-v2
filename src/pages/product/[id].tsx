import { NextPage } from "next";
import Image from "next/future/image";
import Head from "next/head";

import shirt from "../..//assets/shirt.png";
import {
  ImageContainer,
  ProductContainer,
  ProductDetails
} from "../../styles/pages/product";

const Product: NextPage = () => {
  return (
    <>
      <Head>
        <title> Produto | Ignite Shop </title>
      </Head>

      <ProductContainer>
        <ImageContainer>
          <Image src={shirt} width={520} height={480} alt="" />
        </ImageContainer>
        <ProductDetails>
          <h1> Camiseta Beyond the Limits </h1>
          <span> R$ 49,90 </span>

          <p>
            Tempus fermentum eget lacus, quis ante. Potenti sit pharetra,
            ridiculus amet. Bibendum pretium arcu arcu eget viverra at metus
            donec hendrerit. Rhoncus, nunc, eu at ac.
          </p>

          <button>Colocar na sacola</button>
        </ProductDetails>
      </ProductContainer>
    </>
  );
};

export default Product;
