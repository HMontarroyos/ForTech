import { useSelectedItems } from "../../global/SelectedItemsContext";
import { formatCurrency } from "../../utils";
import * as S from "./styled";
import { FaWindowClose } from "react-icons/fa";
import { pieces } from "../../global/const";

interface ModalPiecesProps {
  isOpen: boolean;
  currentCategory: string;
  valueTotal: number;
  isLastCategory: boolean;
  modalText: string;
  onClose: () => void;
}

function ModalPieces({
  isOpen,
  onClose,
  currentCategory,
  valueTotal,
  isLastCategory,
  modalText,
}: ModalPiecesProps) {
  const { selectedItems } = useSelectedItems();

  const areAllCategoriesPresent = () => {
    const categories = ['Processor', 'Motherboard', 'Memory', 'VideoCard', 'Storage'];
    return categories.every(category => category in selectedItems);
  };

  if (!isOpen) return null;

  return (
    <S.ModalOverlay>
      <S.Container>
        <S.CloseButton onClick={onClose}>
          <FaWindowClose />
        </S.CloseButton>
        <S.Title>Componentes Selecionados </S.Title>
        {isLastCategory && areAllCategoriesPresent() && <S.Congratulations>Parabéns, você concluiu a seleção!</S.Congratulations>}
        <>{console.log("SELECIONADOS MODAL", selectedItems)}</>
        <S.ContainerColumn>
          {Object.keys(selectedItems).map((category) => {
            const item = selectedItems[category];
            const icon = pieces.find(
              (piece) => piece.category === category
            )?.icon;
            return (
              <S.ContainerPiece key={category}>
                <S.ContainerImage>
                  {icon}
                  <S.Image src={item.image} alt={`Image do ${item.name}`} />
                  <S.Description>{item.name}</S.Description>
                </S.ContainerImage>
                <S.Price>{formatCurrency(item.price)}</S.Price>
              </S.ContainerPiece>
            );
          })}
          <S.Divisor />
          <S.ContainerValue>
            <S.Description>Valor Total</S.Description>
            <S.Price>{formatCurrency(valueTotal)}</S.Price>
          </S.ContainerValue>
        </S.ContainerColumn>
      </S.Container>
    </S.ModalOverlay>
  );
}

export default ModalPieces;
