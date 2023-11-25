
import React from 'react';
import './Offers.css';
import pic from '../Assets/pic.png';

const Offers = () => {
  return (
    <div className='offers'>
      <div className='offers-left'>
        <h1>EXCLUSIVE</h1>
        <h1>Offers For You</h1>
        <p>ONLY ON BEST SELLERS PRODUCTS</p>
        <button>Check Now</button>
      </div>
      <div className='offers-right'>
        <img src={pic} alt='Exclusive Offer' />
      </div>
    </div>
  );
};

export default Offers;
