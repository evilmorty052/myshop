import React from 'react'
import { useState, useEffect } from 'react'

const Sidebar = () => { 
    
    const [toggled,setToggle] =useState()
    const checktoggle =() => {
    const [toggled,setToggle] =useState()
    return (
        toggled? setToggle(false): setToggle(true)
    )

  }
    
    useEffect(() => {
     
      
    }, [])
    
 
}

export function checktoggle() {
    const [toggled,setToggle] =useState()
    return (
        toggled? setToggle(false): setToggle(true)
    )

  }

export default Sidebar;