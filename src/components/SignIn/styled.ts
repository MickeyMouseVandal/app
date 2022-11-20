import styled from 'styled-components';

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

export const WrapperSignIn = styled.div`
  display: flex;
  flex-direction: column;
  height: max-content;
  justify-content: center;
  align-items: center;
`

export const WrapperLogin = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  height: max-content;
`

export const Title = styled.h1`
  font-size: 4rem;
  font-weight: bold;
  color: #252525;
`