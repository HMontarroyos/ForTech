import * as S from "./styled";
import { MdNotInterested } from "react-icons/md";

function ButtonProduct() {
  return (
    <S.Container>
      <S.ContainerText>
        <MdNotInterested />
        <div>
          <S.Title>Selecione</S.Title>
          <S.Text>Um produto na lista</S.Text>
        </div>
      </S.ContainerText>
    </S.Container>
  );
}

export default ButtonProduct;
