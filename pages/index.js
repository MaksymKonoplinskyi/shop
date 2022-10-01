import React from 'react';

import { client } from '../lib/client';
import { Product, FirstBanner, SecondBanner } from '../components';

const Home = ({ products, secondBannerData, firstBannerData }) => (
  <div>
    <FirstBanner firstBanner={firstBannerData && firstBannerData[0]} />

    <div className="products-heading">
      <h2>Best Seller Products</h2>
      <p>Hoverboard there are many variations passages</p>
    </div>

    <div className="products-container">
      {products?.map((product) => <Product key={product._id} product={product} />)}
    </div>
    <SecondBanner secondBanner={secondBannerData.length && secondBannerData[0]} />

  </div>
);

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const secondBannerQuery = '*[_type == "secondBanner"]';
  const secondBannerData = await client.fetch(secondBannerQuery);

  const firstBannerQuery = '*[_type == "firstBanner"]';
  const firstBannerData = await client.fetch(firstBannerQuery);

  return {
    props: { products, secondBannerData, firstBannerData }
  }
}

export default Home;