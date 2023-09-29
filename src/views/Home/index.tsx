import React, { useEffect, useState } from "react";
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
import { formatCurrency } from "../../utils";
import { useSelectedItems } from "../../global/SelectedItemsContext";

const Home: React.FC = () => {
  const { selectedItems } = useSelectedItems();
  const { parts } = useComputerParts();

  const calculateTotalPrice = () => {
    let totalPrice = 0;

    if (selectedItems && parts) {
      Object.keys(selectedItems).forEach((category) => {
        const selectedItem = selectedItems[category];
        if (selectedItem) {
          totalPrice += selectedItem.price;
        }
      });
    }

    return totalPrice;
  };

  const [totalPrice, setTotalPrice] = useState(calculateTotalPrice);

  useEffect(() => {
    setTotalPrice(calculateTotalPrice());
  }, [selectedItems, parts]);

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
          <S.SelectedButtonParts onClick={() => console.log("TESTE")}>
            <FaComputer />
            <p>Ver os Componentes Selecionados</p>
          </S.SelectedButtonParts>
          <ButtonProduct />
          <Progress value={100} />
          {totalPrice > 0 && (
            <S.ContainerValueTotal>
              <S.TextValue>Valor Atual</S.TextValue>
              <S.ContainerTextValue>
                <BsCreditCard2Back />
                <div>
                  <S.Price>{formatCurrency(totalPrice)}</S.Price>
                  <S.TextInInstallments>
                    em até 6x sem juros
                  </S.TextInInstallments>
                </div>
              </S.ContainerTextValue>
            </S.ContainerValueTotal>
          )}
        </S.ContainerButtons>
      </S.ContainerGrid>
    </S.Container>
  );
};

export default Home;
