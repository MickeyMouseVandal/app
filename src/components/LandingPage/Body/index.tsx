import { Styles as S } from "./styled"
import { Carousel } from 'react-responsive-carousel';


export default function LandingPageBody(){

    const URLs = {
        mickey: "../src/assets/img/mickey-ring.jpg",
        heart: "../src/assets/img/heart-ring.jpg",
        flower: "../src/assets/img/flower-ring.jpg"
    }

    return (
        <>
        <S.Section>
            <S.SectionTitle id="items">Novos produtos</S.SectionTitle>
            <S.CardsDiv>
            <S.ItemLink href="/ver-produto/1">
                <S.ItemCard>         
                    <S.ItemImg src="../src/assets/img/mickey-ring.jpg"/>
                    <S.CardDescriptionDiv>
                        <S.CardDescriptionText>Mickey Ring</S.CardDescriptionText>
                        <S.CardDescriptionText>R$13.000,00</S.CardDescriptionText>
                    </S.CardDescriptionDiv> 
                </S.ItemCard>
            </S.ItemLink>
            <S.ItemLink href="/ver-produto/2">
            <S.ItemCard>
                    <S.ItemImg src="../src/assets/img/heart-ring.jpg"/>
                    <S.CardDescriptionDiv>
                        <S.CardDescriptionText>Heart Ring</S.CardDescriptionText>
                        <S.CardDescriptionText>R$10.000,00</S.CardDescriptionText>
                    </S.CardDescriptionDiv>
                </S.ItemCard>
            </S.ItemLink>
            <S.ItemLink href="/ver-produto/3">
            <S.ItemCard>
                    <S.ItemImg src="../src/assets/img/flower-ring.jpg"/>
                    <S.CardDescriptionDiv>
                        <S.CardDescriptionText>Flower Ring</S.CardDescriptionText>
                        <S.CardDescriptionText>R$16.000,00</S.CardDescriptionText>
                    </S.CardDescriptionDiv>
                </S.ItemCard>
            </S.ItemLink>  
            </S.CardsDiv>
        </S.Section>
        <S.SectionBottom>
        <S.SectionTitle id="trending">Em alta</S.SectionTitle>
            <S.CardsDiv>
            <S.ItemLink href="/ver-produto/1">
                <S.ItemCard>         
                    <S.ItemImg src="../src/assets/img/mickey-ring.jpg"/>
                    <S.CardDescriptionDiv>
                        <S.CardDescriptionText>Mickey Ring</S.CardDescriptionText>
                        <S.CardDescriptionText>R$13.000,00</S.CardDescriptionText>
                    </S.CardDescriptionDiv> 
                </S.ItemCard>
            </S.ItemLink>
            <S.ItemLink href="/ver-produto/2">
            <S.ItemCard>
                    <S.ItemImg src="../src/assets/img/heart-ring.jpg"/>
                    <S.CardDescriptionDiv>
                        <S.CardDescriptionText>Heart Ring</S.CardDescriptionText>
                        <S.CardDescriptionText>R$10.000,00</S.CardDescriptionText>
                    </S.CardDescriptionDiv>
                </S.ItemCard>
            </S.ItemLink>
            <S.ItemLink href="/ver-produto/3">
            <S.ItemCard>
                    <S.ItemImg src="../src/assets/img/flower-ring.jpg"/>
                    <S.CardDescriptionDiv>
                        <S.CardDescriptionText>Flower Ring</S.CardDescriptionText>
                        <S.CardDescriptionText>R$16.000,00</S.CardDescriptionText>
                    </S.CardDescriptionDiv>
                </S.ItemCard>
            </S.ItemLink>  
            </S.CardsDiv>
        </S.SectionBottom>
        
        </>
    )
}