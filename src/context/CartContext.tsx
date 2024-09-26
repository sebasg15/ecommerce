import {createContext, Dispatch} from 'react';
import {CartAction, CartState} from './CartReducer';

interface CartContextType {
	state: CartState;
	dispatch: Dispatch<CartAction>;
}

export const CartContext = createContext({} as CartContextType);
