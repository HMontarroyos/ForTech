import styled from "styled-components";

export const CheckboxContainer = styled.div`
  width: 24px;
  height: 24px;
  border-width: 3px;
  border-style: solid;
  border-radius: 4px;
  border-color: ${(props) => props.theme.colors.tertiary};
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CheckIcon = styled.p`
  font-size: 18px;
  color: ${(props) => props.theme.colors.secondary};
`;
