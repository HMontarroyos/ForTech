import { lighten } from "polished";
import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 10px;
  border-radius: 5px;
  background-color: ${(props) => lighten(0.2, props.theme.colors.text)};
  height: 60px;
  width: 287px;
  cursor: pointer;
  font-family: ${(props) => props.theme.fonts.text};
  color: ${(props) => props.theme.colors.tertiary};
  font-weight: bold;

  &:hover {
    background-color: ${(props) => lighten(0.1, props.theme.colors.text)};
  }
`;

export const ContainerText = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 25px;
`;

export const Title = styled.p`
  margin-left: 10px;
  font-family: ${(props) => props.theme.fonts.text};
  color: ${(props) => props.theme.colors.tertiary};
  font-weight: bold;
  font-size: 25px;
  text-transform: uppercase;
`;

export const Text = styled.p`
  margin-left: 10px;
  font-family: ${(props) => props.theme.fonts.text};
  color: ${(props) => props.theme.colors.tertiary};
  font-size: 18px;
  font-weight: 200;
`;
