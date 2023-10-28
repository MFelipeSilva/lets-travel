import { createContext, useEffect, useState } from "react";

interface DestinationsContextType {
  destinations: {
    searchCity: string;
    city: number;
    selectDate: [];
    checkInDate: string;
    checkOutDate: string;
    people: number;
    room: number;
    confirmPersonAndRooms: null;
    hotelIds: [];
  };
  setDestinations: React.Dispatch<
    React.SetStateAction<DebouncedSearchCityType>
  >;
  handleRangePickerChange: (dates: any, dateStrings: any) => void;
  submitDestinationsData: () => DebouncedSearchCityType;
}

interface DebouncedSearchCityType {
  searchCity: string;
  city: number;
  selectDate: [];
  checkInDate: string;
  checkOutDate: string;
  people: number;
  room: number;
  confirmPersonAndRooms: any;
  hotelIds: [];
}

const initialDestinationsContext: DestinationsContextType = {
  destinations: {
    searchCity: "",
    city: 0,
    selectDate: [],
    checkInDate: "",
    checkOutDate: "",
    people: 0,
    room: 0,
    confirmPersonAndRooms: null,
    hotelIds: [],
  },
  setDestinations: () => {},
  handleRangePickerChange: () => {},
  submitDestinationsData: () => ({
    searchCity: "",
    city: 0,
    selectDate: [],
    checkInDate: "",
    checkOutDate: "",
    people: 0,
    room: 0,
    confirmPersonAndRooms: null,
    hotelIds: [],
  }),
};

export const CityContext = createContext<DestinationsContextType>(
  initialDestinationsContext
);

const useDebounce = (value: any, delay: number) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};

export const CityProvider = ({ children }: any) => {
  const [destinations, setDestinations] = useState<DebouncedSearchCityType>({
    searchCity: "",
    city: 0,
    selectDate: [],
    checkInDate: "",
    checkOutDate: "",
    people: 1,
    room: 1,
    confirmPersonAndRooms: null,
    hotelIds: [],
  });

  const handleRangePickerChange = (dates: any, dateStrings: any) => {
    const checkInDateInfo = `${dates[0].$y}-${dates[0].$M + 1}-${dates[0].$D}`;

    const checkOutDateInfo = `${dates[1].$y}-${dates[1].$M + 1}-${dates[1].$D}`;

    setDestinations((prevDestinations) => ({
      ...prevDestinations,
      selectDate: dates,
      checkInDate: checkInDateInfo,
      checkOutDate: checkOutDateInfo,
    }));
  };

  const debouncedDestinations = useDebounce(destinations, 2000);

  const submitDestinationsData = () => {
    return debouncedDestinations;
  };

  return (
    <CityContext.Provider
      value={{
        destinations,
        setDestinations,
        handleRangePickerChange,
        submitDestinationsData,
      }}
    >
      {children}
    </CityContext.Provider>
  );
};
