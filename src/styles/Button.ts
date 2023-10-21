import { Button } from "antd";

import styled from "styled-components";

export const PrimaryButton = styled(Button)`
  height: 100%;
  padding: 0 30px;
  font-size: 11pt !important;
  font-weight: 600;
  border-radius: 15px;

  @media (max-width: 768px) {
    width: 100%;
    height: 2.88em;
  }
`;

export const SecondaryButton = styled(Button)`
  display: flex;
  z-index: 1;
  align-items: center;
  justify-content: center;
`;

export const TransparentButton = styled(Button)`
  cursor: pointer;
  border: none;
  padding: 0;
  background-color: transparent;

  & > span {
    color: #7f7f7f;
    font-weight: 600;
    text-transform: uppercase;
  }
`;
