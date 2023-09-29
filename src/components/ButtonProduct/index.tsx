import { FaCheck } from "react-icons/fa";
import * as S from "./styled";
import { MdNotInterested } from "react-icons/md";

interface ButtonProductProps {
  disabled: boolean;
  onClick: () => void;
}

function ButtonProduct({ disabled, onClick }: ButtonProductProps) {
  return (
    <S.Container disabled={disabled} onClick={onClick}>
      <S.ContainerText>
        {disabled ? <MdNotInterested /> : <FaCheck />}
        <div>
          <S.Title>Selecione</S.Title>
          <S.Text>Um produto na lista</S.Text>
        </div>
      </S.ContainerText>
    </S.Container>
  );
}

export default ButtonProduct;
