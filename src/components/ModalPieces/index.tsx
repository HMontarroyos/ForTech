import { useSelectedItems } from "../../global/SelectedItemsContext";
import { formatCurrency } from "../../utils";
import * as S from "./styled";
import { FaWindowClose } from "react-icons/fa";
import { pieces } from "../../global/const";

interface ModalPiecesProps {
  isOpen: boolean;
  onClose: () => void;
}

function ModalPieces({ isOpen, onClose }: ModalPiecesProps) {
  const { selectedItems } = useSelectedItems();
  const processor = selectedItems["Processor"]; // Obtendo os detalhes do processador

  if (!isOpen) return null;

  return (
    <S.ModalOverlay>
      <S.Container>
        <S.CloseButton onClick={onClose}>
          <FaWindowClose />
        </S.CloseButton>
        <S.Title>Componentes Selecionados </S.Title>
        <S.ContainerColumn>
          <S.ContainerPiece>
            <S.ContainerImage>
            {pieces[0].icon}
              <S.Image src={processor.image} alt={`Image do ${processor.name}`} />
              <S.Description>{processor.name}</S.Description>
            </S.ContainerImage>
            <S.Price>{formatCurrency(processor.price)}</S.Price>
          </S.ContainerPiece>
        </S.ContainerColumn>
      </S.Container>
    </S.ModalOverlay>
  );
}

export default ModalPieces;
