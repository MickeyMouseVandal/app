import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"
import { Styles as S} from './styled'
import { useState, useEffect } from "react"
import { redirect, useParams, Navigate } from "react-router-dom"

export interface IItem {
    description?: string,
    name: string,
    price: string,
    quantity?: string,
    imgURL: string
}

export interface ICart {
    items: IItem[] | []
}

export default function Cart(){
    
    let { id } = useParams()
    
    const [item, setItem] = useState<IItem>({
        name: "",
        description: "",
        price: "",
        imgURL: ""
    })

    useEffect(() => {
        switch(id){
            case "1" :{
            setItem(
                {
                    name: "Mickey Ring",
                    description: "Silver Made",
                    price: "R$13.000,00",
                    imgURL: "../src/assets/img/mickey-ring.jpg"
                }
            )
            break;
            }
            case "2" :{
                setItem(
                    {
                        name: "Heart Ring",
                        description: "Gold Made",
                        price: "R$10.000,00",
                        imgURL: "../src/assets/img/heart-ring.jpg"
                    }
                )
            break;
            }
            case "3" : {
                setItem(
                    {
                        name: "Flower Ring",
                        description: "Platinum Made",
                        price: "R$14.000,00",
                        imgURL: "../src/assets/img/flower-ring.jpg"
                    }
                )
            }
        }

    },[])

    console.log(item)

    return (
        <>
        <S.Wrapper>
        <Header url="/*"/>
        <S.Container>
        <S.ItemsDiv>
          <S.ItemDiv>
          <S.ItemImg src={item.imgURL}/>
          <S.ItemDescription>
          <S.ItemName>{item.name}</S.ItemName>
            <S.ItemPrice> {item.price}</S.ItemPrice>
          </S.ItemDescription>
          </S.ItemDiv>
        </S.ItemsDiv>
        <S.PaymentDiv>
        <S.PayButton href="/compra-feita">Pagar</S.PayButton>
        </S.PaymentDiv>
        </S.Container>
      
        <Footer/>
        </S.Wrapper>
        </>
    )
}