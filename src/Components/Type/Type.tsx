import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Type.css";
import { products } from "../../products";
import Product from "../Product/Product";

const Type = () => {
	let { type, category } = useParams();
	const [prods, setProds] = useState<
		Array<{
			title: string;
			price: number;
			src: string;
		}>
	>([]);

	useEffect(() => {
		for (let i = 0; i < products.length; i++) {
			if (products[i].category === category) {
				for (let j = 0; j < products[i].types.length; j++) {
					if (products[i].types[j].title === type) {
						setProds(products[i].types[j].prods);
					}
				}
			}
		}
	}, [type]);

	return (
		<div className='type'>
			<h1 style={{ textTransform: "capitalize" }}>{type}</h1>
			<div className='products'>
				{prods.map((prod) => (
					<>
						<Product title={prod.title} price={prod.price} src={prod.src} />
					</>
				))}
			</div>
		</div>
	);
};

export default Type;
