import React from "react";
import * as S from "./styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

interface CheckboxProps {
  checked: boolean;
  onClick: () => void;
}

const Checkbox: React.FC<CheckboxProps> = ({ checked, onClick }) => {
  return (
    <S.CheckboxContainer onClick={onClick}>
      {checked && <S.CheckIcon><FontAwesomeIcon icon={faCheck} color={"#80FF00"} /></S.CheckIcon>}
    </S.CheckboxContainer>
  );
};



export default Checkbox;
