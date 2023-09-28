import React from "react";
import * as S from "./styled";
import {
  ButtonProduct,
  CardPieces,
  GridPieces,
  Progress,
} from "../../components";
import { FaComputer } from "react-icons/fa6";
import { BsCreditCard2Back } from "react-icons/bs";
import { useComputerParts } from "../../global/ComputerPartsContext";

const Home: React.FC = () => {

  return (
    <S.Container>
      <S.ContainerAlert>
        <S.Title>
          Escolha cada peça e monte agora mesmo o seu computador dos sonhos!
        </S.Title>
      </S.ContainerAlert>
      <S.ContainerAdverts>
        <S.TextAdvert>Monte Seu Computador</S.TextAdvert>
      </S.ContainerAdverts>
      <S.ContainerParts>
        <CardPieces />
      </S.ContainerParts>
      <S.ContainerGrid>
        <GridPieces />
        <S.ContainerButtons>
          <S.SelectedButtonParts>
            <FaComputer />
            <p>Ver os Componentes Selecionados</p>
          </S.SelectedButtonParts>
          <ButtonProduct />
          <Progress value={100} />
          <S.ContainerValueTotal>
            <S.TextValue>Valor Atual</S.TextValue>
            <S.ContainerTextValue>
              <BsCreditCard2Back />
              <div>
                <S.Price>R$ 352,00</S.Price>
                <S.TextInInstallments>em até 6x sem juros</S.TextInInstallments>
              </div>
            </S.ContainerTextValue>
          </S.ContainerValueTotal>
        </S.ContainerButtons>
      </S.ContainerGrid>
    </S.Container>
  );
};

export default Home;
