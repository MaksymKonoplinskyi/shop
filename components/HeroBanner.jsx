import React from 'react';
import Link from 'next/link';

import { urlFor } from '../lib/client';

const HeroBanner = ({ heroBanner }) => {
  return (
    <div className="hero-banner-container">
      <div className="hero-banner-left-container">
        <p className="beats-solo">{heroBanner.smallText}</p>
        <h3>{heroBanner.midText}</h3>
        <h1 className="hero-banner-image-h1">{heroBanner.largeText}</h1>
        <Link href={`/product/${heroBanner.product}`}>
          <button type="button">{heroBanner.buttonText}</button>
        </Link>
      </div>
      <div className="hero-banner-image-container">
        <img src={urlFor(heroBanner.image)} alt={`${heroBanner.product}`} className="hero-banner-image" />
      </div>
    </div>
  )
}

export default HeroBanner