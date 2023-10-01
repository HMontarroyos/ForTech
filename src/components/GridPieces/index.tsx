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
  const { addSelectedItem, removeSelectedItem, selectedItems } = useSelectedItems();


  const filteringRules = () => {
      console.log("ITENS SELECIONANDOS", selectedItems[currentCategory])
      
    //"Placa Mãe AMD"

    console.log("PARTS", parts && parts[currentCategory])
/*    
[
    {
        "name": "Placa Mãe Razor",
        "image": "./images/motherboard/razor.png",
        "price": 999.89
    },
    {
        "name": "Placa Mãe AMD",
        "image": "./images/motherboard/amd.png",
        "price": 789.68
    },
    {
        "name": "Placa Mãe Intel",
        "image": "./images/motherboard/intel.png",
        "price": 987.54
    }
]

*/


  }


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

  return (
    <S.Container>
      <>   
      {filteringRules()}
      </>
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
