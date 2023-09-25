import axios from "axios";

export const instance = axios.create({
  method: 'GET',
  baseURL: "https://booking-com.p.rapidapi.com/",
  headers: {
    "X-RapidAPI-Key": "5199c6db80msh573809314a468dcp16c5f2jsn07d0527a3a84",
    "X-RapidAPI-Host": "booking-com.p.rapidapi.com",
  },
});
