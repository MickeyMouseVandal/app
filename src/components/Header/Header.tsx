import { Link } from "react-router-dom";
import { Styles as S } from "./styled";

interface IHeader {
    white? : boolean
    url: string
}


export default function Header(props: IHeader){
    return (
        <>
        <S.Header>
            <Link to="/LandingPage">
                {props.white ? <S.logoVandalWhite /> :  <S.logoVandal />}
            </Link>
            <S.IconsDiv>
                <Link to={props.url}>
                    {props.white ? <S.cartIconWhite /> : <S.cartIcon />}
                </Link>
            </S.IconsDiv>
        </S.Header>
        </>
    )
}