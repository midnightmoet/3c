import React from 'react'
import '../styles/About.css'

const About = () => {
  return (
    <div className="about-container">
      {/* <h1 className="about-title">About 3C</h1> */}
      <p className="about-intro">Welcome to my website! I'm glad you're here.</p>
      <section className="about-section">
        <h2 className="section-title">Our Mission</h2>
        <p className="section-content">Our mission is to honor the natural world and embrace the simplicity of ancient wisdom. We strive to reconnect with the earth, celebrate the cycles of nature, and foster a harmonious relationship between humanity and the environment.</p>
      </section>
      {/* <section className="about-section">
        <h2 className="section-title">Our Team</h2>
        <p className="section-content">Our team consists of dedicated professionals who are passionate about what they do and committed to excellence in every aspect of our work.</p>
      </section> */}
      <section className="about-section">
        <p className="section-content">If you have any questions or would like to learn more, please don't hesitate to reach out to us via the contact tab.</p>
      </section>
    </div>
  )
}

export default About