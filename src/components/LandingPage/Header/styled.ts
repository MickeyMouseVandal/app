import styled from "styled-components";

export const Styles = {

    GradientDiv : styled.div`
    width: 100%;
    height: 100em;
    background-color:  #0D0D0D;
`,

    TextDiv : styled.div`
    display: flex;
    width: 37rem;
    padding-left: 2rem;
    padding-top: 2rem;
    padding-bottom: 3rem;
    `,
    
    Text : styled.p`
    font-family: 'Work Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 46px;
    color: white;
    `,

    MoreDiv : styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    z-index: 3;
    position: absolute;
    background-color: #080808;
    width: 70vw;
    height: 26rem;
    margin-inline: 13.5rem;
    padding: 4rem;
    border-radius: 10px;
    `,

    Aligner : styled.div`
    display: flex;
    justify-content: center;
    width: 100vw;
    margin-bottom: 5rem;
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

    MoreButton : styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #FFB03A;
    text-decoration: none;
    color: white;
    font-size: 16px;
    width: 10em;
    height: 7em;
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