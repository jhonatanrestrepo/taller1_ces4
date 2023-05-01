const ProductImage = ({ url }) => {
	return (
		<div className='i'>
			<img src={url} width={200} height={200}></img>
		</div>
	);
};

export default ProductImage;
