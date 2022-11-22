
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Footer from '../../components/Footer'
import Header from '../../components/Header/Header'
import LandingPageBody from '../../components/LandingPage/Body'
import HeaderLandingPage from '../../components/LandingPage/Header'
import { Styles as S } from './styled'

export default function LandingPage(){


    return(
     <S.Wrapper>
        <HeaderLandingPage/>
        <LandingPageBody/>
        <Footer/>
     </S.Wrapper>
    )
}