import { darken, lighten } from "polished";
import styled from "styled-components";

interface PropsCard {
  state: string;
}

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  background-color: ${(props) => props.theme.colors.quartenary};
  width: calc(100% - 80px);
  border-radius: 5px;
  height: 200px;
  padding: 10px;
  justify-content: center;
  align-items: center;
`;

export const ContainerCard = styled.div<PropsCard>`
  display: flex;
  flex-direction: column;
  color: ${(props) =>
    props.state === "disabled"
      ? darken(0.5, props.theme.colors.tertiary)
      : props.theme.colors.tertiary};
  background-color: ${(props) => {
    if (props.state === "actived") {
      return lighten(0.2, props.theme.colors.text)
    } else if (props.state === "disabled") {
      return props.theme.colors.disabledText;
    } else {
      return props.theme.colors.primary; 
    }
  }};
  border-radius: 5px;
  width: 150px;
  height: 150px;
  margin: 10px;
  cursor: ${(props) =>
    props.state === "actived"
      ? "auto"
      : props.state === "disabled"
      ? "not-allowed"
      : "pointer"};
`;

export const ContainerIcon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  font-size: 4rem;
`;

export const Title = styled.h2`
  margin-top: 10px;
  font-size: 25px;
  font-family: ${(props) => props.theme.fonts.text};
`;
