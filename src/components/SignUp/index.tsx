import * as S from './styled';

import Section from '../Section';
import Footer from '../Footer';

import axios from 'axios'
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Dialog from '@radix-ui/react-dialog';

export default function SignUp() {
  const navigate = useNavigate();
  const [account, setAccount] = useState(
    {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    }
  )

  const sendData = function(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();

    if(account.password !== account.confirmPassword) return;

    axios.post('http://localhost:3000/sign-up', {
      name: account.name,
      email: account.email,
      password: account.password,
    })
    .then(response => {
        return navigate('/signIn');
    })
  }

  return(
    <>
    <S.Container>
      <Section background='#FCFDFF' size='50vw'>
        <S.header>
          <S.logo />
          <S.WrapperButtons>
          <Dialog.Root>
                <S.Trigger>
                  <S.ButtonCart />
                </S.Trigger>
                <Dialog.Portal>
                  <S.bgModal />
                    <S.Modal>
                      <S.TitleModal>Acesso Negado!</S.TitleModal>
                      <S.DescriptionModal>
                        É necessário fazer o Login antes de acessar seu carrinho de compras.
                      </S.DescriptionModal>
                      <Dialog.Close asChild>
                        <S.CloseModal>Fechar</S.CloseModal>
                      </Dialog.Close>
                    </S.Modal>
                </Dialog.Portal>
              </Dialog.Root>

            <Dialog.Root>
                <S.Trigger>
                  <S.ButtonPerson/>
                </S.Trigger>
                  <Dialog.Portal>
                    <S.bgModal />
                    <S.Modal>
                      <S.TitleModal>Acesso Negado!</S.TitleModal>
                      <S.DescriptionModal>
                        É necessário fazer o Login antes de acessar seu perfil.
                      </S.DescriptionModal>
                      <Dialog.Close asChild>
                        <S.CloseModal>Fechar</S.CloseModal>
                      </Dialog.Close>
                    </S.Modal>
                  </Dialog.Portal>
            </Dialog.Root>
          </S.WrapperButtons>
        </S.header>

        <S.WrapperSignUp>
          <S.WrapperRegister>
            <S.Title>
              Cadastro
            </S.Title>
            <S.Description>
              Preencha seus dados para poder usufruir de nossos serviços.
            </S.Description>
          </S.WrapperRegister>
          <S.Form>
            <S.FormGroupItems>
              <S.Label>Nome</S.Label>
              <S.Input value={account.name} placeholder='Insira seu nome completo' onChange={e => setAccount({ ...account, name: e.target.value })}/>
            </S.FormGroupItems>
            <S.FormGroupItems>
              <S.Label>E-mail</S.Label>
              <S.Input value={account.email} placeholder='Insira seu e-mail' onChange={e => setAccount({ ...account, email: e.target.value })} />
            </S.FormGroupItems>
            <S.FormGroupItems>
              <S.Label>Senha</S.Label>
              <S.InputPassword value={account.password} placeholder='••••••••' onChange={e => setAccount({ ...account, password: e.target.value })} />
            </S.FormGroupItems>
            <S.FormGroupItems>
              <S.Label>Confirme sua senha</S.Label>
              <S.InputPassword value={account.confirmPassword} placeholder='••••••••' onChange={e => setAccount({ ...account, confirmPassword: e.target.value })} />
            </S.FormGroupItems>
            <S.ButtonConfirm onClick={e => sendData(e)}>Confirmar</S.ButtonConfirm>
            <S.DontHaveAccount>
              Já tem uma conta?
              <S.SignUp href="/signIn">
                Faça Login
              </S.SignUp>
            </S.DontHaveAccount>
          </S.Form>
        </S.WrapperSignUp>
      </Section>
      <Section background='url(./public/bg-signIn.svg)' size='75vw' />
    </S.Container>
    <Footer/>
  </>
  );
}