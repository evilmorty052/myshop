import React from 'react';
// import Link from 'next/link';
import { Link } from 'react-router-dom';
import { AiOutlineShopping } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom';
// import Sidebar from './sidebar';

import { useState } from 'react';
import { Cart } from './';
import {useStateContext} from '../context/StateContext';
import { useEffect } from 'react';
// import checktoggle  from './sidebar';

const Navbar = () => {
  const [toggled,setToggle] =useState(false)
  const { showCart, setShowCart, totalQuantities } = useStateContext() || {};
  let Sidebar = () =>{
    return (
      <>
      
      <div className={toggled? 'absolute h-full w-full top-0 right-0 bg-white': 'hidden'}><button onClick={()=>(setToggle(false))}>click me</button></div>
    
      </>
    
    )
  
   }
  return (
    <>
    <div className="navbar-container flex py-5 px-4 bg-black  space-x-5">
      <p className="logo text-white">
        <Link href="/">JSM Headphones</Link>
      </p>
      {/* <Sidebar toggled={false} /> */}
      <button type="button" className="cart-icon bg-white" onClick={() => setToggle(true)}>
        <AiOutlineShopping width={30} />
        <span className="cart-item-qty">{totalQuantities}</span>
      </button>
      <button onClick={()=>{setToggle(true)}} className={'bg-white'}>cc</button>
      <Sidebar/>
      {showCart && <Cart />}
    </div>
    </>
    
  )
}

export default Navbar