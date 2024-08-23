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
						<p>My journey into entrepreneurship began with a passion for sharing my craft with the world. After years of contemplation, I finally took the leap to establish my own business. As an empath, I possess a unique perspective on life, which has led me to integrate tarot into my repertoire of abilities, allowing me to offer a distinctive service.</p>
						<p>Whether you're in search of a thoughtful gift or seeking guidance about what lies ahead, I'm here to assist you on your journey.</p>
					</Typography>
				</CardContent>
			</Card>
		</Container>
	)
}

export default Home
