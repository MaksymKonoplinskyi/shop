import React from 'react';
import Link from 'next/link';
import { urlFor } from '../lib/client';

const HeroBanner = ({ heroBanner }) => {
  return (
    <div className="hero-banner__container">
      <div className="hero-banner__left-container">
        <p className="hero-banner__smallText">{heroBanner.smallText}</p>
        <h3>{heroBanner.midText}</h3>
        <h1>{heroBanner.largeText}</h1>
        <Link href={`/product/${heroBanner.product}`}>
          <button type="button">{heroBanner.buttonText}</button>
        </Link>
      </div>
      <div className="hero-banner__image-container">
        <img src={urlFor(heroBanner.image)} alt={`${heroBanner.product}`} 
        className="hero-banner__image" />
      </div>
    </div>
  )
}

export default HeroBanner