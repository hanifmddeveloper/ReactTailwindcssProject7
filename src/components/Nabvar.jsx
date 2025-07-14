import React, { useState } from 'react'
import Container from './Container'
import Logo from "../assets/Logo.png"
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";


const Nabvar = () => {
    let [menu, setMenu]= useState(false)
   let handleMenu = ()=>{
     setMenu(!menu)
   }

  return (
    <section>
        <nav className='bg-navColor py-3 ${menu == true}' >
        <Container >
            <div className="flex justify-between items-center">
                <div className="">
                    <img src={Logo} alt=''/>
                </div>
                <div className="">
                <ul className={`lg:flex gap-6 duration-700 ease-in-out lg:static text-center ${menu == true ? "bg-[green] absolute left-0 top-[173px] w-full": "absolute left-[-400px] top-[173px] w-full"} `} >
                <li><a className='font-pops font-semibold text-white text-[16px]' href='#'>Home</a></li>    
                <li><a className='font-pops font-semibold text-white text-[16px]' href='#'>About</a></li>    
                <li><a className='font-pops font-semibold text-white text-[16px]' href='#'>Services</a></li>    
                <li><a className='font-pops font-semibold text-white text-[16px]' href='#'>Gallery</a></li>    
                <li><a className='font-pops font-semibold text-white text-[16px]' href='#'>Blog</a></li>    
                <li><a className='font-pops font-semibold text-white text-[16px] border-2 broder-[white]' href='#'>CONTACT</a></li>    
                </ul>    
                </div> 
                <div onClick={handleMenu} className="lg:hidden ">
                   {menu == true ? <RxCross2 />:<FaBars />  } 
                                    
                 
                </div>
            </div>
        </Container>
        </nav>
    </section>
  )
}

export default Nabvar