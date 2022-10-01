import React from 'react';
// import Link from 'next/link';
import { Link } from 'react-router-dom';

import { urlFor } from '../lib/client';

const HeroBanner = ({ heroBanner }) => {
  return (
    <div className="hero-banner-container ">
      {/* <div>
        <p className="beats-solo">{heroBanner.smallText}</p>
        <h3 className=''>{heroBanner.midText}</h3>
        <h1>{heroBanner.largeText1}</h1>
        <img src={urlFor(heroBanner.image)} alt="headphones" className="hero-banner-image absolute bottom-[21%] right-40 max-w-md" />

        <div>
          <Link href={`/product/${heroBanner.product}`}>
            <button type="button">{heroBanner.buttonText}</button>
          </Link>
          <div className="desc">
            <h5 className='text-white  font-light '>Description</h5>
            <p className='font-bold'>{heroBanner.desc}</p>
          </div>
        </div>
      </div> */}
      <div><h1>i am here</h1></div>
    </div>
  )
}

export default HeroBanner