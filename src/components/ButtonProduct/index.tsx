import { TbPlayerTrackNextFilled } from "react-icons/tb";
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
        {disabled ? <MdNotInterested /> : <TbPlayerTrackNextFilled/>}
        <div>
          <S.Title>{disabled ? "Selecione" : "Próxima"}</S.Title>
          <S.Text>{disabled ? "um produto na lista" : "etapa"}</S.Text>
        </div>
      </S.ContainerText>
    </S.Container>
  );
}

export default ButtonProduct;
