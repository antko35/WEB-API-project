import React from 'react';
import hero from "./hero.png";
import './Hero.css'
import { Link } from 'react-router-dom';
interface Props {}

const Hero = (props: Props) => {
  return (
    <section id="hero">
  <div className="hero-container">
    <div className="hero-text">
      <h1 className="hero-title">Financial data with no news.</h1>
      <p className="hero-description">
        Search relevant financial documents without fear mongering and fake
        news.
      </p>
      <div className="hero-button-container">
        <Link to="/search" className="hero-button">Get Started</Link>
      </div>
    </div>
    <div className="hero-image">
      <img src={hero} alt="Hero Image" />
    </div>
  </div>
</section>


  )
}

export default Hero