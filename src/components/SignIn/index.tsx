import * as S from './styled';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import Section from '../Section';
import Footer from '../Footer';

export default function SignIn() {
  const navigate = useNavigate();
  const [account, setAccount] = useState(
    {
      email: "",
      password: "",
    }
  )

  const sendData = function(e : React.MouseEvent<HTMLButtonElement, MouseEvent>){

    e.preventDefault()

    axios.post('/sign-in', {
      email: account.email,
      password: account.password,
    })
    .then(response => {

      if(response.data.code === 200){
        return navigate('/')
      } else {
       alert("Email ou senha incorretos")
      }

    })
    .catch(function (error: Error) {
      alert('email ou senha incorretos')
    });
  }

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
              <S.Input value={account.email} placeholder='debra.holt@example.com' onChange={e => setAccount({ ...account, email: e.target.value })} />
            </S.FormGroupItems>
            <S.FormGroupItems>
              <S.Label>Senha</S.Label>
              <S.InputPassword value={account.password} placeholder='••••••••' onChange={e => setAccount({ ...account, password: e.target.value })} />
            </S.FormGroupItems>
            <S.ButtonConfirm onClick={e => sendData(e)} >Confirmar</S.ButtonConfirm>
            <S.DontHaveAccount>
              Não tem uma conta?
              <S.SignUp href="/signUp">
                Cadastre-se
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