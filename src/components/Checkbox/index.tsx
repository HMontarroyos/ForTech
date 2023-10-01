import React from "react";
import * as S from "./styled";
import { FaCheck } from "react-icons/fa";

interface CheckboxProps {
  checked: boolean;
  onClick: () => void;
}

const Checkbox: React.FC<CheckboxProps> = ({ checked, onClick }) => {
  return (
    <S.CheckboxContainer onClick={onClick}>
      {checked && (
        <S.CheckIcon>
          <FaCheck />
        </S.CheckIcon>
      )}
    </S.CheckboxContainer>
  );
};

export default Checkbox;
