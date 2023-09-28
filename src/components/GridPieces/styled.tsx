import { lighten } from "polished";
import styled from "styled-components";

interface PropsCard {
  actived?: boolean;
  disabled?: boolean;
}

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  background-color: ${(props) => props.theme.colors.quartenary};
  width: calc(50% - 80px);
  border-radius: 5px;
  padding: 10px;
  align-items: center;
  margin-left: 30px;
`;

export const ContainerCard = styled.div<PropsCard>`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => lighten(0.2, props.theme.colors.text)};
  border-radius: 5px;
  width: 150px;
  margin: 10px;
  cursor: pointer;
  padding: 20px;

  &:hover {
    background-color: ${(props) => lighten(0.1, props.theme.colors.text)};
  }
`;

export const ContainerImage = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.img`
  width: 130px;
  height: 130px;
`;

export const ContainerText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const Title = styled.p`
  margin-top: 10px;
  font-size: 16px;
  font-family: ${(props) => props.theme.fonts.text};
  color: ${(props) => props.theme.colors.tertiary};
`;

export const Price = styled.h1`
  margin-top: 30px;
  font-size: 25px;
  font-family: ${(props) => props.theme.fonts.text};
  color: ${(props) => props.theme.colors.secondary};
`;
