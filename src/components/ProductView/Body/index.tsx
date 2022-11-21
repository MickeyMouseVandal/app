import Item from "./Item";
import { Item as ItemEntity } from "../../../entities/item";

export default function Body(props: ItemEntity){
    return (
        <>
        <Item 
            {...props}
        />
        </>
    )
}

