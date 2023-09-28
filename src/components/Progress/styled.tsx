import styled from "styled-components";
import { lighten } from "polished";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export const Container = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 10px;
  border-radius: 5px;
  background-color: ${(props) => lighten(0.2, props.theme.colors.text)};
  height: 130px;
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
  justify-content: space-between;
  font-size: 19px;
`;

export const StyledCircularProgressbar = styled(CircularProgressbar)`
  .CircularProgressbar-path {
    stroke: ${(props) => props.theme.colors.secondary};
  }
  .CircularProgressbar-trail {
    stroke: ${(props) => props.theme.colors.disabledText};
  }
  .CircularProgressbar-text {
    fill: ${(props) => props.theme.colors.secondary};
    font-size: 30px !important;
    font-weight: bold;
    font-family: ${(props) => props.theme.fonts.text};
  }
`;

export const Title = styled.p`
  margin-left: 10px;
  font-family: ${(props) => props.theme.fonts.text};
  color: ${(props) => props.theme.colors.tertiary};
  font-weight: bold;
`;

export const Text = styled.p`
  margin-left: 10px;
  font-family: ${(props) => props.theme.fonts.text};
  color: ${(props) => props.theme.colors.tertiary};
  font-weight: 200;
`;
