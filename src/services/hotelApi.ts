import axios from "axios";

import { instance } from "./axios";

export const fetchHotels = async (city: number, checkIn: string, checkOut: string, guests: number) => {
  const params = {
    order_by: 'popularity',
    adults_number: guests,
    checkin_date: checkIn,
    filter_by_currency: 'AED',
    dest_id: city,
    locale: 'pt-br',
    checkout_date: checkOut,
    units: 'metric',
    room_number: '1',
    dest_type: 'city',
    include_adjacency: 'true',
    children_number: '2',
    page_number: '0',
    children_ages: '0',
    categories_filter_ids: 'class::2,class::4,free_cancellation::1'
  }
  
  try {
    const response = await instance.get("v2/hotels/search", { params });
    return response.data;
  } catch (error) {
    throw error;
  }
};
