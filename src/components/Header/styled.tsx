import styled from "styled-components";
import { Link } from "react-router-dom";
import { darken } from "polished";

export const Container = styled.div`
  z-index: 9999;
  width: 100%;
  top: 0;
`;

export const Header = styled.header`
  background-color: ${(props) => props.theme.colors.text};
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0.5rem 1rem;
  height: 80px;
`;

export const ContainerLogo = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 40px;
  color: ${(props) => props.theme.colors.tertiary};
  font-family: ${(props) => props.theme.fonts.logo};
  transition: color 0.3s;

  &:hover {
    color: ${(props) => darken(0.2, props.theme.colors.tertiary)};
  }
`;

export const TextLogo = styled.h1`
  margin-left: 10px;
`;

export const LinkRedirect = styled(Link)`
  text-decoration: none;
`;

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  font-family: ${(props) => props.theme.fonts.title};
`;
