import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"
import { useAppContext } from "../../context/hook"
import { Styles as S} from './styled'

export interface IItem {
    description?: string,
    name: string,
    price: string,
    quantity?: string,
    imgURL: string
}

export interface ICart {
    items: IItem[] | []
}

export default function Cart(){
    const {state} = useAppContext()

    return (
        <>
        <S.Wrapper>
        <Header white={false}/>
        <S.ItemsDiv>
            {state.items.length > 0 ? state.items.map(item => (
                <S.ItemDiv>
                    <S.ItemImg src={item.imgURL}/>
                    <S.ItemName>{item.name}</S.ItemName>
                    <S.ItemPrice>{item.price}</S.ItemPrice>
                </S.ItemDiv>
            )) : <S.NothingToShowDiv>
                <S.ItemName>Não há nenhum item aqui</S.ItemName>
                </S.NothingToShowDiv>}
        </S.ItemsDiv>
        <Footer/>
        </S.Wrapper>
        </>
    )
}