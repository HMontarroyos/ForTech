import * as S from "./styled";
import { FaLaptopCode } from "react-icons/fa";

function Header() {
  return (
    <S.Container>
      <S.Header>
        <S.Navigation>
          <S.LinkRedirect to={"/"}>
            <S.ContainerLogo>
              <FaLaptopCode/>
              <S.TextLogo>ForTech</S.TextLogo>
            </S.ContainerLogo>
          </S.LinkRedirect>
        </S.Navigation>
      </S.Header>
    </S.Container>
  );
}

export default Header;
