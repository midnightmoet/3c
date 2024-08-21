import React from "react"
import {
	Container,
	Typography,
	Card,
	CardContent,
	Box,
} from "@mui/material"
import "../styles/Home.css"
import champagneImage from "../assets/Champagne.png"

const Home = () => {
	return (
		<Container maxWidth="lg" className="home-container">
			<Card>
				<CardContent>
					<Box
						component="img"
						sx={{
							width: "100%",
							maxWidth: 150,
							height: "auto",
							display: "block",
							margin: "0 auto",
							marginBottom: 2,
						}}
						alt="Champagne"
						src={champagneImage}
					/>
					<Typography variant="body1">
						We are a company dedicated to providing high-quality services and products.
						Our mission is to make a positive impact on the world through innovation and sustainability.
					</Typography>
				</CardContent>
			</Card>
		</Container>
	)
}

export default Home
