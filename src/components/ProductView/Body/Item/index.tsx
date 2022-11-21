import { useState } from "react"
import { useAppContext } from "../../../../context/hook"
import { IItem } from "../../../../pages/Cart"
import { Styles as S} from './styled'


export default function Item(props: IItem){

    const {state, setItems} = useAppContext()


    return (
        <>
        <S.TopDiv>
            <S.GoBackDiv>
            </S.GoBackDiv>
            <S.ItemImg src={props.imgURL}/>
            <S.ItemDiv>
                <S.ItemName>{props.name}</S.ItemName>
                <S.ItemMaterial>{props.description}</S.ItemMaterial>
                <S.ItemPrice>{props.price}</S.ItemPrice>
                <S.AddToCartButton onClick={() => setItems(
                 [...state.items , {
                    name: props.name,
                    price: props.price,
                    imgURL: props.imgURL
                 }]
                )}>Adicionar ao carrinho</S.AddToCartButton>
            </S.ItemDiv>
        </S.TopDiv>
        <S.BottomDiv>
            <S.Title>Avaliação</S.Title>
            <S.Text>Ninguém avaliou esse produto ainda</S.Text>
        </S.BottomDiv>
        </>
    )
}