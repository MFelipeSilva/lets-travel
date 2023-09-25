import React, { useContext } from "react";

import locale from "antd/es/date-picker/locale/pt_BR";

import { AiOutlineCompass, AiOutlineTeam } from "react-icons/ai";

import {
  AntButton,
  AntCard,
  AntDatePicker,
  AntInput,
  AntSelect,
} from "../styles/FindCardStyles";

import { CityContext } from "../context/DestinationsContext";

export const FindCard = () => {
  const dateFormatList = ["DD/MM/YY", "DD/MM/YY", "DD-MM-YY", "DD-MM-YY"];

  const {
    setCity,
    setSearchCity,
    setInitialDate,
    setPeople,
    submitDestinationsData,
  } = useContext(CityContext);

  const handleRangePickerChange = (dates: any) => {
    return setInitialDate(dates);
  };

  return (
    <AntCard title="Busque o seu local desejado" bordered={false}>
      <AntInput
        placeholder="Seu destino"
        size="large"
        onChange={(e) => {
          setCity("");
          setSearchCity(e.target.value);
        }}
        prefix={<AiOutlineCompass fontSize={16} />}
      />
      <AntDatePicker
        placeholder={["Entrada", "Saída"]}
        suffixIcon={false}
        locale={locale}
        format={dateFormatList}
        onChange={handleRangePickerChange}
        size="large"
      />
      <AntSelect
        placeholder="1 viajante, 1 quarto"
        size="large"
        suffixIcon={<AiOutlineTeam fontSize={16} />}
      />
      <AntButton type="primary" onClick={submitDestinationsData}>
        Buscar
      </AntButton>
    </AntCard>
  );
};
