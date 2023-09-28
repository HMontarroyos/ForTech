import * as S from "./styled";
import { pieces } from "../../global/const";

function CardPieces() {
  return (
    <S.Container>
      {/*       {pieces &&
        pieces.map((piece, index) => (
          <S.ContainerCard key={index}>
            <S.ContainerIcon>
              {piece.icon}
            </S.ContainerIcon>
            <S.Title>{piece.name}</S.Title>
          </S.ContainerCard>
        ))} */}
      <S.ContainerCard actived>
        <S.ContainerIcon>{pieces[0].icon}</S.ContainerIcon>
        <S.Title>{pieces[0].name}</S.Title>
      </S.ContainerCard>
      <S.ContainerCard>
        <S.ContainerIcon>{pieces[1].icon}</S.ContainerIcon>
        <S.Title>{pieces[1].name}</S.Title>
      </S.ContainerCard>
      <S.ContainerCard disabled>
        <S.ContainerIcon>{pieces[2].icon}</S.ContainerIcon>
        <S.Title>{pieces[2].name}</S.Title>
      </S.ContainerCard>
      <S.ContainerCard disabled>
        <S.ContainerIcon>{pieces[3].icon}</S.ContainerIcon>
        <S.Title>{pieces[3].name}</S.Title>
      </S.ContainerCard>
      <S.ContainerCard disabled>
        <S.ContainerIcon>{pieces[4].icon}</S.ContainerIcon>
        <S.Title>{pieces[4].name}</S.Title>
      </S.ContainerCard>
    </S.Container>
  );
}

export default CardPieces;
