import React from 'react';
import './HeroSection.css';
import './App.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

// import  Images from './Carousel'

function HeroSection(){
    return (
        <div className="hero-container">
            {/* <Images></Images> */}
            <h1>Italian bussy</h1>
            <p>What are you waiting for?</p>
            <div>
                <Button className="hero-btns" buttonStyle="hero-btns btn--outline" buttonSize="btn--large">
                    <Link to="/arts" style={{textDecoration:'none',color:'black'}}>Arts</Link>
                </Button>
                <Button className="hero-btns" buttonStyle="hero-btns btn--primary" buttonSize="btn--large">
                    Contact
                </Button>
            </div>



        </div>
    )
}

export default HeroSection;