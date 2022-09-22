import React from 'react';

import { client } from '../lib/client';
import { Product, FooterBanner, HeroBanner } from '../components';

const Home = ({ products, bannerData1, bannerData2}) => (
  <div>
    <HeroBanner heroBanner={bannerData1.length && bannerData1[0]}  />
    <div className="products-heading">
      <h2>Best Seller Products</h2>
      <p>speaker There are many variations passages</p>
    </div>

    <div className="products-container">
      {products?.map((product) => <Product key={product._id} product={product} />)}
    </div>

    <FooterBanner footerBanner={bannerData2 && bannerData2[0]} />
  </div>
);

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const banner1Query = '*[_type == "banner1"]';
  const bannerData1 = await client.fetch(banner1Query);

  const banner2Query = '*[_type == "banner2"]';
  const bannerData2 = await client.fetch(banner2Query);

  return {
    props: { products, bannerData1, bannerData2 }
  }
}

export default Home;