import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { Menu, ShoppingCart, ArrowRight } from "react-feather";
import { Link } from "react-router-dom";
import Navlink from "../Navlink/Navlink";

const Navbar = () => {
	const [clicked, setClicked] = useState(false);
	const [openNavbar, setOpenNavbar] = useState(false);

	const categories = ["fruits", "vegetables"];
	const fruitTypes = ["apples", "citrus", "stone fruit", "berries", "melons"];
	const vegetableTypes = ["leafy green", "cruciferous", "marrow", "root", "allium"];

	useEffect(() => {
		setOpenNavbar(clicked);
	}, [clicked]);

	return (
		<div className='navbar'>
			<Menu
				className={openNavbar ? "icon turn-right" : "icon turn-left"}
				onClick={() => {
					setClicked(!clicked);
				}}
			/>
			<div className={`navlinks ${openNavbar ? "remove" : "add"}-margin`}>
				<div className='navlink-and-icon'>
					<Navlink
						title={categories[0]}
						types={fruitTypes}
						cat={"fruits"}
						open={openNavbar}
						setOpen={setOpenNavbar}
					/>
					<ArrowRight className='icon-dark icon icon-small' />
				</div>
				<div className='navlink-and-icon'>
					<Navlink
						title={categories[1]}
						types={vegetableTypes}
						open={openNavbar}
						cat={"vegetables"}
						setOpen={setOpenNavbar}
					/>
					<ArrowRight className='icon-dark icon icon-small' />
				</div>
			</div>
			<Link to='/'>
				<h1 className='logo'>Buddy David's</h1>
			</Link>
			<Link to='/cart'>
				<ShoppingCart className='icon-light icon' />
			</Link>
		</div>
	);
};

export default Navbar;
