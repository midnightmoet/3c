import React from 'react'
import { Container, Typography, Button, Grid, Card, CardContent, CardMedia } from '@mui/material'
import '../styles/Home.css'

const Home = () => {
  return (
    <Container maxWidth="lg" className='home-container'>
      <Typography variant="h4" gutterBottom className='welcome-title'>
        Welcome to 3C
      </Typography>
      <Card>
        <CardMedia
          component="img"
          height="300"
          image="./assets/Champagne.png"
          alt="3C Welcome Image"
        />
        <CardContent>
          <Typography variant="body1" className='welcome-text'>
            Explore our services and products.
          </Typography>
        </CardContent>
      </Card>
    </Container>
  )
}

export default Home