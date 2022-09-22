import { useKeenSlider } from "keen-slider/react";
import type { GetStaticProps } from "next";
import Image from "next/future/image";
import Head from "next/head";
import Link from "next/link";
import { Handbag } from "phosphor-react";
import Stripe from "stripe";
import { useShoppingCart } from "use-shopping-cart";

import { Header } from "../components/Header";
import { stripe } from "../lib/stripe";
import {
  AddToCartButton,
  HomeContainer,
  Product,
  SliderContainer
} from "../styles/pages/home";

import "keen-slider/keen-slider.min.css";

interface HomeProps {
  products: {
    id: string;
    name: string;
    imageUrl: string;
    price: string;
    priceInCents: number;
    defaultPriceId: string;
  }[];
}

export default function Home({ products }: HomeProps) {
  const { addItem } = useShoppingCart();
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 2.6,
      spacing: 48
    },
    breakpoints: {
      "(max-width: 1280px": {
        slides: {
          perView: 1.6,
          spacing: 48
        }
      },
      "(max-width: 880px": {
        slides: {
          perView: 1.4,
          spacing: 48
        }
      },
      "(max-width: 600px": {
        slides: {
          perView: 1.2,
          spacing: 48
        }
      },
      "(max-width: 480px": {
        slides: {
          perView: 1.2,
          spacing: 44
        }
      }
    }
  });

  return (
    <>
      <Head>
        <title> Home | Ignite Shop </title>
      </Head>

      <>
        <Header />

        <HomeContainer>
          <SliderContainer ref={sliderRef} className="keen-slider">
            {products.map((product) => {
              return (
                <Product key={product.id} className="keen-slider__slide">
                  <Link href={`/product/${product.id}`} prefetch={false}>
                    <Image
                      src={product.imageUrl}
                      width={520}
                      height={480}
                      alt=""
                    />
                  </Link>

                  <footer>
                    <div>
                      <strong> {product.name} </strong>
                      <span> {product.price} </span>
                    </div>

                    <AddToCartButton
                      onClick={() => {
                        addItem({
                          id: product.id,
                          name: product.name,
                          imageUrl: product.imageUrl,
                          price: product.priceInCents,
                          priceId: product.defaultPriceId,
                          currency: "BRL"
                        });
                      }}
                    >
                      <Handbag size={32} weight="bold" />
                    </AddToCartButton>
                  </footer>
                </Product>
              );
            })}
          </SliderContainer>
        </HomeContainer>
      </>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ["data.default_price"]
  });

  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price;

    const priceFormatted = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL"
    }).format(price.unit_amount / 100);

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: priceFormatted,
      priceInCents: price.unit_amount,
      defaultPriceId: price.id
    };
  });

  return {
    props: {
      products
    },
    revalidate: 60 * 60 * 3 // 3 Hours
  };
};
