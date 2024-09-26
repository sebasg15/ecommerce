import Logo from '../../../assets/logo.png';
import Cart from '../../../assets/cart.png';
import styles from './Navbar.module.css';
import {useState} from 'react';
import {CartModal} from '../Cart/CartModal';
import useCartContext from '../../../hooks/useCartContext';
import {useLocation, useNavigate} from 'react-router-dom';

export const Navbar = () => {
	const [showCartModal, setShowCartModal] = useState(false);
	const navigate = useNavigate();
	const location = useLocation();

	const HandleNavigateToHome = () => {
		navigate('/');
	};

	const handleShowCartModal = () => {
		setShowCartModal(!showCartModal);
	};

	const {
		state: {cartItems},
	} = useCartContext();

	return (
		<div className={styles.navbarContainer}>
			<div className={styles.navbarDetail} onClick={HandleNavigateToHome}>
				<img src={Logo} alt='logo ecommerce' width={50} height={50} />
				<div>
					<span>DH Ecommerce</span>
				</div>
			</div>

			{location.pathname !== '/checkout' && (
				<>
					<div className={styles.navbarCartContainer}>
						{cartItems.length !== 0 && <p className={styles.navbarTextAmount}>{cartItems.length}</p>}
						<img src={Cart} alt='cart' onClick={handleShowCartModal} />
					</div>
					{showCartModal && <CartModal handleShowCartModal={handleShowCartModal} />}
				</>
			)}
		</div>
	);
};
