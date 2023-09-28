import * as S from "./styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <S.Container>
      <S.Header>
        <S.Navigation>
          <S.LinkRedirect to={"/"}>
            <S.ContainerLogo>
              <FontAwesomeIcon icon={faLaptopCode} />
              <S.TextLogo>ForTech</S.TextLogo>
            </S.ContainerLogo>
          </S.LinkRedirect>
        </S.Navigation>
      </S.Header>
    </S.Container>
  );
}

export default Header;
