import styled from "styled-components";

import { Card } from "antd";

export const Main = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
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
  width: 65vw;
  gap: 2.5em;
  margin-top: 5em;
  text-align: start;
  flex-direction: column;

  @media (max-width: 1300px) {
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
  width: 100%;
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
  display: flex;
  width: 14vw;
  padding: 20px 15px;
  background-color: #f2f4f5;
  border-radius: 15px;
  border: 1px solid rgba(3, 4, 94, 0.2);
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
`;

export const DiaryAndPeople = styled.p`
  font-size: 9pt;
  font-weight: 500;
`;

export const TextPrice = styled.p`
  font-size: 15pt;
  color: #03045e;
  font-weight: 800;
`;

export const TaxesAndFees = styled.p`
  font-size: 9pt;
  font-weight: 500;
`;
