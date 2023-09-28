import React from "react";
import * as S from "./styled";
import Lottie from "react-lottie";
import { NotFoundImage } from "../../assets/images";

const NotFound: React.FC = () => {
  return (
    <S.Container>
      <S.Image src={NotFoundImage} alt={"404"} />
      <S.Description>
        Oops! Parece que a página que você procurou não existe
      </S.Description>
      <S.LinkRedirect to={"/"}>
        <S.ContainerLink>Voltar ao Início</S.ContainerLink>
      </S.LinkRedirect>
    </S.Container>
  );
};

export default NotFound;
