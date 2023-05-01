import { useEffect, useState } from 'react';

const ProductsAdded = ({ cart }) => {
	const [totalUnits, setTotalUnits] = useState(0);
	useEffect(() => {
		let myTotalUnits = 0;

		cart.forEach(product => {
			myTotalUnits = myTotalUnits + product.quantity;
		});

		setTotalUnits(myTotalUnits);
	}, [cart]);
	return (
		<>
			<div>
				<div>Productos {totalUnits}</div>
			</div>
		</>
	);
};

export default ProductsAdded;
