import React, { useContext } from "react";

import locale from "antd/es/date-picker/locale/pt_BR";

import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

import { TbBuildingSkyscraper } from "react-icons/tb";

import {
  MdOutlineTravelExplore,
  MdOutlineHomeWork,
  MdOutlinePeopleAlt,
  MdCalendarToday,
  MdOutlineShareLocation,
} from "react-icons/md";

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
        <PrimaryButton
          type="primary"
          size="large"
          onClick={() => {
            {
              setDestinations((prevDestinations) => ({
                ...prevDestinations,
                confirmPersonAndRooms: [destinations.people, destinations.room],
              }));
            }
          }}
        >
          Confirmar
        </PrimaryButton>
      </FooterPopover>
    </ContainerPopover>
  );

  return (
    <AntCard
      title={
        <p>
          <small>
            <MdOutlineTravelExplore /> Todos
          </small>{" "}
          <small>
            <TbBuildingSkyscraper /> Hotel
          </small>{" "}
          <small>
            <MdOutlineHomeWork /> Casa/Apartamento
          </small>
        </p>
      }
      bordered={false}
    >
      <AntInput
        placeholder="Seu destino"
        size="large"
        onChange={(e) => {
          setDestinations((prevDestinations) => ({
            ...prevDestinations,
            searchCity: e.target.value,
          }));
        }}
        prefix={<MdOutlineShareLocation />}
      />
      <AntDatePicker
        placeholder={["Entrada", "Saída"]}
        suffixIcon={<MdCalendarToday />}
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
          placeholder="1 viajante, 1 quarto"
          value={
            destinations.confirmPersonAndRooms
              ? `${destinations.confirmPersonAndRooms[0] ?? ""} viajante${
                  destinations.confirmPersonAndRooms[0] > 1 ? "s" : ""
                }, ${destinations.confirmPersonAndRooms[1] ?? ""} quarto${
                  destinations.confirmPersonAndRooms[1] > 1 ? "s" : ""
                }`
              : ""
          }
          readOnly
          size="large"
          prefix={<MdOutlinePeopleAlt />}
        />
      </AntPopover>
      <PrimaryButton type="primary" onClick={submitDestinationsData}>
        Buscar
      </PrimaryButton>
    </AntCard>
  );
};
