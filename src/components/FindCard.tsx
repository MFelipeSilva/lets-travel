import React, { useContext } from "react";

import locale from "antd/es/date-picker/locale/pt_BR";

import {
  AiOutlineCompass,
  AiOutlineTeam,
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineCalendar,
} from "react-icons/ai";

import {
  PrimaryButton,
  SecondaryButton,
  TransparentButton,
} from "../styles/Button";

import {
  AntCard,
  AntDatePicker,
  AntInput,
  AntInputNumber,
  AntPopover,
  ContainerPopover,
  ContentPopover,
  CounterPopover,
  FooterPopover,
  TextPopover,
  overlayStyle,
} from "../styles/FindCardStyles";

import { CityContext } from "../context/DestinationsContext";

export const FindCard = () => {
  const {
    destinations,
    setDestinations,
    handleRangePickerChange,
    submitDestinationsData,
  } = useContext(CityContext);

  const content = (
    <ContainerPopover>
      <ContentPopover>
        <TextPopover>
          Adultos
          <CounterPopover>
            <SecondaryButton
              size="middle"
              shape="circle"
              onClick={() => {
                {
                  setDestinations((prevDestinations) => ({
                    ...prevDestinations,
                    people:
                      destinations.people > 1 ? destinations.people - 1 : 1,
                  }));
                }
              }}
            >
              <AiOutlineMinus />
            </SecondaryButton>
            <AntInputNumber
              min={1}
              max={14}
              defaultValue={destinations.people}
              readOnly
              bordered={false}
              value={destinations.people}
            />
            <SecondaryButton
              size="middle"
              shape="circle"
              onClick={() => {
                {
                  setDestinations((prevDestinations) => ({
                    ...prevDestinations,
                    people:
                      destinations.people < 14 ? destinations.people + 1 : 14,
                  }));
                }
              }}
            >
              <AiOutlinePlus />
            </SecondaryButton>
          </CounterPopover>
        </TextPopover>
        <TextPopover>
          Quartos
          <CounterPopover>
            <SecondaryButton
              size="middle"
              shape="circle"
              onClick={() => {
                {
                  setDestinations((prevDestinations) => ({
                    ...prevDestinations,
                    room: destinations.room > 1 ? destinations.room - 1 : 1,
                  }));
                }
              }}
            >
              <AiOutlineMinus />
            </SecondaryButton>
            <AntInputNumber
              min={1}
              max={6}
              defaultValue={destinations.room}
              readOnly
              bordered={false}
              value={destinations.room}
            />
            <SecondaryButton
              size="middle"
              shape="circle"
              onClick={() => {
                {
                  setDestinations((prevDestinations) => ({
                    ...prevDestinations,
                    room: destinations.room < 6 ? destinations.room + 1 : 6,
                  }));
                }
              }}
            >
              <AiOutlinePlus />
            </SecondaryButton>
          </CounterPopover>
        </TextPopover>
      </ContentPopover>
      <FooterPopover>
        <TransparentButton
          type="link"
          onClick={() => {
            {
              setDestinations((prevDestinations) => ({
                ...prevDestinations,
                people: 1,
                room: 1,
              }));
            }
          }}
        >
          Redefinir
        </TransparentButton>
        <PrimaryButton type="primary" size="large">
          Confirmar
        </PrimaryButton>
      </FooterPopover>
    </ContainerPopover>
  );

  return (
    <AntCard title="Busque o seu local desejado" bordered={false}>
      <AntInput
        placeholder="Seu destino"
        size="large"
        onChange={(e) => {
          setDestinations((prevDestinations) => ({
            ...prevDestinations,
            searchCity: e.target.value,
          }));
        }}
        prefix={<AiOutlineCompass />}
      />
      <AntDatePicker
        placeholder={["Entrada", "Saída"]}
        suffixIcon={<AiOutlineCalendar />}
        locale={locale}
        format="DD/MM/YY"
        onChange={handleRangePickerChange}
        size="large"
      />
      <AntPopover
        content={content}
        placement="bottom"
        trigger="click"
        overlayStyle={overlayStyle}
      >
        <AntInput
          placeholder={`${destinations.people} viajante${
            destinations.people > 1 ? "s" : ""
          }, ${destinations.room} quarto${destinations.room > 1 ? "s" : ""}`}
          readOnly
          size="large"
          prefix={<AiOutlineTeam />}
        />
      </AntPopover>
      <PrimaryButton type="primary" onClick={submitDestinationsData}>
        Buscar
      </PrimaryButton>
    </AntCard>
  );
};
