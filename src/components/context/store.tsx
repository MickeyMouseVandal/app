import { createContext, useState } from "react";
import * as uuid from 'uuid'
import { Item } from "../../entities/item";

interface StoreContract {
    items: Item[]
    cart: Item[]
    addItem: Function
    removeItem: Function
}

export const StoreContext = createContext({} as StoreContract)

const items: Item[] = [
    new Item('1', 'Mickey Ring', 'Silver Made', '../src/assets/img/mickey-ring.jpg', 13000),
    new Item('2', 'Heart Ring', 'Gold Made', '../src/assets/img/heart-ring.jpg', 10000),
    new Item('3', 'Flower Ring', 'Platinum Made', '../src/assets/img/flower-ring.jpg', 14000),
]

export const Store = ({ children }: any) => {
    const [cart, setCart] = useState<Item[]>([])

    const addItem = (id: string) => {
        const itemToAdd = items.find(item => item.id === id)
        if (!itemToAdd) throw new Error('Item not exists')
        setCart(old => [...old, itemToAdd])
    }

    const removeItem = (id: string) => {
        const filteredCart = cart.filter(item => item.id !== id)
        setCart(filteredCart)
    }

    return (
        <StoreContext.Provider value={{ cart, addItem, removeItem, items }}>
            {children}
        </StoreContext.Provider>
    )
}