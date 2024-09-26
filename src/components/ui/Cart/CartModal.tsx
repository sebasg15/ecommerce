import {FC} from 'react';
import Close from '../../../assets/close.png';
import styles from './CartModal.module.css';
import {Table} from '../Table/Table';
import {useNavigate} from 'react-router-dom';

interface Props {
	handleShowCartModal: () => void;
}

export const CartModal: FC<Props> = ({handleShowCartModal}) => {
	const navigate = useNavigate();

	const handleCheckout = () => {
		navigate('/checkout');
		handleShowCartModal();
	};

	return (
		<div className={styles.modalContainer}>
			<button className={styles.modalCloseButton} onClick={handleShowCartModal}>
				<img src={Close} alt='' width={20} height={20} />
			</button>
			<Table />
			<div className={styles.modalButtonContainer}>
				<button onClick={handleCheckout}>Checkout</button>
			</div>
		</div>
	);
};
