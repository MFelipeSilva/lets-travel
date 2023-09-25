import React, { useContext, useEffect } from "react";

import { useQuery } from "react-query";

import App from "../../App";

import { fetchCity } from "../../services/cityApi";
import { fetchHotels } from "../../services/hotelApi";

import { FindCard } from "../../components/FindCard";

import { CityContext } from "../../context/DestinationsContext";

import imagem_hotel from "../../assets/imagem-hotel.webp";

import {
  Main,
  Content,
  Title,
  AntCard,
  Container,
  CardImage,
  CardTitle,
  CardDescription,
  CardContent,
} from "./styles";

export const Bookings = () => {
  const { city, setCity, submitDestinationsData } = useContext(CityContext);

  const props = submitDestinationsData();

  // const { data, isLoading, error } = useQuery({
  //   queryKey: ["cities"],
  //   queryFn: () => fetchCity(props.debouncedSearchCity)
  // });

  // // const { data, isLoading, error } = useQuery({
  // //   queryKey: ["hotels"],
  // //   queryFn: () => fetchHotels(-664115, "2023-09-27", "2023-09-28", 2),
  // });

  return (
    <App>
      <Main>
        <Container>
          <FindCard />
          <Content>
            <Title>Hospedagens encontradas</Title>
            <AntCard>
              <CardImage src={imagem_hotel} />
              <CardContent>
                <CardTitle>Hotel Atlantico Business Centro</CardTitle>
                <CardDescription>
                  Rio de Janeiro, Brasil. A 7,86 km do centro
                </CardDescription>
              </CardContent>
            </AntCard>
          </Content>
        </Container>
      </Main>
    </App>
  );
};
