import { useState } from "react";
import { useComputerParts } from "../../global/ComputerPartsContext";
import { formatCurrency } from "../../utils";
import { Checkbox, Loading } from "../../components";
import * as S from "./styled";
import { useSelectedItems } from "../../global/SelectedItemsContext";

interface GridPiecesProps {
  currentCategory: string; // Adiciona a propriedade currentCategory
}

function GridPieces({ currentCategory }: GridPiecesProps) {
  const [checkedMap, setCheckedMap] = useState<{ [key: number]: boolean }>({});
  const { selectedItems, addSelectedItem, removeSelectedItem } =
    useSelectedItems();

  const handleRadioCheck = (index: number, processor: any) => {
    setCheckedMap((prevState) => {
      const newCheckedMap = { ...prevState };
      const isCurrentlyChecked = newCheckedMap[index];

      if (isCurrentlyChecked) {
        delete newCheckedMap[index];
        removeSelectedItem("Processor");
      } else {
        Object.keys(newCheckedMap).forEach((key: any) => {
          if (parseInt(key) !== index) {
            delete newCheckedMap[key];
          }
        });
        newCheckedMap[index] = true;
        addSelectedItem("Processor", processor);
      }
      return newCheckedMap;
    });
  };

  const { parts } = useComputerParts();

  if (!parts || !parts[currentCategory]) {
    return <Loading />;
  }

  return (
    <S.Container>
      {parts[currentCategory].map((processor, index) => (
        <S.ContainerCard
          key={index}
          onClick={() => handleRadioCheck(index, processor)}
          actived={checkedMap[index]}
        >
          <S.ContainerImage>
            <Checkbox checked={checkedMap[index]} onClick={() => {}} />
            <S.Image src={processor.image} alt={`Image ${processor.name}`} />
          </S.ContainerImage>
          <S.ContainerText>
            <S.Title>{processor.name}</S.Title>
            <S.Price>{formatCurrency(processor.price)}</S.Price>
          </S.ContainerText>
        </S.ContainerCard>
      ))}
    </S.Container>
  );
}

export default GridPieces;
