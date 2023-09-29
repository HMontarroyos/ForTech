import * as S from "./styled";
import { categoryTexts } from "../../global/const";

interface ProgressProps {
  value: number;
  category: string;
}

function Progress({ value, category }: ProgressProps): JSX.Element {
  const texts = categoryTexts[category] || categoryTexts["Processor"];

  return (
    <S.Container>
      <S.ContainerText>
        <div style={{ width: "100px" }}>
          <S.StyledCircularProgressbar value={value} text={`${value}%`} />
        </div>
        <div>
          <S.Title>{texts.title}</S.Title>
          <S.Text>{texts.text}</S.Text>
        </div>
      </S.ContainerText>
    </S.Container>
  );
}

export default Progress;
