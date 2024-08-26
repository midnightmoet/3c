import React from "react";
import "../assets/stylesheet/main.css";

const Home = () => {
	return (
		<div className="home-container">
			<header className="header">
				<img
					src="../src/assets/images/boho.jpg"
					alt="Yarn with love"
					className="cover-photo"
				/>
				<h3>Champagne Creative Creations</h3>
				<nav className="nav">
					<ul className="nav-list">
						<li>
							<a href="#about">About</a>
						</li>
						<li>
							<a href="#services">Services</a>
						</li>
						<li>
							<a href="#contact">Contact</a>
						</li>
					</ul>
				</nav>
			</header>

{/* ABOUT SECTION */}
			<section className="hero" id="about">
				<div className="about-container">
					{/* <h1 className="about-title">About 3C</h1> */}
					<p className="about-intro">
						Welcome to my website! I'm glad you're here.
					</p>
					<section className="about-section">
						<h2 className="section-title">My Mission</h2>

						<p className="section-content">
							I create a variety of handcrafted items, including{" "}
							<em>stuffed animals</em>, clothing, and cozy
							blankets. Each piece can be customized to your
							preferences, resulting in unique, artisanal
							creations that are truly one-of-a-kind.
						</p>
						<p className="section-content">
							As an empath, my tarot readings offer deep insights
							and clarity, helping to unravel life's mysteries and
							provide guidance on personal challenges.
						</p>
					</section>
					<section className="about-section">
						<p className="section-content">
							Should you have any inquiries or desire additional
							information, please feel free to get in touch with
							me through the contact section.
						</p>
					</section>
				</div>
			</section>

			{/* TODO! May use this later but for now commented out */}
			{/* <section className="more-about">
        <h2></h2>
        <p></p>
      </section> */}
{/* SERVICES SECTION */}
			<section className="services" id="services">
				<section className="services-container">
					<div className="services-title">
						<h3>Services Available</h3>
					</div>
					<div className="services-grid">
						<div className="service-item">
							<div className="service-card">
								<div className="service-card-content">
									<h2 className="service-card-title">
                  Handmade Items
									</h2>
									<p className="service-card-description">
                  Unique, custom-crafted pieces tailored to your specifications. Each item is created with attention to detail and built to stand the test of time.
									</p>
									<div className="btn-container">
										<button className="service-card-button">
											Submit
										</button>
									</div>
								</div>
							</div>
						</div>
						<div className="service-item">
							<div className="service-card">
								<div className="service-card-content">
									<h2 className="service-card-title">
                  Tarot Card Reading
									</h2>
									<p className="service-card-description">
                  Insightful tarot sessions offering guidance and clarity. Let me help you uncover hidden truths and illuminate your path forward
									</p>
									<div className="btn-container">
										<button className="service-card-button">
											Submit
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</section>

			{/* <section className="projects" id="projects">
      </section> */}

{/* CONTACT FORM SECTION */}
			<section className="contact" id="contact">
				<h2>Get In Touch With Me</h2>
				<div className="contact-form-container">
					<div className="contact-form">
						<form
							action="https://formspree.io/f/xpwabzgz"
							method="POST"
						>
							<div className="form-control">
								<label htmlFor="name">Name</label>
								<input
									type="text"
									id="name"
									name="sender-name"
									placeholder="Enter Your Name"
									className="input-field"
									required
								/>
							</div>
							<div className="form-control">
								<label htmlFor="email">Email</label>
								<input
									type="email"
									id="email"
									name="sender-email"
									placeholder="Enter Your Email"
									className="input-field"
									required
								/>
							</div>
							<div className="form-control">
								<label htmlFor="subject">Subject</label>
								<input
									type="text"
									id="subject"
									name="subject"
									placeholder="Enter Your Subject"
									className="input-field"
									required
								/>
							</div>
							<div className="form-control">
								<label htmlFor="message">Message</label>
								<textarea
									id="message"
									cols="60"
									rows="10"
									placeholder="Enter Your Message"
									name="message"
									className="input-field"
									required
								></textarea>
							</div>
							<input
								type="submit"
								value="Submit"
								id="submit-btn"
								className="submit-btn"
							/>
						</form>
					</div>
				</div>
			</section>

			<div className="socials">
				<a
					href="https://www.twitter.com/midnightmoet"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img
						src="https://img.icons8.com/color/48/000000/twitter--v1.png"
						alt="Twitter"
						loading="lazy"
						className="socicon"
					/>
				</a>
				<a
					href="https://www.instagram.com/lisa.miner/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img
						src="https://img.icons8.com/fluency/48/000000/instagram-new.png"
						alt="Instagram"
						loading="lazy"
						className="socicon"
					/>
				</a>
				<a
					href="https://www.linkedin.com/in/lisachampagne"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img
						src="https://img.icons8.com/fluency/48/000000/linkedin.png"
						alt="Linkedin"
						loading="lazy"
						className="socicon"
					/>
				</a>
				<a
					href="https://www.github.com/midnightmoet"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img
						src="https://img.icons8.com/fluency/48/000000/github.png"
						alt="Github"
						className="socicon"
					/>
				</a>
			</div>
      <div className="footer-container">
        <footer>
				<div className="footer-copyright">
					<small>
						© 2023 3C - Champagne Creative Creations. All rights
						reserved.
					</small>
				</div>
			</footer>
		</div>
    </div>
	);
}

export default Home;
