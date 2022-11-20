import * as S from './styled';

interface SectionProps {
  children?: any
  background?: string
  size?: string
}

export default function Section({ background, children, size }: SectionProps) {
  return(
    <S.Container background={background} size={size}>
      {children}
    </S.Container>
  );
}