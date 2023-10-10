import { styled } from "styled-components";

import { Input, DatePicker, Button, Row, Col, Card } from "antd";

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

export const Container = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

export const Title = styled.h1`
  color: #343a3d;
  font-size: 22pt;
`;

export const Banner = styled.div`
  display: flex;
  margin-top: 4em;
  align-items: center;
`;

export const Image = styled.img`
  position: relative;
  max-width: 100%;
  max-height: 100%;
  width: 58.5vw;
  height: 35em;
  object-fit: cover;
  border-radius: 15px;

  @media (max-width: 768px) {
    width: 80vw;
  }
`;

export const TitleBanner = styled.h1`
  width: 12em;
  z-index: 1;
  padding: 1em;
  color: #FFFFFF;
  font-weight: 700;
  position: absolute;
  font-size: clamp(16pt, 3vw, 28pt);
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

export const Content = styled.div`
  display: flex;
  width: 58.5vw;
  gap: 2.5em;
  margin-top: 8em;
  text-align: start;
  flex-direction: column;

  @media (max-width: 768px) {
    width: 80vw;
  }
`;

export const ContentCards = styled.div`
  display: flex;
  gap: 2.5em;
  flex-direction: row !important;

  @media (max-width: 1900px) {
    overflow-x: scroll;

    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

export const Link = styled.a`
  text-decoration: none;
`;

export const AntCard = styled(Card)`
  min-width: 250px !important;
  cursor: pointer;
  border: 1px solid rgba(68, 68, 68, 0.2);
  box-shadow: 0 4px 8px 0 rgba(68, 68, 68, 0.2);
`;

export const AntMeta = styled(Meta)`
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

export const AntRow = styled(Row)``;

export const AntCol = styled(Col)`
  display: flex;
  gap: 2.5em;
  flex-direction: column;
`;
