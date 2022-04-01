import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navlink.css";

interface NavlinkProps {
	title: string;
	types: Array<String>;
	open: boolean;
	setOpen: any;
}

const Navlink = ({ title, types, open, setOpen }: NavlinkProps) => {
	const [display, setDisplay] = useState("none");

	return (
		<div
			className='navlink'
			onClick={() => {
				setDisplay(display === "none" ? "flex" : "none");
			}}
		>
			<p>{title}</p>
			{open ? (
				<div
					className='navsublinks'
					style={{ display: display }}
					onClick={() => {
						setOpen(false);
					}}
				>
					{types.map((singleType) => (
						<Link to={`/${singleType}`} className='navsublink'>
							{singleType}
						</Link>
					))}
				</div>
			) : null}
		</div>
	);
};

export default Navlink;
