import styled, { css } from 'styled-components';
import * as Dialog from '@radix-ui/react-dialog';

export const header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 45px;
  left: 132px;
  width: 85%;
`

export const Container = styled.div`
  display: flex;
  position: relative;
`

export const logo = styled.div`
  background-image: url(./public/logo.svg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 12.5rem;
  height: 10rem;
`

export const WrapperButtons = styled.div`
  display: flex;
  gap: 3.5rem;
`

export const ButtonCart = styled.div`
  background-image: url(./public/cart.svg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 2.4rem;
  height: 2.4rem;
  cursor: pointer;

  transition: all 0.4s ease;

  :hover {
    opacity: 0.6;
  }
`

export const ButtonPerson = styled.div`
  background-image: url(./public/person.svg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 2.4rem;
  height: 2.4rem;
  cursor: pointer;

  transition: all 0.4s ease;

  :hover {
    opacity: 0.2;
  }
`

export const WrapperSignUp = styled.div`
  display: flex;
  flex-direction: column;
  height: max-content;
  justify-content: center;
  align-items: center;
  gap: 5rem;
  padding-top: 10rem;
  padding-left: 5rem;
`

export const WrapperRegister = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: max-content;
  justify-content: center;
  gap: .8rem;
`

export const Title = styled.h1`
  font-size: 4rem;
  font-weight: bold;
  color: #252525;
`

export const Description = styled.p`
  font-size: 1.6rem;
  line-height: 2.4rem;
  color: #667085;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 2rem;
`

export const FormGroupItems = styled.div`
  display: flex;
  flex-direction: column;
  height: max-content;
  gap: .8rem;
`

export const Input = styled.input`
  padding: 1rem;
  border-radius: 8px;
  font-size: 1.5rem;
  border: 1px solid #D0D5DD;
  color: #344054;
`

export const InputPassword = styled.input.attrs(props => ({
  type: "password",
}))`
  padding: 1rem;
  border-radius: 8px;
  font-size: 1.5rem;
  border: 1px solid #D0D5DD;
  color: #344054;
`

export const Label = styled.label`
  font-size: 1.4rem;
  line-height: 2rem;
  color: #344054;
`

export const ButtonConfirm = styled.button.attrs(props => ({
  type: "submit",
}))`
  height: 4.4rem;
  width: max-width;
  color: white;
  background-color: #FFB03A;
  border-radius: 8px;
  cursor: pointer;

  transition: all .4s ease-in-out;

  &:hover {
    opacity: 0.8;
  }
`

export const DontHaveAccount = styled.p`
  display: flex;
  justify-content: center;
  color: #344054;
  font-size: 1.5rem;
  gap: 0.5rem;
`

export const SignUp = styled.a`
  color: #5429FF;
  font-size: 1.5rem;
  font-weight: bold;
  outline: none;
  text-decoration: none;
  cursor: pointer;
`

export const bgModal = styled(Dialog.Overlay)`
  background-color: black;
  opacity: 0.6;
  position: fixed;
  inset: 0;
`

export const Modal = styled(Dialog.Content)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 32rem;
  height: max-content;
  background-color: #FFB03A;
  color: #0D0D0D;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  position: fixed;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  padding: 5rem 5rem;
`

export const TitleModal = styled(Dialog.Title)`
  color: black;
  font-size: 2rem;
`

export const DescriptionModal = styled(Dialog.Description)`
  color: #252525;
  font-size: 1.5rem;
`

export const Trigger = styled(Dialog.Trigger)`
  background-color: transparent;
`

export const CloseModal = styled.button`
  background-color: #0D0D0D;
  padding: 1rem 1.5rem;
  border-radius: 8px;
  font-weight: 700;
  cursor: pointer;
  color: white;

  transition: all 0.3s ease;

  &:hover {
    opacity: 0.7;
  }
`