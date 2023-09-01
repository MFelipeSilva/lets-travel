import { styled } from "styled-components";

export const NavBar = styled.nav`
  display: flex;
  width: 100%;
  height: 3.5em;
  align-items: center;
  justify-content: space-evenly;
  border-bottom: 1px solid #7f7f7f;
`;

export const Logo = styled.h2`

`;

export const Links = styled.ul`
  display: flex;
  gap: 2em;
  flex-direction: row;
`;

export const Link = styled.li`
  display: flex;
  gap: 5px;
  font-size: 15px;
  cursor: pointer;
  align-items: center;

  svg {
    font-size: 15px;
  }

  &:hover {
    color: #1668e3;
  }
`;