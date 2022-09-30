import React from 'react';
import Link from 'next/link';

import { urlFor } from '../lib/client';

const FirstBanner = ({ firstBanner: { mainText, discount, smallText1, smallText2, largeText, smallText3, buttonText, productNameForButtonLink, image } }) => {
  return (
    <div className="firstBanner__container">
      <div className="firstBanner__leftDesc">
        <h2>{mainText}</h2>
        <p className="firstBanner__discount">{discount}</p>

        <p className="firstBanner__smallText1">{smallText1}</p>
      </div>
      <div className="firstBanner__image-container">
        <img
          src={urlFor(image)} className="firstBanner__image"
        />
      </div>
      <div className="firstBanner__rightDesc">
        <p className="firstBanner__smallText2" >{smallText2}</p>
        <h3>{largeText}</h3>
        <p className="firstBanner__smallText3" >{smallText3}</p>
        <Link href={`/product/${productNameForButtonLink}`}>
          <button type="button">{buttonText}</button>
        </Link>
      </div>
    </div>

  )
}

export default FirstBanner