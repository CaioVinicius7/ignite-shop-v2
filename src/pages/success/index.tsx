import { GetServerSideProps } from "next";
import Image from "next/future/image";
import Head from "next/head";
import Link from "next/link";
import Stripe from "stripe";

import logo from "../../assets/logo.svg";
import { stripe } from "../../lib/stripe";
import {
  ProductsContainer,
  SuccessContainer
} from "../../styles/pages/success";

interface SuccessProps {
  customerName: string;
  productsQuantity: number;
  products: {
    id: string;
    name: string;
    img: string;
  }[];
}

export default function Success({
  customerName,
  productsQuantity,
  products
}: SuccessProps) {
  const oneProduct = productsQuantity === 1;

  return (
    <>
      <Head>
        <title> Compra efetuada | Ignite Shop </title>
      </Head>

      <SuccessContainer>
        <Image src={logo} width={130} height={52} alt="" />

        <ProductsContainer>
          {products.map((product) => {
            return (
              <div key={product.id}>
                <Image
                  src={product.img}
                  width={130}
                  height={142}
                  alt={product.name}
                />
              </div>
            );
          })}
        </ProductsContainer>

        <h1>Compra efetuada!</h1>

        <p>
          Uhuul <strong>{customerName}</strong>, sua compra
          {!oneProduct && ` de ${productsQuantity} camisetas `} já está a
          caminho da sua casa.
        </p>

        <Link href="/"> Voltar para o catálogo </Link>
      </SuccessContainer>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  if (!query.session_id) {
    return {
      redirect: {
        destination: "/",
        permanent: false
      }
    };
  }

  const sessionId = String(query.session_id);

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ["line_items", "line_items.data.price.product"]
  });

  const customerName = session.customer_details.name;

  const productsQuantity = session.line_items.data.reduce((acc, product) => {
    return (acc += product.quantity);
  }, 0);

  const products = session.line_items.data.map((item) => {
    const product = item.price.product as Stripe.Product;

    return {
      id: product.id,
      name: product.name,
      img: product.images[0]
    };
  });

  return {
    props: {
      customerName,
      productsQuantity,
      products
    }
  };
};
