import React from 'react';
import '../../App.css';
import './About_Us.css';

export default function About_Us() {
  return (
    <div className='about-us'>
      <video src='/videos/About-Us-final.mp4' autoPlay loop muted />
      <div className='para'>
        <div className='heading'>
          Awesome Ventures
        </div>
        <div className='content'>
          &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;We are a main online travel organization in India giving a ‘best as far as a class can tell with the objective to be ‘India's Travel Planner’.
          Through our site, www.AwesomeVentures.com, our versatile applications, and our other related stages, recreation, and business voyagers can investigate, explore, analyze costs and book an extensive variety of administrations taking into account their movement needs.
          <br/>
          &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;Since our origin in 2022, we have utilized at least one of our exhaustive travel-related administrations, which incorporate local and global air ticketing, lodging appointments, homestays, occasion bundles, transport ticketing, rail ticketing, exercises, and subordinate administrations.
          With more than 83,000 inns contracted crosswise over India, we are India’s biggest stage for residential lodgings.
          A solid and “believed” travel brand of India, our qualities incorporate a vast and faithful client base, a multi-channel stage for relaxation and business explorers, a powerful portable eco-framework for a range of voyagers and providers.
          <br/>
          &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;A solid innovation stage intended to convey an abnormal state of adaptability and advancement and a prepared senior supervisory crew including industry officials with profound roots in the movement business in India and abroad.
        </div>
      </div>
    </div>
  );
}
