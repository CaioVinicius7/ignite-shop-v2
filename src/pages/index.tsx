import { useKeenSlider } from "keen-slider/react";
import type { NextPage } from "next";
import Image from "next/future/image";
import Head from "next/head";
import Link from "next/link";
import { Handbag } from "phosphor-react";
import { useShoppingCart } from "use-shopping-cart";

import shirt from "../assets/shirt.png";
import { Header } from "../components/Header";
import {
  AddToCartButton,
  HomeContainer,
  Product,
  SliderContainer
} from "../styles/pages/home";

import "keen-slider/keen-slider.min.css";

const Home: NextPage = () => {
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
            <Product className="keen-slider__slide">
              <Link href="/product/1" prefetch={false}>
                <Image src={shirt} width={520} height={480} alt="" />
              </Link>

              <footer>
                <div>
                  <strong> Camiseta Beyond the Limits </strong>
                  <span> R$ 49,90 </span>
                </div>

                <AddToCartButton
                  onClick={() => {
                    addItem({
                      id: "id_GBJ2Ep8246qeeT",
                      name: "Camiseta Beyond the Limits 1",
                      price: 7990,
                      price_id: "e46dbb46-8473-49ef-9994-5fcd061f9354",
                      sku: "e46dbb46-8473-49ef-9994-5fcd061f9354",
                      sku_id: "e46dbb46-8473-49ef-9994-5fcd061f9354",
                      currency: "BRL"
                    });
                  }}
                >
                  <Handbag size={32} weight="bold" />
                </AddToCartButton>
              </footer>
            </Product>

            <Product className="keen-slider__slide">
              <Link href="/product/1" prefetch={false}>
                <Image src={shirt} width={520} height={480} alt="" />
              </Link>

              <footer>
                <div>
                  <strong> Camiseta Beyond the Limits </strong>
                  <span> R$ 49,90 </span>
                </div>

                <AddToCartButton
                  onClick={() => {
                    addItem({
                      id: "id_GBJ2Ep8246q368",
                      name: "Camiseta Beyond the Limits 2",
                      price: 7990,
                      price_id: "2a49557f-ac40-4020-a709-342935068f22",
                      sku: "2a49557f-ac40-4020-a709-342935068f22",
                      sku_id: "2a49557f-ac40-4020-a709-342935068f22",
                      currency: "BRL"
                    });
                  }}
                >
                  <Handbag size={32} weight="bold" />
                </AddToCartButton>
              </footer>
            </Product>

            <Product className="keen-slider__slide">
              <Link href="/product/1" prefetch={false}>
                <Image src={shirt} width={520} height={480} alt="" />
              </Link>

              <footer>
                <div>
                  <strong> Camiseta Beyond the Limits </strong>
                  <span> R$ 49,90 </span>
                </div>

                <AddToCartButton
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
                  <Handbag size={32} weight="bold" />
                </AddToCartButton>
              </footer>
            </Product>

            <Product className="keen-slider__slide">
              <Link href="/product/1" prefetch={false}>
                <Image src={shirt} width={520} height={480} alt="" />
              </Link>

              <footer>
                <div>
                  <strong> Camiseta Beyond the Limits </strong>
                  <span> R$ 49,90 </span>
                </div>

                <AddToCartButton
                  onClick={() => {
                    addItem({
                      id: "id_GBJ2Ep8246qs7a",
                      name: "Camiseta Beyond the Limits 4",
                      price: 7990,
                      price_id: "ae2ad75d-828f-4264-9e8d-ed188351cc68",
                      sku: "ae2ad75d-828f-4264-9e8d-ed188351cc68",
                      sku_id: "ae2ad75d-828f-4264-9e8d-ed188351cc68",
                      currency: "BRL"
                    });
                  }}
                >
                  <Handbag size={32} weight="bold" />
                </AddToCartButton>
              </footer>
            </Product>
          </SliderContainer>
        </HomeContainer>
      </>
    </>
  );
};

export default Home;
