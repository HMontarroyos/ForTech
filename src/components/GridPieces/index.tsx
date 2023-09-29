import { useState } from "react";
import { useComputerParts } from "../../global/ComputerPartsContext";
import { formatCurrency } from "../../utils";
import { Checkbox, Loading } from "../../components";
import * as S from "./styled";

function GridPieces() {
  const [checkedMap, setCheckedMap] = useState<{ [key: number]: boolean }>({});

  const handleRadioCheck = (index: number) => {
    const newCheckedMap: { [key: number]: boolean } = {};
    newCheckedMap[index] = true;
    setCheckedMap(newCheckedMap);
  };

  const { parts } = useComputerParts();

  if (!parts) {
    return <Loading/>
  }

  return (
    <S.Container>
      {parts &&
        parts.Storage.map((processor, index) => (
          <S.ContainerCard
            key={index}
            onClick={() => handleRadioCheck(index)}
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
