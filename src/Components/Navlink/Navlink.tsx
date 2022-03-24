import React from "react";
import { Link } from "react-router-dom";
import "./Navlink.css";

interface NavlinkProps {
	title: string;
	types: Array<String>;
}

const Navlink = ({ title, types }: NavlinkProps) => {
	return (
		<div className='navlink'>
			<p>{title}</p>
			<div className='navsublinks'>
				{types.map((singleType) => (
					<Link to={`${singleType}`} className='navsublink'>
						{singleType}
					</Link>
				))}
			</div>
		</div>
	);
};

export default Navlink;
