import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";

const App = () => {
	return (
		<>
			<Router>
				<Navbar />
				<div className='content'>
					<Routes>
						<Route path='/' element={<Home />} />
					</Routes>
				</div>
			</Router>
		</>
	);
};

export default App;
