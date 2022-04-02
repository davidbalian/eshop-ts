import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Type from "./Components/Type/Type";

const App = () => {
	return (
		<>
			<Router>
				<Navbar />
				<div className='content'>
					<Routes>
						<Route path='/products/:category/:type' element={<Type />} />
						<Route path='/' element={<Home />} />
					</Routes>
				</div>
			</Router>
		</>
	);
};

export default App;
