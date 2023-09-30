import { darken, lighten } from "polished";
import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;

export const Container = styled.div`
  width: calc(100% - 400px);
  height: 600px;
  background-color: ${(props) => lighten(0.2, props.theme.colors.quartenary)};
  padding: 20px;
  border-radius: 8px;
  position: relative;
`;

export const Title = styled.h1`
  padding: 20px;
  color: ${(props) => props.theme.colors.tertiary};
  font-family: ${(props) => props.theme.fonts.text};
  font-size: 25px;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 45px;
  color: ${(props) => lighten(0.1, props.theme.colors.alert)};

  &:hover {
    color: ${(props) => darken(0.1, props.theme.colors.alert)};
  }
`;

export const ContainerColumn = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  margin-top: 40px;
`;

export const ContainerImage = styled.div`
  display: flex;
  align-items: center;
  font-size: 50px;
  color: ${(props) => props.theme.colors.tertiary};
`;

export const Image = styled.img`
  width: 50px;
  height: 50px;
  margin-left: 40px;
`;

export const Description = styled.p`
  margin-left: 12px;
  font-size: 18px;
  font-family: ${(props) => props.theme.fonts.text};
  color: ${(props) => props.theme.colors.tertiary};
`;

export const Price = styled.p`
  font-weight: bold;
  font-size: 18px;
  font-family: ${(props) => props.theme.fonts.text};
  color: ${(props) => darken(0.1, props.theme.colors.primary)};
`;

export const ContainerPiece = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
`;

export const Divisor = styled.div`
  border-top-style: solid;
  border-top-width: 3px;
  border-top-color: ${(props) => darken(0.1, props.theme.colors.primary)};
`;

export const ContainerValue = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
