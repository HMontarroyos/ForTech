import { lighten } from "polished";
import styled from "styled-components";

export const Container = styled.div`
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  margin-bottom: 30px;
`;

export const Link = styled.a`
  text-decoration: none;
  cursor: pointer;
  color: ${(props) => props.theme.colors.text};
  font-size: 26px;
  font-family: ${(props) => props.theme.fonts.title};
  font-weight: 300;
  transition: color 0.3s;

  &:hover {
    color: ${(props) => lighten(0.2, props.theme.colors.text)};
  }
`;
