import React from 'react'
import { CiMail } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Container from './Container';

function Header() {
  return (
    <header className='bg-headColor py-1'>
    <Container>
        <div className='lg:flex items-center'>
        <div className='w-full lg:w-1/4'>
          <div className='flex items-center justify-center lg:justify-items-start border-r-2 border-[#fff]' >
           <CiMail className='text-white' />
           <p className='text-white pl-2 font-pops'>mail@yourcompany.com</p>
          </div>
        </div>
        <div className='w-full lg:w-1/4'>
        <div className='flex items-center justify-center py-2 lg:py-0'>
        <FaPhoneAlt className='text-white' />
        <p className='text-white pl-2 font-pops'>+896 120 5889 (Toll free)</p>
        </div>
        </div>
        <div className='w-full lg:w-2/4'>
        <div className='flex lg:justify-end justify-center py-2 lg:py-0 gap-x-3' >
         <FaFacebookF className='text-white' />
         <FaTwitter className='text-white' /> 
         <FaLinkedinIn className='text-white' /> 
         <FaInstagram className='text-white' /> 
        </div>
        <div>

        </div>
        </div>
        </div>
    </Container>
    </header>
  )
}

export default Header