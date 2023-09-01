import React from "react";

import { Card } from "antd";

import { AiOutlineCompass, AiOutlineTeam } from "react-icons/ai";

import { Main, Container, AntInput, AntDatePicker, AntButton, Content, Title } from "./styles";

export const Home = () => {
  return (
    <Main>
      <Container>
        <Card
          title="Encontre seu destino"
          bordered={false}
          headStyle={{ border: "1px solid #7f7f7f" }}
          bodyStyle={{
            display: "flex",
            gap: "1em",
            width: "74em",
            height: "7em",
            border: "1px solid #7f7f7f",
          }}
        >
          <AntInput
            placeholder="Seu destino"
            size="large"
            prefix={<AiOutlineCompass fontSize={16} />}
          />
          <AntDatePicker placeholder="Datas" size="large" />
          <AntInput
            placeholder="Viajantes e quartos"
            size="large"
            prefix={<AiOutlineTeam fontSize={16} />}
          />
          <AntButton type="primary">Buscar</AntButton>
        </Card>
        <Content>
          <Title>Destinos mais buscados hoje no Brasil</Title>
        </Content>
      </Container>
    </Main>
  );
};
