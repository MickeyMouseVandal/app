import { useState } from 'react'

import * as S from './styled';

import Section from '../Section';
import Footer from '../Footer';

export default function SignIn() {
  const [ activeInput, setActiveInput ] = useState<string>('');
  const [ activeInputPassword, setActiveInputPassword ] = useState<string>('');

  const value = activeInput !== '' ? true : false;
  const valuePassword = activeInputPassword !== '' ? true : false;

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
            <S.Title>
              Login
            </S.Title>
            <S.Description>
              Insira os dados para acessar sua conta.
            </S.Description>
          </S.WrapperLogin>
          <S.Form>
            <S.FormGroupItems>
              <S.Label>E-mail</S.Label>
              <S.Input placeholder='debra.holt@example.com'/>
            </S.FormGroupItems>
            <S.FormGroupItems>
              <S.Label>Senha</S.Label>
              <S.InputPassword placeholder='••••••••' />
            </S.FormGroupItems>
            <S.ButtonConfirm>Confirmar</S.ButtonConfirm>
            <S.DontHaveAccount>
              Não tem uma conta?
              <S.SignUp href="#">
                Faça login
              </S.SignUp>
            </S.DontHaveAccount>
          </S.Form>
        </S.WrapperSignIn>
      </Section>
      <Section background='url(./public/bg-signIn.svg)' size='75vw' />
    </S.Container>
    <Footer/>
  </>
  );
}