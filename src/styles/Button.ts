import { Button } from "antd";

import styled from "styled-components";

interface IPrimaryButton {
  color?: string;
}

export const PrimaryButton = styled(Button)<IPrimaryButton>`
  height: 100%;
  padding: 0 30px;
  font-weight: 600;
  color: ${({ color }) => (color === "light" ? "#000000" : "#ffffff")};
  font-size: clamp(10pt, 1vw, 11pt) !important;
  border-radius: 15px !important;
  background-color: ${({ color }) =>
    color === "light" ? "#ffffff" : "#208b3a"};

  @media (max-width: 768px) {
    width: 100%;
    height: 2.88em;
  }

  &:hover {
    color: ${({ color }) =>
      color === "light" ? "#000000" : "#ffffff"} !important;
    background-color: ${({ color }) =>
      color === "light" ? "#ffffff" : "#25a244"} !important;
  }
`;

export const SecondaryButton = styled(Button)`
  display: flex;
  z-index: 1;
  align-items: center;
  justify-content: center;
  background-color: #ffffff !important;
`;

export const SecondaryButtonDisabled = styled(Button)`
  display: none;
  opacity: 0;
  visibility: hidden;
  transition: opacity 125ms ease 0s;
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
