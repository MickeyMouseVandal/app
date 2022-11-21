import { ReactNode, useCallback, useReducer } from 'react'
import { AppContext, INITIAL_STATE } from '.'
import { AppContextActions } from '../enums/AppContextActions';
import { appContextReducer } from './reducer'
import { ICart, IItem } from '../pages/Cart'

interface IProps {
    children: ReactNode
}

export const AppContextProvider = ({children} : IProps) => {

    const [state, dispatch] = useReducer(appContextReducer, INITIAL_STATE);

    const setItems = useCallback((items: IItem[] | []) => {
        dispatch({
           type: AppContextActions.SetItems, 
           items: items
        })
    }, [dispatch])

    return <AppContext.Provider 
    value={{
        state,
        setItems
    }}>
        {children}
    </AppContext.Provider>
}