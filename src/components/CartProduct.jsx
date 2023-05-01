import styles from './CartProduct.module.css';
const CartProduct = ({ product, addProduct, removeProduct }) => {
	return (
		<div>
			<br></br>
			<br></br>
			<img width={200} height={200} src={product.thumbnail} />
			<p>{product.name}</p>
			<p>$ {product.price}</p>
			<p>{product.description}</p>
			<div className={styles.add_remove}>
				<button onClick={() => removeProduct(product)}>-</button>
				<p>{product.quantity}</p>
				<button onClick={() => addProduct(product)}>+</button>
			</div>
			<br></br>
			<br></br>
		</div>
	);
};

export default CartProduct;
