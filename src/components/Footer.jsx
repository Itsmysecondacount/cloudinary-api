import React from 'react';
import logoCloudinary from '../assets/cloudinary.svg';
import '../Styles/Footer.scss';

const Footer = () => {
	return (
		<footer>
			Hecho con <img src={logoCloudinary} className="logo-cloudinary" alt="My SVG" />
		</footer>
	);
};

export default Footer;
