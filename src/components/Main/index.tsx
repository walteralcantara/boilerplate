import * as S from "./styled";

export type MainProps = {
  title?: string;
  description?: string;
  backgroundColor?: string;
  fontColor?: string;
};

const Main = ({
  title = "Walter's Boilerplate",
  description = "TypeScript, React, Next.js and Styled Components",
  backgroundColor = "#1f1b2e",
  fontColor = "#ffffff"
}: MainProps) => (
  <S.Wrapper backgroundColor={backgroundColor} fontColor={fontColor}>
    <S.Logo src="/img/logo.png" />
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
  </S.Wrapper>
);

export default Main;
