import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='HeroSection'>
      <video src='/videos/video-1.mp4' autoPlay loop muted />
      <div className='hero-container'>
        <h1>AWESOME VENTURES</h1>
        <p>What are you waiting for?</p>
        <div className='hero-btns'>
          <Button
            className="btns"
            buttonStyle='btn--outline'
            buttonSize='btn--large'
          >
            <div className='maps'>
              Google Maps
            </div>
          </Button>
          {/* <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
          >
          WATCH TRAILER <i className='far fa-play-circle' />
          </Button> */}
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
