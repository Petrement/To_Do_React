import React from "react";
import List from "./todoList.jsx";


//create your first component
const Home = () => {
	return (
		<div className="container-fluid bg-secondary.bg-gradient w-25 mt-5 shadows">
			<List/>
		</div>
	);
};

export default Home;