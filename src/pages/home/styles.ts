import { styled } from "styled-components";

import { Input, DatePicker, Button } from "antd";

export const Main = styled.main`
  display: flex;
  width: 100%;
  height: 100%;
  margin-top: 4em;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

export const Container = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

export const AntInput = styled(Input)`
  width: 70%;
  border-color: #000000;

  input::placeholder {
    color: #595959;
  }

  &::placeholder {
    color: #595959;
  }
`;

export const AntDatePicker = styled(DatePicker)`
  width: 70%;
  border-color: #000000;

  input::placeholder {
    color: #595959 !important;
  }

  svg {
    color: #000000 !important;
  }
`;

export const AntButton = styled(Button)`
  height: 100%;
  border-radius: 15px;
`;

export const Content = styled.section`
  width: 100%;
  height: 100%;
  margin-top: 4em;
  text-align: start;
`;

export const Title = styled.h1`
  font-size: 20pt;
`;
