import React from "react";
import { useParams } from "react-router-dom";
import "./Type.css";

const Type = () => {
	let { type } = useParams();

	return <div>Ehe type is {type}</div>;
};

export default Type;
