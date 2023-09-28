import styled, { keyframes } from "styled-components";
import { HorizontalBottom } from "../../assets/images/svg";
import { lighten } from "polished";

const pulse = keyframes`
  0%, 100% {
    font-size: 45px;
  }

  50% {
    font-size: 50px;
  }

`;

export const Container = styled.div``;

export const ContainerAlert = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: ${(props) => lighten(0.2, props.theme.colors.text)};
  height: 60px;
`;
export const Title = styled.h1`
  color: ${(props) => props.theme.colors.secondary};
  font-size: 40px;
  font-family: ${(props) => props.theme.fonts.text};
`;

export const ContainerAdverts = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: ${(props) => props.theme.colors.tertiary};
  height: 150px;
  margin-bottom: 60px;

  &::after {
    content: "";
    background-image: url(${HorizontalBottom});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: left;
    position: absolute;
    width: 100%;
    bottom: -88px;
    height: 92px;
    left: 0;
  }
`;
export const TextAdvert = styled.h1`
    color: ${(props) => props.theme.colors.quartenary}
    font-size: 45px;
    font-family: ${(props) => props.theme.fonts.logo};
    animation: ${pulse} 2s infinite; 
    transition: font-size 0.3s ease-in-out;
`;

export const ContainerParts = styled.div`
  margin-top: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
