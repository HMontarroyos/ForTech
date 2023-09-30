import { TbPlayerTrackNextFilled } from "react-icons/tb";
import * as S from "./styled";
import { MdNotInterested } from "react-icons/md";
import {BsFillCartCheckFill} from "react-icons/bs"

interface ButtonProductProps {
  disabled: boolean;
  onClick: () => void;
  isLastCategory: boolean;
  modalText: string;
}

function ButtonProduct({ disabled, onClick, isLastCategory, modalText }: ButtonProductProps) {
  return (
    <S.Container disabled={disabled} onClick={onClick}>
      <S.ContainerText>
      {disabled ? <MdNotInterested /> : (isLastCategory ? <BsFillCartCheckFill /> : <TbPlayerTrackNextFilled />)}
        <div>
          <S.Title>{disabled ? "Selecione" : (isLastCategory ? "Finalizar" : "Próxima")}</S.Title>
          <S.Text>{disabled ? "um produto na lista" : (isLastCategory ? modalText : "etapa")}</S.Text>
        </div>
      </S.ContainerText>
    </S.Container>
  );
}

export default ButtonProduct;
