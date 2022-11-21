import Item from "./Item";
import { IItem } from "../../../pages/Cart";
import { useState } from "react";



export default function Body(props: IItem){


    return (
        <>
        <Item 
        name={props.name} 
        description={props.description} 
        imgURL={props.imgURL}
        price={props.price}
        />
        </>
    )
}

