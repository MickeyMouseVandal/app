import { createContext } from "react";
import { ICart, IItem } from "../pages/Cart";

export const INITIAL_STATE = <ICart>{
    items : [],
}


export const AppContext = createContext({
    state: INITIAL_STATE,
    setItems: (items: IItem[] | []) => {
        INITIAL_STATE.items = items
    }
})