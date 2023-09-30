import React, { useEffect, useState } from "react";
import * as S from "./styled";
import "../../styles/sweetalert-custom.css";
import {
  ButtonProduct,
  CardPieces,
  GridPieces,
  Progress,
  ModalPieces,
} from "../../components";
import { FaComputer } from "react-icons/fa6";
import { BsCreditCard2Back } from "react-icons/bs";
import { useComputerParts } from "../../global/ComputerPartsContext";
import { formatCurrency } from "../../utils";
import { useSelectedItems } from "../../global/SelectedItemsContext";
import Swal from "sweetalert2";
import { MdOutlineWarningAmber } from "react-icons/md";

const Home: React.FC = () => {
  const { selectedItems } = useSelectedItems();
  const { parts } = useComputerParts();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentCategory, setCurrentCategory] = useState("Processor");
  const [isLastCategory, setIsLastCategory] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

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

  const calculateProgress = () => {
    if (parts && selectedItems) {
      let totalCategories = Object.keys(parts).length;
      let selectedCategories = Object.keys(selectedItems).length;
      return (selectedCategories / totalCategories) * 100;
    }
    return 0;
  };

  const progressValue = calculateProgress();

  const isButtonDisabled = Object.keys(selectedItems).length === 0;

  /* const handleNextCategory = () => {
    if (parts) {
      const categories = Object.keys(parts);
      const currentIndex = categories.indexOf(currentCategory);

      if (currentIndex < categories.length - 1) {
        setCurrentCategory(categories[currentIndex + 1]);
      }
    } else {
      return null;
    }
  };

  useEffect(() => {
    if (parts) {
      const categories = Object.keys(parts);
      const currentIndex = categories.indexOf(currentCategory);
  
      setIsLastCategory(currentIndex === categories.length - 1);
    }
  }, [parts, currentCategory]);

 */

  const [modalText, setModalText] = useState("Componentes Selecionados");

  useEffect(() => {
    if (parts) {
      const categories = Object.keys(parts);
      const currentIndex = categories.indexOf(currentCategory);

      setIsLastCategory(currentIndex === categories.length - 1);
    }
  }, [parts, currentCategory]);

  const handleNextCategory = () => {
    if (parts) {
      const categories = Object.keys(parts);
      const currentIndex = categories.indexOf(currentCategory);

      if (currentIndex < categories.length - 1) {
        setCurrentCategory(categories[currentIndex + 1]);
        setModalText("Componentes Selecionados");
      } else {
        setModalText("Parabéns, você concluiu a seleção!");
      }
    }
  };

  const isCategoryEmpty = () => {
    return !selectedItems[currentCategory];
  };

  const resetConfig = () => {
    Swal.fire({
      title: "Deseja montar uma nova configuração?",
      text: "Caso deseje prosseguir isso irá apagar a configuração atual e recarregar a página",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#00AD6F",
      cancelButtonColor: "#A3020D",
      confirmButtonText: "Desejo Prosseguir",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.reload();
      }
    });
  };

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
        <CardPieces currentCategory={currentCategory} />
      </S.ContainerParts>
      <S.ContainerGrid>
        <GridPieces currentCategory={currentCategory} />
        <S.ContainerButtons>
          <S.Button disabled={isButtonDisabled} onClick={handleOpenModal}>
            <FaComputer />
            <p>Ver os Componentes Selecionados</p>
          </S.Button>
          <ButtonProduct
            disabled={isButtonDisabled || isCategoryEmpty()}
            onClick={() => {
              handleNextCategory();
              if (isLastCategory) {
                handleOpenModal();
              }
            }}
            isLastCategory={isLastCategory}
            modalText={modalText}
          />
          {isLastCategory && !isCategoryEmpty() && (
            <S.Button resetConfig onClick={resetConfig}>
              <MdOutlineWarningAmber />
              <p>Montar Nova Configuração</p>
            </S.Button>
          )}
          <Progress value={progressValue} category={currentCategory} />
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
      <ModalPieces
        isLastCategory={isLastCategory}
        modalText={modalText}
        valueTotal={totalPrice}
        currentCategory={currentCategory}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </S.Container>
  );
};

export default Home;
