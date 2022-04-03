import React, { useState } from "react";
import { Minus, MinusSquare, Plus, PlusSquare } from "react-feather";
import "./Product.css";

interface ProductProps {
	title: string;
	price: number;
	src: string;
}

const Product = ({ title, price, src }: ProductProps) => {
	const [productCount, setProductCount] = useState(0);

	return (
		<div className='product'>
			<img src={src} alt='' />
			<div className='text'>
				<div className='info'>
					<h2>{title}</h2>
					<p>€ {price}</p>
				</div>
				<div className='cart-buttons'>
					{productCount ? (
						<Minus
							className='icon icon-dark'
							onClick={() => {
								setProductCount(productCount - 1);
							}}
						/>
					) : null}
					{productCount ? (
						<p>{productCount}</p>
					) : (
						<p
							onClick={() => {
								setProductCount(productCount + 1);
							}}
							style={{ cursor: "pointer" }}
						>
							Add Item
						</p>
					)}

					{productCount ? (
						<Plus
							className='icon icon-dark'
							onClick={() => {
								setProductCount(productCount + 1);
							}}
						/>
					) : null}
				</div>
			</div>
		</div>
	);
};

export default Product;
