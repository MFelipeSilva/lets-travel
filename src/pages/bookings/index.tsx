import { useContext, useEffect } from "react";
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
} from "./styles";

import axios from "axios";

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
    setDestinations((prevDestinations) => ({
      ...prevDestinations,
      hotelIds: hotelsData?.results.map((ids: any) => ids.id),
    }));
  }, [hotelsData]);

  const fetchHotelDetailsData: any = async () => {
    const requests = props.hotelIds.map((hotelId: any) =>
      fetchHotelDetails(hotelId, props.checkInDate, props.checkOutDate)
    );
    const hotelDetails = await axios.all(requests);
    return hotelDetails;
  };

  const { data: hotelDetailsData }: any = useQuery(
    ["hotelDescriptions"],
    fetchHotelDetailsData,
    {
      enabled: !!props.hotelIds && props.hotelIds.length > 0,
    }
  );

  return (
    <App>
      <Main>
        <Container>
          <FindCard />
          <Content>
            <Title>Hospedagens encontradas</Title>
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
                    <TextPrice>
                      R${" "}
                      {hotelDetailsData &&
                        hotelDetailsData[index].composite_price_breakdown
                          .gross_amount_per_night.value +
                          hotelDetailsData[index]
                            .included_taxes_and_charges_amount.value}
                    </TextPrice>
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
