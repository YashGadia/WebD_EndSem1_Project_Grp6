import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='Explore the exiciting and adventurous Alps Mountains'
              label='Adventure'
              path='/alps-mountain'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Month long Cruise service in Maldives having water sports, delicious meals and what not!'
              label='Luxury'
              path='/maldives'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Explore the beauty of mystic travel in Vietnam'
              label='Mystery'
              path='/vietnam'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Experience Pure Joy of Safari in Kenya with full safety'
              label='Safari'
              path='/safari'
            />
            <CardItem
              src='images/img-8.jpg'
              text='Enjoy classic and wonderful monumets of South India'
              label='Monuments'
              path='/monuments'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
