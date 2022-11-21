import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"
import { Styles as S} from './styled'
import { useContext } from "react"
import { StoreContext } from "../../components/context/store"
import { Link } from "react-router-dom"
import { formatPrice } from "../../utils/format"

export default function Cart(){
    const { cart } = useContext(StoreContext)
    
    return (
        <>
        <S.Wrapper>
        <Header url="/cart"/>
        <S.Container>
        <S.ItemsDiv>
            {cart.map(item => (
                <S.ItemDiv key={item.id}>
                    <S.ItemImg src={item.thumb}/>
                    <S.ItemDescription>
                    <S.ItemName>{item.name}</S.ItemName>
                        <S.ItemPrice>{formatPrice(item.price)}</S.ItemPrice>
                    </S.ItemDescription>
                </S.ItemDiv>
            ))}
          
        </S.ItemsDiv>
        <S.PaymentDiv>
        <Link to="/cart/done">
        <S.PayButton>Pagar</S.PayButton>
        </Link>
        </S.PaymentDiv>
        </S.Container>
        <Footer/>
        </S.Wrapper>
        </>
    )
}