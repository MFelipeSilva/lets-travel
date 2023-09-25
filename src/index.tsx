import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { QueryClientProvider } from "react-query";
import { CityProvider } from "./context/DestinationsContext";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import GlobalStyle from "./styles/global";

import { queryClient } from "./services/queryClient";

import { Home } from "./pages/home";
import { Bookings } from "./pages/bookings";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <CityProvider>
        <Home />
      </CityProvider>
    ),
  },
  {
    path: "/reservas",
    element: (
      <CityProvider>
        <Bookings />
      </CityProvider>
    ),
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <GlobalStyle />
    </QueryClientProvider>
  </React.StrictMode>
);

reportWebVitals();
