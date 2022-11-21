import styled from "styled-components";

export const Styles = {

    GradientDiv : styled.div`
    width: 100%;
    height: 653px;
    background-color:  #0D0D0D;
`,

    TextDiv : styled.div`
    display: flex;
    width: 27rem;
    padding-left: 2rem;
    padding-top: 2rem;
    padding-bottom: 3rem;
    `,
    
    Text : styled.p`
    font-family: 'Work Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 56px;
    color: white;
    `,

    MoreDiv : styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    z-index: 3;
    background-color: #080808;
    width: 70vw;
    height: 16rem;
    margin-inline: 13.5rem;
    `,

    TextMoreDiv : styled.p`
    font-family: 'Work Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 26px;
    color: white;
    `,

    LargeText : styled.p`
    font-family: 'Work Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 45px;
    color: white;
    `,

    MoreButton : styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #FFB03A;
    text-decoration: none;
    color: white;
    width: 10rem;
    height: 3rem;
    border-radius: 32px;
    font-family: 'Work Sans';
    z-index: 3;

    :hover {
        cursor: pointer;
        color: #FFB03A;
        background-color: white;
        border: 1px solid #FFB03A;
    }
    
    `

}