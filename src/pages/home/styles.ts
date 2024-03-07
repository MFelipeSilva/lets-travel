import { styled } from "styled-components";

import { Row, Col, Card } from "antd";

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
  width: 65vw;
  margin-top: 4em;
  align-items: center;
  justify-content: center;

  @media (max-width: 1440px) {
    width: 90vw;
  }
`;

export const ContentBanner = styled.div`
  display: flex;
  width: 50%;
  height: 30em;
  z-index: 1;
  gap: 1em;
  padding-left: 3em;
  flex-direction: column;
  justify-content: center;
  background-color: #10451d;
  border-radius: 15px 0 0 15px;

  & > button {
    width: 11em;
    height: 3.5em !important;
  }

  @media (max-width: 768px) {
    width: 70%;
  }
`;

export const TitleBanner = styled.h1`
  width: 11em;
  color: #ffffff;
  font-weight: 700;
  font-size: clamp(16pt, 4vw, 30pt);
`;

export const Image = styled.img`
  position: relative;
  max-width: 100%;
  max-height: 100%;
  width: 50%;
  height: 30em;
  object-fit: cover;
  border-radius: 0 15px 15px 0;

  @media (max-width: 768px) {
    width: 30%;
  }
`;

export const Content = styled.div`
  display: flex;
  width: 65vw;
  gap: 2.5em;
  margin-top: 5em;
  text-align: start;
  flex-direction: column;

  @media (max-width: 1440px) {
    width: 90vw;
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
  width: 65vw;

  @media (max-width: 1440px) {
    width: 90vw;
  }
`;

export const AboutBanner = styled.div`
  display: flex;
  width: 100%;
  height: 5em;
  gap: 0.5em;
  border-radius: 15px;
  background: linear-gradient(to right, #208b3a, #2dc653);
  align-items: center;
  flex-direction: row;
  justify-content: center;
`;

export const AboutIcon = styled.img`
  max-width: 100%;
  max-height: 100%;
  width: 45px;
  height: auto;
  object-fit: contain;

  @media (max-width: 900px) {
    width: 35px;
  }
`;

export const TextBanner = styled.h2`
  color: #ffffff;
  font-size: clamp(15px, 2vw, 20px);
  text-transform: uppercase;

  & > span {
    color: #000000;
  }
`;

export const AntCard = styled(Card)`
  width: 100% !important;
  height: 320px;
  cursor: pointer;
  border-radius: 15px;
  border: 1px solid rgba(68, 68, 68, 0.2);

  .ant-card-cover > img {
    border-radius: 15px 15px 0 0 !important;
  }
`;

export const AntMeta = styled(Meta)`
  div:nth-child(2) {
    color: #000000;
  }
`;

export const Img = styled.img`
  max-width: 100%;
  max-height: 100%;
  width: 250px;
  height: 356px;
  object-fit: cover;
`;

export const CardImg = styled(Img)`
  height: 230px;
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

export const AboutCard = styled.div`
  display: flex !important;
  width: 100%;
  height: 300px;
  border: none;
  padding: 10px;
  gap: 1em;
  border-radius: 15px;
  align-items: center;
  flex-direction: row !important;
  justify-content: center;
  background-color: #ffffff;
  border: 1px solid rgba(68, 68, 68, 0.2);
`;

export const AboutContent = styled.div`
  display: flex;
  width: 55%;
  gap: 1em;
  text-align: left;
  flex-direction: column;
`;

export const Icon = styled.img`
  max-width: 100%;
  max-height: 100%;
  width: 130px;
  height: 130px;
  object-fit: contain;
`;

export const AboutTitle = styled.h1`
  font-size: 15pt;
`;

export const AboutDescription = styled.p``;
