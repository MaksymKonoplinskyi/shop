import React from 'react';
import Link from 'next/link';
import { urlFor } from '../lib/client';

const SecondBanner = ({ secondBanner: { smallText, midelText, largeText, buttonText, productNameForButtonLink, image } }) => {
  return (
    <div className="secondBanner__container">
      <div className="secondBanner__leftСontainer">
        <p className="secondBanner__smallText">{smallText}</p>
        <h3>{midelText}</h3>
        <h2>{largeText}</h2>
        <Link href={`/product/${productNameForButtonLink}`}>
          <button type="button">{buttonText}</button>
        </Link>
      </div>
      <div className="secondBanner__imageContainer">
        <img src={urlFor(image)} alt={`${productNameForButtonLink}`} 
        className="secondBanner__image" />
      </div>
    </div>
  )
}

export default SecondBanner