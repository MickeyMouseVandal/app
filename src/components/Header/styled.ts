import styled from "styled-components";


export const Styles = {

    Header : styled.header`
    width: 100vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: transparent;
    gap: 3rem;
    `,

    IconsDiv : styled.div`
    display: flex;
    gap: 1rem;
    padding-right: 3rem;
    `,

    logoVandal : styled.div`
    background-image: url('../src/assets/img/logopw-vandal-tipografica.png');
    background-size: cover;
    background-position: center;
    width: 200px;
    height: 100px;
    `,

     logoVandalWhite : styled.div`
     background-image: url('../src/assets/img/logopw-vandal-black-tipografica.png');
     background-size: cover;
     background-position: center;
     width: 200px;
     height: 100px;
    `,



    cartIcon : styled.div`
    background-image: url('../src/assets/img/cart.svg');
    background-size: cover;
    background-position: center;
    width: 40px;
    height: 40px;
    `,

    cartIconWhite : styled.div`
    background-image: url('../src/assets/img/icon-cart-white.png');
    background-size: cover;
    background-position: center;
    width: 40px;
    height: 40px;
    `,

    profileIcon : styled.div`
    background-image: url('../src/assets/img/profile.svg');
    background-size: cover;
    background-position: center;
    width: 40px;
    height: 40px;
    `,

    profileIconWhite : styled.div`
    background-image: url('../src/assets/img/profile-white.png');
    background-size: cover;
    background-position: center;
    width: 40px;
    height: 40px;
    `



}