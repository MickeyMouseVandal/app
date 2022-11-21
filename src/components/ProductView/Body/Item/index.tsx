import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { Item as ItemEntity } from "../../../../entities/item"
import { formatPrice } from "../../../../utils/format"
import { StoreContext } from "../../../context/store"
import { Styles as S} from './styled'


export default function Item(props: ItemEntity){
    const navigation = useNavigate()
    const { addItem } = useContext(StoreContext)

    const goToCart = () => {
        addItem(props.id)
        navigation('/cart')
    }

    return (
        <>
        <S.TopDiv>
            <S.GoBackDiv />
            <S.ItemImg src={props.thumb}/>
            <S.ItemDiv>
                <S.ItemName>{props.name}</S.ItemName>
                <S.ItemMaterial>{props.description}</S.ItemMaterial>
                <S.ItemPrice>{formatPrice(props.price)}</S.ItemPrice>
                <S.AddToCartButton onClick={goToCart}>Adicionar ao carrinho</S.AddToCartButton>
            </S.ItemDiv>
        </S.TopDiv>
        <S.BottomDiv>
            <S.Title>Avaliação</S.Title>
            <S.Text>Ninguém avaliou esse produto ainda</S.Text>
        </S.BottomDiv>
        </>
    )
}