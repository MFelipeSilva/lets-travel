import { styled } from "styled-components";

export const Container = styled.footer`
  display: flex;
  width: 100vw;
  height: 100%;
  padding: 7em 0;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: #f2f4f5;
`;

export const ContentCol = styled.div`
  display: flex;
  gap: 3em;
  flex-direction: column;

  @media (max-width: 1000px) {
    width: 80vw;
  }
`;

export const ContentRow = styled.div`
  display: flex;
  width: 65vw;
  gap: clamp(5vw, 12vw, 12vw);
  flex-wrap: wrap;
  align-items: start;
  justify-content: start;
`;

export const Section = styled.div`
  display: flex;
  gap: 1em;
  flex-direction: column;
  justify-content: center;
`;

export const Logo = styled.h2`
  font-size: 19pt;
  font-weight: 800;
`;

export const Title = styled.h4`
  font-size: 13pt;
  color: #343a3d;
`;

export const Ul = styled.ul`
  display: flex;
  gap: 0.6em;
  list-style: none;
  flex-direction: column;
`;

export const Li = styled.li`
  text-align: start;
`;

export const Link = styled.a`
  cursor: pointer;
  font-size: 10pt;
  font-weight: 400;

  &:hover {
    text-decoration: underline;
  }
`;

export const Terms = styled.p`
  display: flex;
  flex-wrap: wrap;
  margin-top: 2em;
  padding-top: 3em;
  font-size: clamp(9pt, 1vw, 10pt);
  align-items: center;
  justify-content: center;
  border-top: 1px solid #dfe0e9;

  a {
    display: inline-block;
    text-decoration: underline;
    font-size: clamp(9pt, 1vw, 10pt);
  }
`;
