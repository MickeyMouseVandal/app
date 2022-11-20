import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"
import { Styles as S } from "./styled"

export interface URLs {
    url: string
}
export interface IProductView {
    imgURLs? : URLs[]
}

export default function ProductView(props: IProductView){

    return (
        <>
        <S.Wrapper>
            <Header/>
            <Footer/>
        </S.Wrapper>
        </>
    )
}