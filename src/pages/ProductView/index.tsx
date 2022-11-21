import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"
import { Styles as S } from "./styled"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { IItem } from "../Cart"
import Body from "../../components/ProductView/Body"

export interface URLs {
    url: string
}

export default function ProductView(){

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
    })

    return (
        <>
        <S.Wrapper>
            <Header url={"/carrinho/" + id}/>
            <Body 
            name={item.name} 
            description={item.description} 
            imgURL={item.imgURL}
            price={item.price}
            />
            <Footer/>
        </S.Wrapper>
        </>
    )
}