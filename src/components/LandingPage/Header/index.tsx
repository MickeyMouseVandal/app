import Header from '../../Header/Header'
import { Styles as S } from './styled'


export default function HeaderLandingPage(){

    return (
        <>
         <S.GradientDiv>
        <Header white={true}/>
        <S.TextDiv>
            <S.Text>Brilhando como ouro em todo o seu estilo.</S.Text>
        </S.TextDiv>
        <S.MoreDiv>
         <S.LargeText>Novos itens chegaram!</S.LargeText>
         <S.TextMoreDiv>Renove seu estilo com nossos itens renovadores e reluzentes.</S.TextMoreDiv>
         <S.MoreButton target="items">Veja mais!</S.MoreButton>
        </S.MoreDiv>
     </S.GradientDiv>
        </>
    
    )
}