import ProductImage from './ProductImage';

const Product = ({ product, addProduct }) => {
	return (
		<div>
			<ProductImage url={product.thumbnail}></ProductImage>
			<p>{product.name}</p>
			<p>$ {product.price}</p>
			{/* <p>{product.stock}</p> */}
			<p>{product.description}</p>
			<button onClick={() => addProduct(product)}>Agregar al carrito</button>
			<br />
			<br />
		</div>
	);
};

export default Product;
