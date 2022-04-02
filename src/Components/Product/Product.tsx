import React from "react";
import "./Product.css";

interface ProductProps {
	title: string;
	price: number;
	src: string;
}

const Product = ({ title, price, src }: ProductProps) => {
	return (
		<div className='product'>
			<img src={src} alt='' />
			<div>
				<h1>{title}</h1>
				<p>{price}</p>
			</div>
		</div>
	);
};

export default Product;
