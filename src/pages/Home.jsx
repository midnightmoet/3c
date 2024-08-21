import React from "react";
import {
	Container,
	Typography,
	Card,
	CardContent,
} from "@mui/material";
import "../styles/Home.css";

const Home = () => {
	return (
		<Container maxWidth="lg" className="home-container">
			<Card>
				<CardContent>
					<Typography variant="h5" component="h2" className="about" gutterBottom>
						About Us
					</Typography>
					<Typography variant="body1">
						We are a company dedicated to providing high-quality services and products.
						Our mission is to make a positive impact on the world through innovation and sustainability.
					</Typography>
				</CardContent>
			</Card>
		</Container>
	);
};

export default Home;
