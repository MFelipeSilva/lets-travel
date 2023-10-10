import axios from "axios";

export const instance = axios.create({
  method: 'GET',
  baseURL: "https://booking-com.p.rapidapi.com/",
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
    "X-RapidAPI-Host": "booking-com.p.rapidapi.com",
  },
});