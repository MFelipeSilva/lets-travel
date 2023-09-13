import { styled } from "styled-components";

import { Input, DatePicker, Button, Row, Col, Card } from "antd";

const { RangePicker } = DatePicker;

export const Main = styled.main`
  display: flex;
  width: 100%;
  height: 100%;
  margin-top: 4em;
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

export const FindCard = styled(Card)`
  width: 58.5vw;

  & > div:nth-child(1) {
    border: 1px solid #dfe0e4;
    border-radius: 15px 15px 0 0;
  }
  & > div:nth-child(2) {
    display: flex;
    gap: 1em;
    height: 7em;
    border: 1px solid #dfe0e4;
    border-radius: 0 0 15px 15px;

    @media (max-width: 768px) {
      height: 100%;
      flex-direction: column;
    }
  }

  @media (max-width: 768px) {
    width: 80vw;
  }
`;

export const AntInput = styled(Input)`
  width: 70%;
  border-color: #7f7f7f;

  input::placeholder {
    color: #595959;
  }

  &::placeholder {
    color: #595959;
  }

  @media (max-width: 768px) {
    width: 100%;
    display: inline-flex !important;
  }
`;

export const AntDatePicker = styled(RangePicker)`
  width: 70%;
  border-color: #7f7f7f;

  input::placeholder {
    color: #595959 !important;
  }

  svg {
    color: #000000 !important;
  }

  @media (max-width: 768px) {
    width: 100%;
    display: inline-flex !important;
  }
`;

export const AntButton = styled(Button)`
  width: 20%;
  height: 100%;
  font-weight: 600;
  border-radius: 15px;

  @media (max-width: 768px) {
    width: 100%;
  }
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
  color: #ffffff;
  font-size: 30pt;
  position: absolute;
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
  margin-top: 6em;
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

  @media (max-width: 768px) {
    overflow-x: scroll;
  }
`;

export const AntCard = styled(Card)`
  min-width: 250px !important;
  cursor: pointer;
  border: 1px solid rgba(68, 68, 68, 0.2);
  box-shadow: 0 4px 8px 0 rgba(68, 68, 68, 0.2);
`;

export const AboutCard = styled(AntCard)`
  width: 500px;
  height: 250px;
  border: none;
  cursor: text;
  background-color: #eeeeee;

  div:nth-child(2) {
    padding: 0 20px;
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
