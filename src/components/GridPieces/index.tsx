import { useComputerParts } from "../../global/ComputerPartsContext";
import { formatCurrency } from "../../utils";
import * as S from "./styled";

function GridPieces() {
  const { parts } = useComputerParts();

  if (!parts) {
    return <div>Loading...</div>;
  }

  return (
    <S.Container>
      {parts &&
        parts.Storage.map((processor, index) => (
          <S.ContainerCard key={index}>
            <S.ContainerImage>
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
