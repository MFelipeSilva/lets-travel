import App from "../../App";

import { about } from "../../data/about";
import { destinations_adverts } from "../../data/destinations-adverts";

import { FindCard } from "../../components/FindCard";

import { PlacesCarousel, AboutCarousel } from "../../components/Carousel";

import { PrimaryButton } from "../../styles/Button";

import airplane from "../../assets/airplane.png";
import photo_travel from "../../assets/photo-travel.jpg";

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
  AboutTitle,
  AboutDescription,
  AboutContent,
  Icon,
  AboutBanner,
  TextBanner,
  AboutIcon,
} from "./styles";

export const Home = () => {
  return (
    <App>
      <Main>
        <FindCard redirectTo="/reservas" />
        <Banner>
          <ContentBanner>
            <TitleBanner>Viagens com os melhores descontos.</TitleBanner>
            <PrimaryButton type="primary" size="small" color="light">
              Encontre aqui
            </PrimaryButton>
          </ContentBanner>
          <Image src={photo_travel} />
        </Banner>
        <Content>
          <Title>Destinos mais buscados hoje no Brasil</Title>
          <CarouselContainer>
            <CarouselContent>
              <PlacesCarousel>
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
              </PlacesCarousel>
            </CarouselContent>
          </CarouselContainer>
        </Content>
        <Content>
          <AboutBanner>
            <AboutIcon src={airplane}></AboutIcon>
            <TextBanner>
              Conheça mais sobre o <span>nosso site</span>
            </TextBanner>
          </AboutBanner>
        </Content>
        <Content>
          <CarouselContent>
            <AboutCarousel>
              {about.map((item) => (
                <AboutCard key={item.id}>
                  <Icon src={item.icon} />
                  <AboutContent>
                    <AboutTitle>{item.title}</AboutTitle>
                    <AboutDescription>{item.description}</AboutDescription>
                  </AboutContent>
                </AboutCard>
              ))}
            </AboutCarousel>
          </CarouselContent>
        </Content>
      </Main>
    </App>
  );
};
