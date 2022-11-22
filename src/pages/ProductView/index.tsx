import Footer from "../../components/Footer"
import Header from "../../components/Header/Header"
import { Styles as S } from "./styled"
import { useContext } from "react"
import { useParams } from "react-router-dom"
import Body from "../../components/ProductView/Body"
import { StoreContext } from "../../components/context/store"

export default function ProductView(){
    let { id } = useParams()
    const { items } = useContext(StoreContext)
    const selectedItem = items.find(item => item.id === id)!

    console.log(items, selectedItem)

    return (
        <>
        <S.Wrapper>
            <Header url={`/cart/${id}`}/>
            <Body 
                {...selectedItem}
            />
            <Footer/>
        </S.Wrapper>
        </>
    )
}