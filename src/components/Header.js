import React from 'react';
import {Link} from 'react-router-dom'

//This is a functional component as opposed to 
//a class component.
function Header() {
	return (
		<header style={headerStyle}>
			<h1>Todo List</h1>
			<Link style={linkStyle} to="/">HOME</Link>
			<Link style={linkStyle} to="/about">ABOUT</Link>
		</header>
	);
}

const headerStyle = {
	textAlign: 'center',
	background: '#333333',
	color: '#ffffff',
	padding: '10px'
};

const linkStyle = {
	color: '#ffffff',
	padding: '5px 100px',
};

export default Header;