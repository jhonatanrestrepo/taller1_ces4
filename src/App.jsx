import ProductsList from './components/ProductsList';
import Cart from './components/Cart';
import {
	FaShoppingCart,
	FaLaptopHouse,
	FaShoppingBag,
	FaClipboardList,
} from 'react-icons/fa';

import './index.css';

// Obtenemos los datos de los productos
import { products } from './data/products';
import { useState } from 'react';
import ProductsAdded from './components/ProductsAdded';
import Summary from './components/Summary';

const App = () => {
	const [cart, setCart] = useState([]);

	const addProduct = product => {
		const tempCart = [...cart];

		const cartProductIndex = cart.findIndex(
			cartProduct => cartProduct.id === product.id
		);
		console.log(cartProductIndex);

		if (cartProductIndex !== -1) {
			const cartProduct = cart.find(
				cartProduct => cartProduct.id === product.id
			);

			if (cartProduct) {
				if (cartProduct.quantity < product.stock) {
					tempCart[cartProductIndex] = {
						...product,
						quantity: cartProduct.quantity + 1,
					};

					setCart(tempCart);
				}
			}
		} else {
			setCart([...tempCart, { ...product, quantity: 1 }]);
		}
	};

	const removeProduct = product => {
		const tempCart = [...cart];

		const cartProductIndex = cart.findIndex(
			cartProduct => cartProduct.id === product.id
		);

		if (tempCart[cartProductIndex].quantity === 1) {
			setCart(tempCart.filter(cartProduct => cartProduct.id !== product.id));
		} else {
			const cartProduct = tempCart.find(
				cartProduct => cartProduct.id === product.id
			);

			if (cartProduct) {
				tempCart[cartProductIndex] = {
					...product,
					quantity: product.quantity - 1,
				};

				setCart(tempCart);
			}
		}
	};

	return (
		<>
			<div className='container_summary'>
				<h3>
					<FaClipboardList></FaClipboardList> Resúmen
				</h3>
				<div className='inline-block'>
					<Summary
						cart={cart} 
					/>
					<div className='cart'>
					<h2>
						<FaShoppingCart></FaShoppingCart>
						<ProductsAdded cart={cart} products={products} />
					</h2>
					<br />
				</div>
				</div>
			</div>
			
			<div className='container_body'>
				<h3>
					{' '}
					<FaShoppingBag /> Productos
				</h3>
				<div className='list_products'>
					<ProductsList products={products} addProduct={addProduct} />
				</div>

				
				<div className='added_products'>
					{cart.length > 0 && (
						<>
							<div className='container_carrito'>
								<h3>
									{' '}
									<FaShoppingCart> </FaShoppingCart> Carrito
								</h3>
								<div className='added_list_products'>
								<Cart
									cart={cart}
									addProduct={addProduct}
									removeProduct={removeProduct}
								/>
								</div>
							</div>
						</>
					)}
				</div>
			</div>
		</>
	);
};

export default App;
