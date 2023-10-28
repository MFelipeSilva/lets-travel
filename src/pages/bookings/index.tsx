import { useContext, useEffect } from "react";

import axios from "axios";

import { useQuery } from "react-query";

import { FaSwimmingPool } from "react-icons/fa";

import App from "../../App";

import { CityContext } from "../../context/DestinationsContext";

import { fetchCity, CityProps } from "../../services/cityApi";
import {
  fetchHotelDescription,
  fetchHotelDetails,
  fetchHotels,
} from "../../services/hotelApi";

import { FindCard } from "../../components/FindCard";

import {
  Main,
  Content,
  Title,
  AntCard,
  Container,
  CardImage,
  CardTitle,
  CardContent,
  CardDistrict,
  CardFacilities,
  CardScore,
  ReviewScore,
  NumberScore,
  TextScore,
  EvaluationScore,
  CardPrices,
  CardInformation,
  TextPrice,
  DiaryAndPeople,
  TaxesAndFees,
} from "./styles";

export const Bookings = () => {
  const { setDestinations, submitDestinationsData } = useContext(CityContext);

  const props = submitDestinationsData();

  const cityProps: CityProps = {
    city: props.searchCity,
  };

  const { data: cityData } = useQuery({
    queryKey: ["cities"],
    queryFn: () => fetchCity(cityProps),
    enabled: !!props.searchCity,
  });

  useEffect(() => {
    setDestinations((prevDestinations) => ({
      ...prevDestinations,
      city: cityData?.[0].dest_id,
    }));
  }, [cityData]);

  const { data: hotelsData } = useQuery({
    queryKey: ["hotels"],
    queryFn: () =>
      fetchHotels(
        props.city,
        props.checkInDate,
        props.checkOutDate,
        props.people,
        props.room
      ),
    enabled:
      !!props.city &&
      !!props.checkInDate &&
      !!props.checkOutDate &&
      !!props.people &&
      !!props.room,
  });

  useEffect(() => {
    if (hotelsData && hotelsData.results && hotelsData.results.length > 0) {
      const hotelIds = hotelsData.results.map((hotel: any) => hotel.id);
      setDestinations((prevDestinations) => ({
        ...prevDestinations,
        hotelIds: hotelIds,
      }));
    } else {
      setDestinations((prevDestinations) => ({
        ...prevDestinations,
        hotelIds: [],
      }));
    }
  }, [hotelsData]);

  const { data: hotelDetailsData } = useQuery(
    [
      "hotelDescriptions",
      props.hotelIds,
      props.checkInDate,
      props.checkOutDate,
    ],
    () => {
      if (!props.hotelIds || props.hotelIds.length === 0) {
        return [];
      }
      const requests = props.hotelIds.map((hotelId) =>
        fetchHotelDetails(hotelId, props.checkInDate, props.checkOutDate)
      );
      return axios.all(requests);
    },
    {
      enabled: !!props.hotelIds && props.hotelIds.length > 0,
    }
  );

  return (
    <App>
      <Main>
        <Container>
          <FindCard redirectTo="/reservas" />
          <Content>
            <Title>Hospedagens encontradas em ({props.searchCity})</Title>
            {hotelsData?.results.map((hotel: any, index: number) => (
              <AntCard>
                <CardImage src={hotel.photoMainUrl} />
                <CardContent>
                  <CardInformation>
                    <CardTitle key={hotel.id}>{hotel.name}</CardTitle>
                    <CardDistrict>
                      {hotelDetailsData && hotelDetailsData[index]
                        ? hotelDetailsData[index].district
                        : ""}
                    </CardDistrict>
                    <CardFacilities>
                      <FaSwimmingPool />
                      {hotelDetailsData &&
                      hotelDetailsData[index].facilities_block?.facilities[0]
                        ?.name
                        ? "Piscina"
                        : ""}
                    </CardFacilities>
                    <CardScore>
                      <NumberScore>{hotel.reviewScore}</NumberScore>
                      <TextScore>
                        <ReviewScore>{hotel.reviewScoreWord}</ReviewScore>
                        <EvaluationScore>
                          {hotel.reviewCount.toLocaleString("pt-BR", {
                            minimumFractionDigits: 0,
                          })}{" "}
                          avaliações
                        </EvaluationScore>
                      </TextScore>
                    </CardScore>
                  </CardInformation>
                  <CardPrices>
                    <DiaryAndPeople>1 diária, 2 adultos</DiaryAndPeople>
                    <TextPrice>
                      R${" "}
                      {hotelDetailsData &&
                        hotelDetailsData[index].composite_price_breakdown
                          .gross_amount_per_night.value}
                    </TextPrice>
                    <TaxesAndFees>inclui impostos e taxas</TaxesAndFees>
                  </CardPrices>
                </CardContent>
              </AntCard>
            ))}
          </Content>
        </Container>
      </Main>
    </App>
  );
};
