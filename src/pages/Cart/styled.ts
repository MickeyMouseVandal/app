import styled from "styled-components";

export const Styles = {

    Wrapper : styled.div `
    display: flex;
    flex-direction: column;
    height: 100vh;
    `,

    ItemsDiv : styled.div`
    display: flex;
    padding-right: 5rem;
    border-right: 1px solid black;
    flex-direction: column;
    justify-content: left;
    align-items: left;
    gap: 2rem;
    `,

    ItemDiv : styled.div`
    height: 60px;
    display: flex;
    flex-wrap: wrap;
    `,

    ItemImg : styled.img`
    height: 60px;
    width: 60px;
    `,

    ItemName : styled.p`
    font-family: 'Work Sans';
    font-weight: 700;
    font-size: 20px;
    `,

    ItemPrice : styled.p`
    font-family: 'Work Sans';
    font-weight: 700;
    font-size: 16px;
    `,

    NothingToShowDiv : styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    `


}