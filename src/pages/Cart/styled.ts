import styled from "styled-components";

export const Styles = {

    Wrapper : styled.div `
    display: flex;
    flex-direction: column;
    height: 100vh;
    `,

    Title : styled.h1 `
    font-family: 'Work Sans';
    font-weight: 700;
    font-size: 56px;
    `,

    Container : styled.div`
    display: flex;
    padding-top: 5rem;
    gap: 7rem;
    height: 90vh;
    `,

    PaymentDiv : styled.div `
    display: flex;
    padding-left: 10rem;
    padding-bottom: 10rem;
    align-items: center;
    justify-content: center;
    `,

    ItemsDiv : styled.div`
    display: flex;
    padding-right: 5rem;
    padding-left: 5rem;
    padding-top: 5rem;
    margin-bottom: 5rem;
    flex-direction: column;
    gap: 2rem;
    width: 40rem;
    border-right: 1px solid black;
    `,

    ItemDiv : styled.div`
    height: 60px;
    display: flex;
    align-items: center;
    gap: 1rem;
    `,

    ItemDescription : styled.div`
    display: flex;
    flex-direction: column;
    `,

    ItemImg : styled.img`
    height: 15rem;
    width: 15rem;
    `,

    ItemName : styled.p`
    font-family: 'Work Sans';
    font-weight: 700;
    font-size: 35px;
    `,

    ItemPrice : styled.p`
    font-family: 'Work Sans';
    font-weight: 700;
    font-size: 25px;
    `,

    NothingToShowDiv : styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    `,

    PayButton : styled.a`
    width: 200px;
    height: 40px;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: white;
    border-radius: 8px;
    background-color: #FFB03A;

    :hover {
        color: #FFB03A;
        background-color: white;
        border: 1px solid #FFB03A;
    }
    `




}