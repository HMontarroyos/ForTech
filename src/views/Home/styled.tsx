import styled, { keyframes } from "styled-components";
import { HorizontalBottom } from "../../assets/images/svg";
import { darken, lighten } from "polished";

interface ButtonProps {
  resetConfig?: boolean;
}

const pulse = keyframes`
  0%, 100% {
    font-size: 45px; 
  }

  50% {
    font-size: 50px; 
  }

  @media (max-width: 370px) {
    0%, 100% {
      font-size: 20px; 
    }

    50% {
      font-size: 30px; 
    }
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
  height: 80px;
`;
export const Title = styled.h1`
  color: ${(props) => props.theme.colors.secondary};
  font-size: 40px;
  font-family: ${(props) => props.theme.fonts.text};

  @media (max-width: 1045px) {
    font-size: 30px;
  }

  @media (max-width: 790px) {
    font-size: 20px;
  }

  @media (max-width: 315px) {
    font-size: 18px;
  }
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
    color: ${(props) => props.theme.colors.quartenary};
    font-family: ${(props) => props.theme.fonts.logo};
   /*  animation: ${pulse} 2s infinite;  */
    transition: font-size 0.3s ease-in-out;
`;

export const ContainerParts = styled.div`
  margin-top: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const ContainerGrid = styled.div`
  margin-top: 20px;
  margin-bottom: 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: 637px) {
    flex-direction: column-reverse;
    margin-left: 30px;
  }
`;

export const ContainerButtons = styled.div``;

export const Button = styled.button<ButtonProps>`
  font-size: ${(props) => (props.resetConfig ? "20px" : "18px")};
  font-family: ${(props) => props.theme.fonts.text};
  color: ${(props) => props.theme.colors.tertiary};
  font-weight: bold;
  display: flex;
  flex-direction: row;
  background-color: ${(props) =>
    lighten(
      props.resetConfig ? 0.2 : 0.2,
      props.theme.colors[props.resetConfig ? "alert" : "text"]
    )};
  height: ${(props) => (props.resetConfig ? "80px" : "30px")};
  width: 287px;
  border-radius: 5px;
  align-items: center;
  margin-top: ${(props) => (props.resetConfig ? "10px" : "0")};
  margin-bottom: ${(props) => (props.resetConfig ? "10px" : "0")};
  margin-right: 30px;
  cursor: pointer;
  padding: 20px;

  &:hover {
    background-color: ${(props) =>
      lighten(0.1, props.theme.colors[props.resetConfig ? "alert" : "text"])};
  }

  &:disabled {
    background-color: ${(props) => props.theme.colors.disabledText};
    color: ${(props) => props.theme.colors.tertiary};
    cursor: not-allowed;
  }

  p {
    margin-left: 10px;
  }
`;

export const ContainerValueTotal = styled.div`
  margin-top: 10px;
  margin-right: 30px;
  display: flex;
  flex-direction: column;
  color: ${(props) => props.theme.colors.tertiary};
  background-color: ${(props) => lighten(0.2, props.theme.colors.text)};
  width: 265px;
  border-radius: 5px;
  height: 100px;
  padding: 10px;
  justify-content: center;
  align-items: center;
`;

export const ContainerTextValue = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: initial;
  align-items: center;
  text-align: center;
  color: ${(props) => props.theme.colors.tertiary};
  font-size: 25px;

  div {
    margin-left: 10px;
  }
`;

export const TextValue = styled.p`
  color: ${(props) => props.theme.colors.tertiary};
  font-size: 30px;
  font-family: ${(props) => props.theme.fonts.text};
  font-weight: bold;
  margin-bottom: 10px;
`;

export const TextInInstallments = styled.p`
  font-size: 12px;
  font-family: ${(props) => props.theme.fonts.subtitle};
  color: ${(props) => props.theme.colors.tertiary};
`;

export const Price = styled.h1`
  font-size: 20px;
  font-family: ${(props) => props.theme.fonts.text};
  color: ${(props) => props.theme.colors.secondary};
`;
