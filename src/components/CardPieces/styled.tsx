import { darken, lighten } from "polished";
import styled from "styled-components";

interface PropsCard {
  actived?: boolean;
  disabled?: boolean;
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
    props.disabled
      ? darken(0.5, props.theme.colors.tertiary)
      : props.theme.colors.tertiary};
  background-color: ${(props) => {
    if (props.actived) {
      return props.theme.colors.primary;
    } else if (props.disabled) {
      return props.theme.colors.disabledText;
    } else {
      return lighten(0.2, props.theme.colors.text);
    }
  }};
  border-radius: 5px;
  width: 150px;
  height: 150px;
  margin: 10px;
  cursor: ${(props) =>
    props.actived ? "pointer" : props.disabled ? "not-allowed" : "auto"};
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

/* export const Link = styled.a`
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
`; */
