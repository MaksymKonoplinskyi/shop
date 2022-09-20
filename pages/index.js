import React from 'react'
import { client } from '../lib/client';
import { Product, FooterBanner, HeroBanner } from '../components';

const Home = () => {
  return (
    <>
      <HeroBanner />

      <div className='products-heading'>
        <h2>Best Selling Products</h2>
      </div>
      <div className='products-heading'>
        {['Product1', 'Product 2'].map(product => product)}
      </div>
      <FooterBanner />
    </>
  )
}

export default Home