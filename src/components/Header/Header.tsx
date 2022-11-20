import { Styles as S } from "./styled";

interface IHeader {
    white? : boolean
}


export default function Header(props: IHeader){

    return (
        <>
        <S.Header>
            {props.white ? <S.logoVandalWhite href="/"/> :  <S.logoVandal href="/"/>}
            <S.IconsDiv>
                {props.white ? <S.cartIconWhite href="/carrinho"/> : <S.cartIcon href="/carrinho"/>}
                {props.white ? <S.profileIconWhite href="/cadastrar"/> : <S.profileIcon href="/cadastrar"/>}
            </S.IconsDiv>
        </S.Header>
        </>
    )
}