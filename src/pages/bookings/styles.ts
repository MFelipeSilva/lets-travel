import styled from "styled-components";

import { Card } from "antd";

export const Main = styled.div`
  display: flex;
  width: 100%;
  height: 62.5vh;
  align-items: start;
  justify-content: center;
  background-color: #f2f4f5;
`;

export const Container = styled.div`
  display: flex;
  margin-top: 4em;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

export const Content = styled.div`
  display: flex;
  width: 58.5vw;
  gap: 2.5em;
  margin-top: 5em;
  text-align: start;
  flex-direction: column;

  @media (max-width: 768px) {
    width: 80vw;
  }
`;

export const Title = styled.h1`
  color: #343a3d;
  font-size: 20pt;
`;

export const AntCard = styled(Card)`
  width: 100%;
  height: 17em;
  border-radius: 15px;
  border: 1px solid rgba(68, 68, 68, 0.2);

  & > div {
    display: flex;
    height: 100%;
    flex-direction: row;
    padding: 0 !important;
  }
`;
export const CardImage = styled.img`
  width: 100%;
  height: 100%;
  max-width: 300px;
  max-height: 100%;
  object-fit: cover;
  border-radius: 15px 0 0 15px;
`;

export const CardContent = styled.div`
  display: flex;
  width: 100%;
  margin: 2.5em 2em;
  flex-direction: row;
  justify-content: space-between;
`;

export const CardInformation = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CardTitle = styled.h2`
  font-size: 16pt;
  font-weight: 700;
`;

export const CardDistrict = styled.p`
  font-size: 11pt;
  font-weight: 500;
  margin-bottom: 1em;
  text-decoration: underline;
`;

export const CardFacilities = styled.p`
  display: flex;
  gap: 0.5em;
  font-weight: 500;
  align-items: center;
  margin-bottom: 3em;
`;

export const CardScore = styled.div`
  display: flex;
  gap: 0.5em;
  align-items: center;
`;

export const NumberScore = styled.div`
  display: flex;
  width: 3em;
  height: 2em;
  color: #ffffff;
  font-size: 10pt;
  border-radius: 7px;
  align-items: center;
  justify-content: center;
  background-color: #4096ff;
`;

export const TextScore = styled.div`
  font-weight: 600;
`;
export const ReviewScore = styled.p`
  font-weight: 600;
`;
export const EvaluationScore = styled.p`
  font-size: 9pt;
  font-weight: 500;
`;

export const CardPrices = styled.div`
  width: 20em;
  border-radius: 15px;
  background-color: #f2f4f5;
  border: 1px solid rgba(3, 4, 94, 0.2);
`;

export const TextPrice = styled.p`
  font-size: 14pt;
  color: #03045e;
  font-weight: 800;
`;
