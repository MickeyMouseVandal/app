import * as S from './styled';

import Section from '../Section';
import Footer from '../Footer';

export default function SignIn() {
  return(
    <>
    <S.Container>
      <Section background='#FCFDFF' size='50vw'>
        <S.header>
          <S.logo />
          <S.WrapperButtons>
            <S.ButtonCart />
            <S.ButtonPerson />
          </S.WrapperButtons>
        </S.header>

        <S.WrapperSignIn>
          <S.WrapperLogin>
          
          </S.WrapperLogin>
        </S.WrapperSignIn>
      </Section>
      <Section background='url(./public/bg-signIn.svg)' size='75vw' />
    </S.Container>
    <Footer/>
  </>
  );
}