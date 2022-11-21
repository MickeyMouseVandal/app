import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"
import { Styles as S} from "../ProductView/styled"
import styled from "styled-components"

export default function ShopDone(){

    const Body = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        width: 100vw;
    `

    const Text = styled.p`
        color: green;
        font-family: 'Work Sans';
        font-size: 70px;
    `

    return (
        <>
        <S.Wrapper>
            <Header url="/"/>
             <Body>
                <Text>
                    Parabéns pela sua compra!
                </Text>
             </Body>
            <Footer/>
        </S.Wrapper>
        </>
    )
}