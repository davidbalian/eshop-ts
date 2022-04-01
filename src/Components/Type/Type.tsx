import React from "react";
import { useParams } from "react-router-dom";
import "./Type.css";

const Type = () => {
	const { type } = useParams();

	return <div>{type}</div>;
};

export default Type;
