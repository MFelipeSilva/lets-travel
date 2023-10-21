import { styled } from "styled-components";

import { Row, Col, Card, Carousel } from "antd";

const { Meta } = Card;

export const Main = styled.main`
  display: flex;
  width: 100%;
  height: 100%;
  margin-top: 4em;
  margin-bottom: 7em;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

export const Banner = styled.div`
  display: flex;
  margin-top: 4em;
  align-items: center;
`;

export const ContentBanner = styled.div`
  display: flex;
  width: 15em;
  z-index: 1;
  gap: 2em;
  padding-left: 3em;
  position: absolute;
  flex-direction: column;
`;

export const TitleBanner = styled.h1`
  width: 13em;
  color: #ffffff;
  font-weight: 700;
  font-size: clamp(16pt, 3vw, 26pt);
`;

export const Image = styled.img`
  position: relative;
  max-width: 100%;
  max-height: 100%;
  width: 65vw;
  height: 40em;
  object-fit: cover;
  border-radius: 15px;

  @media (max-width: 768px) {
    width: 80vw;
  }
`;

export const Content = styled.div`
  display: flex;
  width: 65vw;
  gap: 2.5em;
  margin-top: 8em;
  text-align: start;
  flex-direction: column;

  @media (max-width: 768px) {
    width: 80vw;
  }
`;

export const Title = styled.h1`
  color: #343a3d;
  font-size: 22pt;
`;

export const CarouselContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CarouselContent = styled.div`
  z-index: 1;
  width: 65vw;
  height: 25em !important;
`;

export const CardCarousel = styled(Carousel)`
  & > div > div {
    display: flex !important;
    margin-left: 32em;
    gap: 3em !important;
  }

  .slick-slide > div {
    min-height: 38em;
  }

  @media (min-width: 1200px) {
    .slick-slide {
      width: 5.5% !important;
    }
  }

  @media (max-width: 1199px) and (min-width: 992px) {
    .slick-slide {
      width: 3.5% !important;
    }
  }

  @media (max-width: 991px) and (min-width: 768px) {
    .slick-slide {
      width: 50% !important;
    }
  }

  @media (max-width: 767px) {
    .slick-slide {
      width: 100% !important;
    }
  }
`;

export const AntCard = styled(Card)`
  min-width: 300px !important;
  height: 400px;
  cursor: pointer;
  border: 1px solid rgba(68, 68, 68, 0.2);
  box-shadow: 0 4px 8px 0 rgba(68, 68, 68, 0.2);
`;

export const AntMeta = styled(Meta)``;

export const ButtonContent = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: space-between;

  button:nth-child(1) {
    opacity: 0;
  }
`;

export const Img = styled.img`
  max-width: 100%;
  max-height: 100%;
  width: 250px;
  height: 356px;
  object-fit: cover;
  border-radius: 10px;
`;

export const CardImg = styled(Img)`
  height: 250px;
`;

export const Link = styled.a`
  text-decoration: none;
`;

export const AntRow = styled(Row)``;

export const AntCol = styled(Col)`
  display: flex;
  gap: 2.5em;
  flex-direction: column;
`;

export const AboutCard = styled(AntCard)`
  width: 500px;
  height: 100%;
  border: none;
  cursor: text;
  background-color: #eeeeee;

  div:nth-child(2) {
    padding: 0 20px 20px 20px;
  }

  @media (max-width: 1400px) {
    width: 100%;
  }
`;
