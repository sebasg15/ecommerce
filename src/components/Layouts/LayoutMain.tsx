import {Outlet} from 'react-router-dom';
import {Navbar} from '../ui/Navbar/Navbar';

export default function LayoutMain() {
	return (
		<div>
			<Navbar />
			<Outlet />
		</div>
	);
}
