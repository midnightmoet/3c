import React from 'react'
import { Container, Typography, Card, CardContent, CardMedia } from '@mui/material'
import '../styles/Home.css'
import stockVectorButterfly from '../assets/stock-vector-butterfly.jpg'

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
          image={stockVectorButterfly}
          alt="3C Welcome Image"
          className='welcome-image'
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