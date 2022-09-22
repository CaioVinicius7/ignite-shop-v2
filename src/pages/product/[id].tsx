import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/future/image";
import Head from "next/head";
import { useRouter } from "next/router";
import Stripe from "stripe";
import { useShoppingCart } from "use-shopping-cart";

import { Header } from "../../components/Header";
import { stripe } from "../../lib/stripe";
import {
  ImageContainer,
  ProductContainer,
  ProductDetails
} from "../../styles/pages/product";

interface ProductProps {
  product: {
    id: string;
    name: string;
    imageUrl: string;
    price: string;
    priceInCents: number;
    description: string;
    defaultPriceId: string;
  };
}

export default function Product({ product }: ProductProps) {
  const { addItem } = useShoppingCart();
  const { isFallback } = useRouter();

  if (isFallback) {
    return <p> Carregando... </p>;
  }

  return (
    <>
      <Head>
        <title> {product.name} | Ignite Shop </title>
      </Head>

      <>
        <Header />

        <ProductContainer>
          <ImageContainer>
            <Image src={product.imageUrl} width={520} height={480} alt="" />
          </ImageContainer>
          <ProductDetails>
            <h1> {product.name} </h1>
            <span> {product.price} </span>

            <p>{product.description}</p>

            <button
              onClick={() => {
                addItem({
                  id: product.id,
                  name: product.name,
                  price: product.priceInCents,
                  price_id: product.defaultPriceId,
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
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true
  };
};

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({
  params
}) => {
  const { id } = params;

  const product = await stripe.products.retrieve(id, {
    expand: ["default_price"]
  });

  const price = product.default_price as Stripe.Price;

  const priceFormatted = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL"
  }).format(price.unit_amount / 100);

  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        price: priceFormatted,
        priceInCents: price.unit_amount,
        description: product.description,
        defaultPriceId: price.id
      }
    },
    revalidate: 60 * 60 * 3 // 3 Hours
  };
};
