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
    checkout_date: checkOut,
    filter_by_currency: "AED",
    locale: "pt-br",
    units: "metric",
    dest_id: city,
    dest_type: "city",
    adults_number: guests,
    room_number: room,
    checkin_date: checkIn,
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
