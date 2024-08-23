import React from 'react'
import '../styles/About.css'

const About = () => {
  return (
    <div className="about-container">
      {/* <h1 className="about-title">About 3C</h1> */}
      <p className="about-intro">Welcome to my website! I'm glad you're here.</p>
      <section className="about-section">
        <h2 className="section-title">My Mission</h2>
        <p className="section-content">As an empath, my tarot readings offer deep insights and clarity, helping to unravel life's mysteries and provide guidance on personal challenges.</p>
        <p className='section-content'>I create a variety of handcrafted items, including <em>stuffed animals</em>, clothing, and cozy blankets. Each piece can be customized to your preferences, resulting in unique, artisanal creations that are truly one-of-a-kind.</p>
      </section>
      {/* <section className="about-section">
        <h2 className="section-title">Our Team</h2>
        <p className="section-content">Our team consists of dedicated professionals who are passionate about what they do and committed to excellence in every aspect of our work.</p>
      </section> */}
      <section className="about-section">
        <p className="section-content">Should you have any inquiries or desire additional information, please feel free to get in touch with me through the contact section.</p>
      </section>
    </div>
  )
}

export default About