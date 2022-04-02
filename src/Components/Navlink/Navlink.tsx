import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navlink.css";

interface NavlinkProps {
	title: string;
	types: Array<String>;
	cat: string;
	open: boolean;
	setOpen: any;
}

const Navlink = ({ title, types, cat, open, setOpen }: NavlinkProps) => {
	const [display, setDisplay] = useState(false);

	return (
		<div
			className='navlink'
			onClick={() => {
				setDisplay(!display);
			}}
		>
			<p>{title}</p>
			<div
				className='navsublinks'
				style={{ display: display && open ? "flex" : "none" }}
				onClick={() => {
					setOpen(false);
				}}
			>
				{types.map((singleType) => (
					<Link to={`/products/${cat}/${singleType}`} className='navsublink'>
						{singleType}
					</Link>
				))}
			</div>
		</div>
	);
};

export default Navlink;
