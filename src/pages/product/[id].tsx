import { NextPage } from "next";
import Image from "next/future/image";
import Head from "next/head";
import { useShoppingCart } from "use-shopping-cart";

import shirt from "../../assets/shirt.png";
import { Header } from "../../components/Header";
import {
  ImageContainer,
  ProductContainer,
  ProductDetails
} from "../../styles/pages/product";

const Product: NextPage = () => {
  const { addItem } = useShoppingCart();

  return (
    <>
      <Head>
        <title> Produto | Ignite Shop </title>
      </Head>

      <>
        <Header />

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

            <button
              onClick={() => {
                addItem({
                  id: "id_GBJ2Ep8246qas6",
                  name: "Camiseta Beyond the Limits 3",
                  price: 7990,
                  price_id: "f965ba86-4a02-4e22-bf2e-ca47cc34d1a4",
                  sku: "bdad1f5c-7451-415d-bf81-a542907184ab",
                  sku_id: "e4533693-f236-4971-8af5-4bede896890c",
                  currency: "BRL"
                });
              }}
            >
              Colocar na sacola
            </button>
          </ProductDetails>
        </ProductContainer>
      </>
    </>
  );
};

export default Product;
