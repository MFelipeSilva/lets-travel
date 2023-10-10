import { instance } from "./axios";

export interface CityProps {
  city: string;
}

export const fetchCity = async ({ city }: CityProps) => {
  const params = {
    name: city,
    locale: "pt-br",
  };

  try {
    const response = await instance.get("v1/hotels/locations", { params });
    return response.data;
  } catch (error) {
    throw error;
  }
};
