import {Products} from '../interface/Products';

export const getProducts = async (): Promise<Products[]> => {
	try {
		const response = await fetch('/db.json');

		if (response.ok) {
			const data = await response.json();
			return data.products;
		} else {
			throw new Error('Failed to fetch');
		}
	} catch (error) {
		throw new Error('Network error');
	}
};

export const createProduct = async (product: Products): Promise<Products> => {
	try {
		const response = await fetch('https://www.amiiboapi.com/api/', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(product),
		});

		if (response.ok) {
			const data = await response.json();
			return data.products;
		} else {
			throw new Error('Fail to create product');
		}
	} catch (error) {
		throw new Error('Nerwork error');
	}
};
