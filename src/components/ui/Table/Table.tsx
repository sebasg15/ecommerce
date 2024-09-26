import useCartContext from '../../../hooks/useCartContext';
import {CartProduct} from '../../../interface/Products';
import styles from './Table.module.css';

export function Table() {
	const {
		state: {cartItems},
		dispatch,
	} = useCartContext();

	const removeCart = (item: CartProduct) => {
		dispatch({type: 'REMOVE_FROM_CART', payload: item});
	};
	const addCart = (item: CartProduct) => {
		dispatch({type: 'ADD_TO_CART', payload: item});
	};

	const totalPrice = () => {
		const total = cartItems.reduce((acc, item) => {
			return acc + item.price * item.quantity;
		}, 0);
		return total;
	};

	return (
		<>
			<table className={styles.modalTable}>
				<thead>
					<tr>
						<th>Product</th>
						<th>Delete</th>
						<th>Quantity</th>
						<th>Add</th>
					</tr>
				</thead>
				<tbody>
					{cartItems.map((item) => (
						<tr key={item.id}>
							<td>{item.name}</td>
							<td>
								<button onClick={() => removeCart(item)} className={styles.modalButtonRemove}>
									-1
								</button>
							</td>
							<td>{item.quantity}</td>
							<td>
								<button onClick={() => addCart(item)} className={styles.modalButtonAdd}>
									+1
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
			<div className={styles.modalTotalContainer}>
				<h3>Total: ${totalPrice()}</h3>
			</div>
		</>
	);
}
