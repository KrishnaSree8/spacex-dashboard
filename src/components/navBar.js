import React from "react";
import image from '../data/logo.png'
function Navbar() {
	return (
		<div className="header-container center-div">
			<div className="logo-container">
				<img src={image} alt="spacex-logo" />
			</div>
		</div>
	);
}

export default Navbar;