import App from "../../App";

import { about } from "../../data/about";
import { destinations_adverts } from "../../data/destinations-adverts";

import { FindCard } from "../../components/FindCard";

import { Carousel } from "../../components/Carousel";

import { PrimaryButton } from "../../styles/Button";

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
  CarouselContainer,
  ContentBanner,
} from "./styles";

export const Home = () => {
  return (
    <App>
      <Main>
        <FindCard redirectTo="/reservas" />
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
              <Carousel>
                {destinations_adverts.map((item) => (
                  <Link key={item.id}>
                    <AntCard cover={<CardImg src={item.img} key={item.id} />}>
                      <AntMeta
                        title={item.title}
                        description={item.description}
                      />
                    </AntCard>
                  </Link>
                ))}
              </Carousel>
            </CarouselContent>
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
