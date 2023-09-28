import styled from "styled-components";
import { Link } from "react-router-dom";
import { lighten } from "polished";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100vh;
  padding: 20px;
`;

export const Image = styled.img`
  width: 300px;
  height: 300px;
`;

export const Description = styled.p`
  font-family: ${(props) => props.theme.fonts.text};
  font-weight: 700;
  color: ${(props) => props.theme.colors.text};
  font-size: 30px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const ContainerLink = styled.div`
  border-radius: 5px;
  border: 4px solid ${(props) => props.theme.colors.text};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 40px;
  padding: 5px;
  text-align: center;
  transition: color 0.3s;

  &:hover {
    border-color: ${(props) => lighten(0.1, props.theme.colors.text)};
  }
`;

export const LinkRedirect = styled(Link)`
  font-family: ${(props) => props.theme.fonts.text};
  font-size: 22px;
  text-decoration: none;
  cursor: pointer;
  color: ${(props) => props.theme.colors.text};
  transition: color 0.3s;

  &:hover {
    color: ${(props) => lighten(0.1, props.theme.colors.text)};
  }
`;
