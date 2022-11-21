import { useContext } from "react"
import { Link } from "react-router-dom"
import { formatPrice } from "../../../utils/format"
import { StoreContext } from "../../context/store"
import { Styles as S } from "./styled"

export default function LandingPageBody(){
    const { items } = useContext(StoreContext)

    return (
        <>
        <S.Section>
            <S.SectionTitle id="items">Novos produtos</S.SectionTitle>
            <S.CardsDiv>
                {items.map(item => (
                    <Link to={`/products/${item.id}`}>
                        <S.ItemLink key={item.id}>
                            <S.ItemCard>         
                                <S.ItemImg src={item.thumb} />
                                <S.CardDescriptionDiv>
                                    <S.CardDescriptionText>{item.name}</S.CardDescriptionText>
                                    <S.CardDescriptionText>{formatPrice(item.price)}</S.CardDescriptionText>
                                </S.CardDescriptionDiv> 
                            </S.ItemCard>
                        </S.ItemLink> 
                    </Link>
                ))}
            </S.CardsDiv>
        </S.Section>
        <S.SectionBottom>
        <S.SectionTitle id="trending">Em alta</S.SectionTitle>
        <S.CardsDiv>
        {items.map(item => (
                    <Link to={`/products/${item.id}`}>
                        <S.ItemLink key={item.id}>
                            <S.ItemCard>         
                                <S.ItemImg src={item.thumb} />
                                <S.CardDescriptionDiv>
                                    <S.CardDescriptionText>{item.name}</S.CardDescriptionText>
                                    <S.CardDescriptionText>{formatPrice(item.price)}</S.CardDescriptionText>
                                </S.CardDescriptionDiv> 
                            </S.ItemCard>
                        </S.ItemLink> 
                    </Link>
                ))}
            </S.CardsDiv>
        </S.SectionBottom>
        </>
    )
}