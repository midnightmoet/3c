import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import "../styles/Footer.css";

const Footer = () => {
	return (
		<footer className="footer-container">

			<div className="footer-social-icons">
				<a
					href="https://facebook.com"
					target="_blank"
					rel="noopener noreferrer"
				>
					<FaFacebook />
				</a>
				<a
					href="https://twitter.com"
					target="_blank"
					rel="noopener noreferrer"
				>
					<FaTwitter />
				</a>
				<a
					href="https://instagram.com"
					target="_blank"
					rel="noopener noreferrer"
				>
					<FaInstagram />
				</a>
				<a
					href="https://linkedin.com"
					target="_blank"
					rel="noopener noreferrer"
				>
					<FaLinkedin />
				</a>
			</div>
			<div className="footer-copyright">
				<small>
					© 2023 3C - Champagne Creative Creations est. 1993. All
					rights reserved.
				</small>
			</div>
		</footer>
	);
};

export default Footer;
