import styled from "styled-components";

import { Card, DatePicker, Input, InputNumber, Popover } from "antd";

const { RangePicker } = DatePicker;

export const AntCard = styled(Card)`
  width: 58.5vw;
  border-radius: 15px;

  & > div:nth-child(1) {
    border: 1px solid #dfe0e4;
    border-radius: 15px 15px 0 0;
  }
  & > div:nth-child(2) {
    display: flex;
    gap: 1em;
    height: 7em;
    border: 1px solid #dfe0e4;
    border-radius: 0 0 15px 15px;

    @media (max-width: 768px) {
      height: 100%;
      flex-direction: column;
    }
  }

  @media (max-width: 768px) {
    width: 80vw;
  }
`;

export const AntInput = styled(Input)`
  width: 70%;
  border-color: #7f7f7f;

  span {
    font-size: 19px;
  }

  input {
    font-weight: 500;
    margin-left: 4px;
    font-size: 16px !important;
  }

  input::placeholder {
    color: #595959;
    font-weight: normal;
  }

  @media (max-width: 768px) {
    width: 100%;
    display: inline-flex !important;
  }
`;

export const AntDatePicker = styled(RangePicker)`
  width: 70%;
  border-color: #7f7f7f;

  div:nth-child(1) {
    margin-left: 30px;
  }

  div:nth-child(2) {
    margin-right: 30px;
  }

  input {
    font-weight: 500;
  }

  input::placeholder {
    color: #595959 !important;
    font-weight: normal;
  }

  svg {
    color: #000000 !important;
  }

  & > span {
    position: absolute;
    font-size: 19px;
    left: 0;
    margin-left: 10px !important;
  }

  @media (max-width: 768px) {
    width: 100%;
    display: inline-flex !important;
  }
`;

export const AntPopover = styled(Popover)``;

export const overlayStyle = {
  background: "#23232fff",
  width: "300px",
  borderRadius: "15px",
};

export const ContainerPopover = styled.div`
  display: flex;
  height: 200px;
  padding: 20px 20px 10px 20px;
  flex-direction: column;
  justify-content: space-between;
`;

export const ContentPopover = styled.div`
  display: flex;
  gap: 2em;
  flex-direction: column;
`;

export const TextPopover = styled.p`
  display: flex;
  font-size: 14px;
  font-weight: 600;
  align-items: center;
  justify-content: space-between;
`;

export const CounterPopover = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

export const AntInputNumber = styled(InputNumber)`
  width: 3em;

  div:nth-child(2) > input {
    text-align: center;
    font-size: 11pt;
  }
`;

export const FooterPopover = styled.div`
  display: flex;
  padding-top: 15px;
  border-top: 1px solid rgba(0, 0, 0, 0.15);
  align-items: center;
  justify-content: space-between;
`;
