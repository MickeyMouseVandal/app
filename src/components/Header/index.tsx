import { Styles as S } from "./styled";


export default function Header(){

    return (
        <>
        <S.Header>
            <S.logoVandal href="/"/>
            <S.IconsDiv>
                <S.cartIcon href="/carrinho"/>
                <S.profileIcon href="/cadastrar"/>
            </S.IconsDiv>
        </S.Header>
        </>
    )
}