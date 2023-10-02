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
  const { addSelectedItem, removeSelectedItem, selectedItems } =
    useSelectedItems();

  const handleRadioCheck = (index: number, category: any) => {
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
        addSelectedItem(currentCategory, category);
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

  const customFilter = () => {
    let filteredParts = parts[currentCategory];

    if (currentCategory === "Processor") {
      if (selectedItems["Motherboard"]?.name.includes("Razor")) {
        // Filtrar os processadores para exibir apenas i3 e i5
        filteredParts = filteredParts.filter(
          (category) =>
            category.name.includes("i3") || category.name.includes("i5")
        );
      }

      if (selectedItems["Motherboard"]?.name.includes("AMD")) {
        // Filtrar os processadores para exibir apenas i7 e i9
        filteredParts = filteredParts.filter(
          (category) =>
            category.name.includes("i7") || category.name.includes("i9")
        );
      }
    }

    if (!selectedItems["Motherboard"]?.name.includes("Razor")) {
      // Não exiba a videoCard NVIDIA GTX 1660
      filteredParts = filteredParts.filter(
        (category) => !category.name.includes("1660")
      );
    }

    if (selectedItems["Motherboard"]?.name.includes("Intel")) {
      // Filtrar as memórias para excluir a de 8GB DDR4
      filteredParts = filteredParts.filter(
        (category) => !category.name.includes("8GB")
      );
    }

    if (selectedItems["Processor"]?.name.includes("i9")) {
      // Exiba todos os Storage, exceto o 256GB SSD
      filteredParts = filteredParts.filter(
        (category) => !category.name.includes("256GB SSD")
      );
    }

    return filteredParts;
  };

  return (
    <S.Container>
      {customFilter().map((category, index) => (
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
