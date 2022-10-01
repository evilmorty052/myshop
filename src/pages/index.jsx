import React from 'react';
import { useEffect, useState } from 'react';
import { client } from '../lib/client';
import { Product, FooterBanner, HeroBanner } from '../components';
import { Routes, Route, Outlet  } from 'react-router-dom'
import MadLib from '../MabLib'
import MadLibList from '../MadLibList'
import {Navbar} from '../components';
// import Sidebar from '../components/sidebar';


const Home = (products) => {
  // const [toggled,setToggle] =useState(null)
  const [toggled,setToggle] =useState(false)
  

  let Sidebar = () =>{
  return (
    <>
    
    <div className={toggled? 'absolute h-full w-full top-0 right-0 bg-white': 'hidden'}><button onClick={()=>(setToggle(false))}>click me</button></div>
  
    </>
  
  )

 }
  

  return(
    <>
    <div className='h-full   flex w-full flex-col  mx-auto my-0 relative bg-slate-700'>
    {/* <HeroBanner /> */}
    <Navbar/>
    <Sidebar/>
   
    <div className='h-full '>
    <div className="products-heading px-5 flex flex-col items-center  mt-5 mb-5 bg-green-300 w-full">
      <h2 className='text-red-400'>Best Seller Products</h2>
      <p className='text-sky-200'>speaker There are many variations passages</p>
    </div>
    <Routes>
             <Route element={<MadLibList/>} path="/"/>
            <Route element={<MadLib/>} path="/mad-libs/:slug" /> 
    </Routes>
    {/* <Outlet/> */}
    <div className="products-container">
      {/* <Product/> */}
      {/* {<Outlet/>} */}
    </div>
    {/* <FooterBanner /> */}
    </div>
  </div>
    </>
  )
  
};

// export const getServerSideProps = async () => {
//   const query = '*[_type == "product"]{name}';
//   const products = await client.fetch(query);

//   const bannerQuery = '*[_type == "banner"]';
//   const bannerData = await client.fetch(bannerQuery);

//   return {
//     props: { products, bannerData }
//   }
// }

export default Home;
