import { Styles as S } from "./styled";

interface IHeader {
    white? : boolean
    url: string
}


export default function Header(props: IHeader){

    return (
        <>
        <S.Header>
            {props.white ? <S.logoVandalWhite href="/"/> :  <S.logoVandal href="/"/>}
            <S.IconsDiv>
                {props.white ? <S.cartIconWhite href={props.url}/> : <S.cartIcon href={props.url}/>}
                {props.white ? <S.profileIconWhite href="/cadastrar"/> : <S.profileIcon href="/cadastrar"/>}
            </S.IconsDiv>
        </S.Header>
        </>
    )
}