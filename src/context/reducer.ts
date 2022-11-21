import { INITIAL_STATE} from "."
import App from "../App";
import { AppContextActions } from "../enums/AppContextActions";
import { ICart, IItem } from "../pages/Cart";


interface IDispacthAction {
    type: AppContextActions;
    items?: IItem[] | []
}

export const appContextReducer = (state = INITIAL_STATE, action: IDispacthAction) => {
   switch(action.type) {
     case AppContextActions.SetItems:        
        return {
            ...state,
            items : state.items
        }
   }
}