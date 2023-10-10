import Bottleneck from "bottleneck";

import { instance } from "./axios";

const limiter = new Bottleneck({
  maxConcurrent: 5,
  minTime: 500,
});

export const fetchHotels = async (
  city: number,
  checkIn: string,
  checkOut: string,
  guests: number,
  room: number
) => {
  const params = {
    order_by: "popularity",
    adults_number: guests,
    checkin_date: checkIn,
    filter_by_currency: "AED",
    dest_id: city,
    locale: "pt-br",
    checkout_date: checkOut,
    units: "metric",
    room_number: room,
    dest_type: "city",
    include_adjacency: "true",
    children_number: "2",
    page_number: "0",
    children_ages: "0",
    categories_filter_ids: "class::2,class::4,free_cancellation::1",
  };

  try {
    const response = await instance.get("v2/hotels/search", { params });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const fetchHotelDetails = async (
  city: number,
  checkIn: string,
  checkOut: string
) => {
  const params = {
    hotel_id: city,
    checkin_date: checkIn,
    checkout_date: checkOut,
    currency: "BRL",
    locale: "pt-br",
  };

  try {
    const response = await limiter.schedule(() =>
      instance.get("v2/hotels/details", { params })
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const fetchHotelDescription = async (city: number) => {
  const params = {
    locale: "pt-br",
    hotel_id: city,
  };

  try {
    const response = await limiter.schedule(() =>
      instance.get("v2/hotels/description", { params })
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
