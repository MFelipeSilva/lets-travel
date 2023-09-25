import { createContext, useEffect, useState } from "react";

interface DestinationsContextType {
  city: string;
  searchCity: string;
  initialDate: string;
  people: string;
  setCity: React.Dispatch<React.SetStateAction<string>>;
  setSearchCity: React.Dispatch<React.SetStateAction<string>>;
  setInitialDate: React.Dispatch<React.SetStateAction<string>>;
  setPeople: React.Dispatch<React.SetStateAction<string>>;
  submitDestinationsData(): any;
}

const initialDestinationsContext: DestinationsContextType = {
  city: "",
  searchCity: "",
  initialDate: "",
  people: "",
  setCity: () => {},
  setSearchCity: () => {},
  setInitialDate: () => {},
  setPeople: () => {},
  submitDestinationsData: () => {},
};

export const CityContext = createContext<DestinationsContextType>(
  initialDestinationsContext
);

export const CityProvider = ({ children }: any) => {
  const [searchCity, setSearchCity] = useState("");
  const [city, setCity] = useState("");
  const [initialDate, setInitialDate] = useState("");
  const [people, setPeople] = useState("");

  const [debouncedSearchCity, setDebouncedSearchCity] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearchCity(searchCity);
    }, 1000);

    return () => clearTimeout(timer);
  }, [searchCity]);

  const submitDestinationsData = () => {
    return { debouncedSearchCity, city, initialDate, people };
  };

  return (
    <CityContext.Provider
      value={{
        city,
        searchCity,
        initialDate,
        people,
        setCity,
        setSearchCity,
        setInitialDate,
        setPeople,
        submitDestinationsData,
      }}
    >
      {children}
    </CityContext.Provider>
  );
};
