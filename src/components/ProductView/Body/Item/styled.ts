import styled from "styled-components";

export const Styles = {

    TopDiv : styled.div`
    margin-inline: 5rem;
    padding-right: 5rem;
    padding-bottom: 10rem;
    padding-top: 5rem;
    border-bottom: 2px solid black;
    gap: 2rem;
    display: flex;
    flex-wrap: wrap;
    `,

    GoBackDiv : styled.div`
    display: flex;
    `,

    ItemDiv : styled.div `
    display: flex;
    flex-direction: column;
    justify-content: left;
    align-items: left;
    gap: 0.5rem;
    `,

    ItemName : styled.h1 `
    font-family: 'Work Sans';
    font-weight: 700;
    font-size: 61.04px;
    `,

    ItemMaterial : styled.p `
    font-family: 'Work Sans';
    font-weight: 500;
    font-size: 31.25px;
    color: rgba(26, 31, 22, 0.5);
    `,

    ItemPrice : styled.p`
    font-family: 'Work Sans';
    font-weight: 500;
    font-size: 31.25px;
    padding-bottom: 5px;
    color: #1A1F16;
    `,

    ItemImg : styled.img`
    width: 10rem;
    height: 10rem;
    `,

    AddToCartButton : styled.button`
    padding: 8px 24px;
    width: 257px;
    height: 39px;
    text-align: center;
    color: white;
    background-color: #FFB03A;
    border-radius: 8px;

    :hover {
        background-color: white;
        color: #FFB03A;
        border: 1px solid #FFB03A; 
    }
    `,

    BottomDiv : styled.div`
    padding-inline: 5rem;
    padding-block: 5rem;
    height: 40em;
    display: flex;
    gap: 4rem;
    flex-direction: column;
    `,

    Title : styled.h2 `
    font-family: 'Work Sans';
    font-weight: 700;
    font-size: 50px;
    `,

    Text : styled.p `
    font-family: 'Work Sans';
    font-weight: 400;
    font-size: 24px;
    color: rgba(26, 31, 22, 0.5);
    `


}