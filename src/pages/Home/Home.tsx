import {useQuery} from 'react-query';
import {Toaster} from 'sonner';
import {Card} from '../../components/ui/Card/Card';
import {Hero} from '../../components/ui/Hero/Hero';
import {getProducts} from '../../service/products.service';
import styles from './Home.module.css';
import {useState} from 'react';

const Home = () => {
	const [page, setPage] = useState(1);

	const {data, isLoading, error} = useQuery('prodcuts', getProducts);

	const limit = 24;
	const lastProduct = page * limit;
	const firstProduct = lastProduct - limit;

	const currentProducts = data?.slice(firstProduct, lastProduct);

	return (
		<>
			<Hero />
			<Toaster richColors />
			{isLoading && <p>Loading...</p>}
			{error && <p>Something went wrong</p>}
			<div className={styles.container}>
				{currentProducts?.map((product) => (
					<Card key={product.tail} product={product} />
				))}
			</div>
			<div className={styles.paginationContainer}>
				<button className={styles.paginationButton} disabled={page === 1} onClick={() => setPage(page - 1)}>
					Previous page
				</button>
				<div>
					<span>{page}</span>
				</div>
				<button className={styles.paginationButton} disabled={lastProduct >= (data?.length || 0)} onClick={() => setPage(page + 1)}>
					Next page
				</button>
			</div>
		</>
	);
};

export default Home;
