import { useState, useEffect } from "react";
import * as S from "./styled";
import { useComputerParts } from "../../context/ComputerPartsContext";
import { useSelectedItems } from "../../context/SelectedItemsContext";
import { formatCurrency } from "../../utils";
import { Checkbox, Loading } from "../../components";

interface GridPiecesProps {
  currentCategory: string;
}

function GridPieces({ currentCategory }: GridPiecesProps) {
  const [checkedMap, setCheckedMap] = useState<{ [key: number]: boolean }>({});
  const { addSelectedItem, removeSelectedItem } = useSelectedItems();

  const handleRadioCheck = (index: number, processor: any) => {
    setCheckedMap((prevState) => {
      const newCheckedMap = { ...prevState };
      const isCurrentlyChecked = newCheckedMap[index];

      if (isCurrentlyChecked) {
        delete newCheckedMap[index];
        removeSelectedItem(currentCategory);
      } else {
        Object.keys(newCheckedMap).forEach((key: any) => {
          if (parseInt(key) !== index) {
            delete newCheckedMap[key];
          }
        });
        newCheckedMap[index] = true;
        addSelectedItem(currentCategory, processor);
      }
      return newCheckedMap;
    });
  };

  const { parts } = useComputerParts();

  useEffect(() => {
    setCheckedMap({});
  }, [currentCategory]);

  if (!parts || !parts[currentCategory]) {
    return <Loading />;
  }

  return (
    <S.Container>
      {parts[currentCategory].map((category, index) => (
        <S.ContainerCard
          key={index}
          onClick={() => handleRadioCheck(index, category)}
          actived={checkedMap[index]}
        >
          <S.ContainerImage>
            <Checkbox checked={checkedMap[index]} onClick={() => {}} />
            <S.Image src={category.image} alt={`Image ${category.name}`} />
          </S.ContainerImage>
          <S.ContainerText>
            <S.Title>{category.name}</S.Title>
            <S.Price>{formatCurrency(category.price)}</S.Price>
          </S.ContainerText>
        </S.ContainerCard>
      ))}
    </S.Container>
  );
}

export default GridPieces;
