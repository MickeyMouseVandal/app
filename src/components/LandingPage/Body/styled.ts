import styled from "styled-components";


export const Styles = {
    

    Section : styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    align-items: center;
    padding-top: 200px;
    padding-bottom: 170px;
    `,

    SectionBottom : styled.div`
    display: flex;
    flex-direction: column;
    background-color: #ECECEC;
    width: 100vw;
    align-items: center;
    padding-top: 200px;
    padding-bottom: 170px;
    `,

    SectionTitle : styled.h2 `
    font-family: 'Work Sans';
    font-weight: 700;
    font-size: 40px;
    text-align: center;
    color: #505050;
    padding-top: 8px;
    width: 20rem;
    border-top: 3px solid #FFB03A;
    `,

    CardsDiv : styled.div `
    padding-top: 3rem;
    display: flex;
    gap: 5rem;
    width: auto;
    `,

    ItemCard : styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    width: 300px;
    height: 370px;
    box-shadow: 0px 10px 6px rgba(0, 1, 1, 0.35);
    background-color: white;
    `,

    CardDescriptionDiv : styled.div`
    display: flex;
    justify-content: space-between;
    padding: 1rem;
    `,

    CardDescriptionText : styled.p`
    font-family: 'Work Sans';
    font-weight: 600;
    font-size: 18px;
    color: #252525;
    `,

    ItemImg : styled.img`
    width: 300px;
    height: 250px;
    border-radius: 10px 10px 0px 0px;
    border-bottom: 0.1px solid black;
    `,

    ItemLink : styled.a`
    background-color: transparent;
    text-align: center;
    color: transparent;
    text-decoration: none;
    text-align: center;
    border-radius: 10px;
    z-index: 3;

    :hover {
        z-index: 3;
        cursor: pointer;
        color: black;
    }
    `

    


}