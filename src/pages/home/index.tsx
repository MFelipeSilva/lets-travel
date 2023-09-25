import React, { useState } from "react";

import App from "../../App";

import { about } from "../../data/about";
import { destinations_adverts } from "../../data/destinations-adverts";

import { FindCard } from "../../components/FindCard";

import {
  Main,
  Title,
  Img,
  CardImg,
  AntRow,
  AntCol,
  Banner,
  Image,
  Content,
  ContentCards,
  Link,
  AntCard,
  AboutCard,
  TitleBanner,
  AntMeta,
} from "./styles";

import imagem_banner from "../../assets/imagem-banner-01.png";

export const Home = () => {
  return (
    <App>
      <Main>
        <FindCard />
        <Banner>
          <TitleBanner>
            Conheça o nosso site e encontre sua viagem com os melhores
            descontos.
          </TitleBanner>
          <Image src={imagem_banner} />
        </Banner>
        <Content>
          <Title>Destinos mais buscados hoje no Brasil</Title>
          <ContentCards>
            {destinations_adverts.map((item) => (
              <Link href="/reservas">
                <AntCard cover={<CardImg src={item.img} key={item.id} />}>
                  <AntMeta title={item.title} description={item.description} />
                </AntCard>
              </Link>
            ))}
          </ContentCards>
        </Content>
        <Content>
          <Title>Sobre a Let's Travel</Title>
          <AntRow gutter={[113, 40]}>
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
