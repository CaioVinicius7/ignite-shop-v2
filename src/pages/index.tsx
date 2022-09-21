import { useKeenSlider } from "keen-slider/react";
import type { NextPage } from "next";
import Image from "next/future/image";
import Head from "next/head";
import Link from "next/link";
import { Handbag } from "phosphor-react";

import shirt from "../assets/shirt.png";
import { Header } from "../components/Header";
import {
  CartButton,
  HomeContainer,
  Product,
  SliderContainer
} from "../styles/pages/home";

import "keen-slider/keen-slider.min.css";

const Home: NextPage = () => {
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
            <Link href="/product/1" prefetch={false}>
              <Product className="keen-slider__slide">
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
            </Link>

            <Link href="/product/1" prefetch={false}>
              <Product className="keen-slider__slide">
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
            </Link>

            <Link href="/product/1" prefetch={false}>
              <Product className="keen-slider__slide">
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
            </Link>

            <Link href="/product/1" prefetch={false}>
              <Product className="keen-slider__slide">
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
            </Link>
          </SliderContainer>
        </HomeContainer>
      </>
    </>
  );
};

export default Home;
