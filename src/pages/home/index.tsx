import React, { useRef } from "react";

import App from "../../App";

import { about } from "../../data/about";
import { destinations_adverts } from "../../data/destinations-adverts";

import { FindCard } from "../../components/FindCard";

import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

import {
  Main,
  Title,
  CardImg,
  AntRow,
  AntCol,
  Banner,
  Image,
  Content,
  Link,
  AntCard,
  AboutCard,
  TitleBanner,
  AntMeta,
  CarouselContent,
  CardCarousel,
  ButtonContent,
  CarouselContainer,
  ContentBanner,
} from "./styles";

import { PrimaryButton, SecondaryButton } from "../../styles/Button";

export const Home = () => {
  const carouselRef = useRef<any>(null);

  const next = () => {
    carouselRef.current.next();
  };

  const prev = () => {
    carouselRef.current.prev();
  };

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    arrows: true,
  };

  return (
    <App>
      <Main>
        <FindCard />
        <Banner>
          <ContentBanner>
            <TitleBanner>
              Conheça o nosso site e encontre sua viagem com os melhores
              descontos.
            </TitleBanner>
            <PrimaryButton type="primary" size="large">
              Encontre aqui
            </PrimaryButton>
          </ContentBanner>
          <Image src="https://i.postimg.cc/YCCd83V3/e6612f48-65c9-4b37-b875-fa2eeb3d2f97.jpg" />
        </Banner>
        <Content>
          <Title>Destinos mais buscados hoje no Brasil</Title>
          <CarouselContainer>
            <CarouselContent>
              <CardCarousel ref={carouselRef} {...settings}>
                {destinations_adverts.map((item) => (
                  <Link href="/reservas">
                    <AntCard cover={<CardImg src={item.img} key={item.id} />}>
                      <AntMeta
                        title={item.title}
                        description={item.description}
                      />
                    </AntCard>
                  </Link>
                ))}
              </CardCarousel>
            </CarouselContent>
            <ButtonContent>
              <SecondaryButton
                onClick={prev}
                shape="circle"
                icon={<AiOutlineLeft fontSize="16pt" />}
              />
              <SecondaryButton
                onClick={next}
                shape="circle"
                size="large"
                icon={<AiOutlineRight fontSize="16pt" />}
              />
            </ButtonContent>
          </CarouselContainer>
        </Content>
        <Content>
          <Title>Sobre a Let's Travel</Title>
          <AntRow gutter={[245, 40]}>
            {about.map((item) => (
              <AntCol xxl={12} xs={24} key={item.id}>
                <AboutCard title={item.title}>{item.description}</AboutCard>
              </AntCol>
            ))}
          </AntRow>
        </Content>
      </Main>
    </App>
  );
};
