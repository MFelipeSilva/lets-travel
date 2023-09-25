import styled from "styled-components";

import { Card } from "antd";

export const Main = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
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
  max-width: 100%;
  max-height: 100%;
  width: 300px;
  object-fit: cover;
  border-radius: 15px 0 0 15px;
`;

export const CardContent = styled.div`
  display: flex;
  margin: 3em 0 0 2em;
  flex-direction: column;
`;

export const CardTitle = styled.h2``;

export const CardDescription = styled.p``;
