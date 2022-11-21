import Header from '../../Header/Header'
import { Styles as S } from './styled'


export default function HeaderLandingPage(){

    return (
        <>
         <S.GradientDiv>
        <Header url="/cart" white={true}/>
        <S.TextDiv>
            <S.Text>Brilhando como ouro em todo o seu estilo.</S.Text>
        </S.TextDiv>
        <S.Aligner>
        <S.MoreDiv>
         <S.LargeText>Novos itens chegaram!</S.LargeText>
         <S.TextMoreDiv>Renove seu estilo com nossos itens renovadores e reluzentes.</S.TextMoreDiv>
         <S.MoreButton href="#items">Veja mais!</S.MoreButton>
        </S.MoreDiv>
        </S.Aligner>
     </S.GradientDiv>
        </>
    
    )
}