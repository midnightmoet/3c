import React from 'react'
import { Container, Typography, Grid, Card, CardContent, Button } from '@mui/material'
import '../styles/Services.css'

const Services = () => {
  const services = [
    { title: 'Handmade Items', description: 'Items crafted with love and care', action: 'Shop Now' },
    { title: 'Tarot Card Reading', description: 'Tarot readings for guidance and insight', action: 'Book Reading' },
    { title: 'Web Design', description: 'Custom web design and development', action: 'Get Quote' },
  ]

  return (
    <Container maxWidth="lg" className="services-container">
      <Typography variant="h2" component="h1" gutterBottom align="center" className="services-title">
        Our Services
      </Typography>
      <Grid container spacing={4} className="services-grid">
        {services.map((service) => (
          <Grid item xs={12} sm={6} md={4} key={service.title} className="service-item">
            <Card className="service-card">
              <CardContent>
                <Typography variant="h5" component="h2" gutterBottom className="service-card-title">
                  {service.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph className="service-card-description">
                  {service.description}
                </Typography>
                <Button variant="contained" color="primary" align="center" className="service-card-button">
                  {service.action}
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default Services