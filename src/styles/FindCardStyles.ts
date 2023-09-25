import styled from "styled-components";

import { Button, Card, DatePicker, Input, Select } from "antd";

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

  input {
    font-weight: 500;
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

  @media (max-width: 768px) {
    width: 100%;
    display: inline-flex !important;
  }
`;

export const AntSelect = styled(Select)`
  width: 70%;
  height: 100% !important;

  & > div {
    border-color: #7f7f7f !important;
    height: 48px !important;

    & > span {
      margin: 4px 0 0 15px;
      color: #595959 !important;
      font-weight: normal;
    }
  }

  & > span {
    left: 0 !important;
    margin-left: 10px;
    color: #595959 !important;
  }

  @media (max-width: 768px) {
    width: 100%;
    display: inline-flex !important;
  }
`;

export const AntButton = styled(Button)`
  width: 20%;
  height: 100%;
  font-weight: 600;
  border-radius: 15px;

  @media (max-width: 768px) {
    width: 100%;
    height: 2.88em;
  }
`;
