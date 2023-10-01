import * as S from "./styled";
import { AiOutlineCheck } from "react-icons/ai";
import { useSelectedItems } from "../../global/SelectedItemsContext";
import { pieces } from "../../global/const";
import { areAllCategoriesPresent } from "../../utils";

interface CardPiecesProps {
  currentCategory: string;
  isLastCategory: boolean;
}

function CardPieces({ currentCategory, isLastCategory }: CardPiecesProps) {
  const { selectedItems } = useSelectedItems();
  const isLastCategoryActive =
    isLastCategory && areAllCategoriesPresent(selectedItems);
  return (
    <S.Container>
      {pieces.map((piece, index) => {
        let cardState: "actived" | "disabled" | "normal" = "normal";

        if (piece.category === currentCategory) {
          cardState = "actived";
        } else if (
          index > pieces.findIndex((item) => item.category === currentCategory)
        ) {
          cardState = "disabled";
        }

        if (isLastCategoryActive) {
          cardState = "normal";
        }

        return (
          <S.ContainerCard key={index} state={cardState}>
            {cardState === "normal" && (
              <AiOutlineCheck
                style={{
                  position: "absolute",
                  fontSize: "30px",
                  fontWeight: "bold",
                }}
              />
            )}
            <S.ContainerIcon>{piece.icon}</S.ContainerIcon>
            <S.Title>{piece.name}</S.Title>
          </S.ContainerCard>
        );
      })}
    </S.Container>
  );
}

export default CardPieces;
