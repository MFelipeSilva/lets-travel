import React from "react";

import { AiOutlineCompass, AiOutlineTeam } from "react-icons/ai";

import { about } from "../../data/about";
import { destinations_adverts } from "../../data/destinations-adverts";

import {
  Main,
  Container,
  AntInput,
  AntDatePicker,
  AntButton,
  Title,
  Img,
  CardImg,
  AntRow,
  AntCol,
  Banner,
  Image,
  Content,
  ContentCards,
  AntCard,
  AboutCard,
  FindCard,
  TitleBanner,
  AntMeta,
} from "./styles";

import imagem_banner from "../../assets/imagem-banner-01.png";

export const Home = () => {
  return (
    <Main>
      <Container>
        <FindCard title="Busque o seu local desejado" bordered={false}>
          <AntInput
            placeholder="Seu destino"
            size="large"
            prefix={<AiOutlineCompass fontSize={16} />}
          />
          <AntDatePicker
            placeholder={["Entrada", "Saída"]}
            suffixIcon={false}
            size="large"
          />
          <AntInput
            placeholder="Viajantes e quartos"
            size="large"
            prefix={<AiOutlineTeam fontSize={16} />}
          />
          <AntButton type="primary">Buscar</AntButton>
        </FindCard>
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
              <AntCard cover={<CardImg src={item.img} key={item.id} />}>
                <AntMeta title={item.title} description={item.description} />
              </AntCard>
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
      </Container>
    </Main>
  );
};
