import React from 'react'
import { Container, Typography, Grid, Card, CardContent, Button } from '@mui/material'
import '../styles/Services.css'

const Services = () => {
  const services = [
    { title: 'Handmade Items', description: 'Unique, custom-crafted pieces tailored to your specifications. Each item is created with attention to detail and built to stand the test of time.', action: 'Shop Now' },
    { title: 'Tarot Card Reading', description: 'Insightful tarot sessions offering guidance and clarity. Let me help you uncover hidden truths and illuminate your path forward.', action: 'Book Reading' },
    // { title: 'Web Design', description: 'Custom web design and development', action: 'Get Quote' },
  ]

  return (
    <Container maxWidth="lg" className="services-container">
      <Typography variant="h5" component="h3" gutterBottom align="center" fontStyle="italic" className="services-title">
        Services Available
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
                <div className='btn-container'>
                  <Button className="service-card-button" style={{ color: 'white' }}>
                    {service.action}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default Services