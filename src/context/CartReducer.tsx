import {CartProduct} from '../interface/Products';

export interface CartState {
	cartItems: CartProduct[];
}

export const initialState: CartState = {
	cartItems: [],
};

export interface CartAction {
	type: 'ADD_TO_CART' | 'REMOVE_FROM_CART' | 'CLEAN_CART';
	payload: CartProduct;
}

export const Reducer = (state: CartState, action: CartAction) => {
	switch (action.type) {
		case 'ADD_TO_CART': {
			const {id} = action.payload;
			const existingItem = state.cartItems.find((item) => item.id === id);

			if (existingItem) {
				return {
					...state,
					cartItems: state.cartItems.map((item) => (item.id === id ? {...existingItem, quantity: existingItem.quantity + 1} : item)),
				};
			} else {
				return {
					...state,
					cartItems: [...state.cartItems, action.payload],
				};
			}
		}
		case 'REMOVE_FROM_CART': {
			const {id: removeItemId} = action.payload;
			const removeItem = state.cartItems.find((item) => item.id === removeItemId);

			if (removeItem) {
				if (removeItem.quantity === 1) {
					return {
						...state,
						cartItems: state.cartItems.filter((item) => item.id !== removeItemId),
					};
				} else {
					return {
						...state,
						cartItems: state.cartItems.map((item) =>
							item.id === removeItemId ? {...removeItem, quantity: removeItem.quantity - 1} : item
						),
					};
				}
			}
			return state;
		}
		case 'CLEAN_CART': {
			return {
				...state,
				cartItems: [],
			};
		}
		default:
			return state;
	}
};
