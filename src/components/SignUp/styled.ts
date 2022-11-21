import styled, { css } from 'styled-components';

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