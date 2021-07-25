import React from 'react';
import './Cards.css';
import CardItem from './CardItems';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Digital art!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='/image0.png'
              text='wkjhajkdbajkdbawkjdbkjwadbawdawdwadwadwadwa w a ada ddk'
              label='digital art'
              path='/services'
            />
            <CardItem
              src='/puta.jpg'
              text='iwkjdbkjwadbawdawdwadwadwadwa w a ada ddk'
              label='digital art'
              path='/services'
            />
          </ul>
          {/* <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Mystery'
              path='/services'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Experience Football on Top of the Himilayan Mountains'
              label='Adventure'
              path='/products'
            />
            <CardItem
              src='images/img-8.jpg'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Adrenaline'
              path='/sign-up'
            />
          </ul> */}
        </div>
      </div>
    </div>
  );
}

export default Cards;
