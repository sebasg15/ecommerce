import {FC, ReactNode, useReducer} from 'react';
import {initialState, Reducer} from './CartReducer';
import {CartContext} from './CartContext';

interface CartProvideProps {
	children: ReactNode;
}

export const CartProvider: FC<CartProvideProps> = ({children}) => {
	const [state, dispatch] = useReducer(Reducer, initialState);

	return <CartContext.Provider value={{state, dispatch}}>{children}</CartContext.Provider>;
};
