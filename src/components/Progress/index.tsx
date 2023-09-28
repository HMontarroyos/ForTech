import * as S from "./styled";

interface ProgressProps {
  value: number;
}

function Progress({ value }: ProgressProps): JSX.Element {
  return (
    <S.Container>
      <S.ContainerText>
        <div style={{ width: "100px" }}>
          <S.StyledCircularProgressbar value={value} text={`${value}%`} />
        </div>
        <div>
          <S.Title>Estamos no Inicio</S.Title>
          <S.Text>Selecione o Processador</S.Text>
        </div>
      </S.ContainerText>
    </S.Container>
  );
}

export default Progress;
