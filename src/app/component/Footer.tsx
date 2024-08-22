'use client'
import Link from 'next/link';
import React from 'react'
import Image from 'next/image'
import { BsFacebook ,BsLinkedin,BsGithub,BsYoutube } from "react-icons/bs";
const Footer = () => {
  return (

      <footer className="text-gray-600 body-font bg-blue-50">
  <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
  <Image src={"/picture/waqas.JPG"} width={100} height={100} alt='logoimage' className='border rounded-[100%] h-[90px]'/>
    <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
      © 2024 waqas hussain  </p>
    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
      <Link href={"https://www.facebook.com/rv.waqas.1"} target='_blank' className="text-gray-500">
      <BsFacebook className='text-3xl hover:text-[#ff0000]' />
      </Link>
      <Link href={"www.linkedin.com/in/waqas-hussain-786a39221"} target='_blank'  className ="ml-3 text-gray-500">
      <BsLinkedin className='text-3xl hover:text-[#ff0000]' />
      </Link>
      <Link href={"https://github.com/Rvwaqas"} target='_blank' className="ml-3 text-gray-500">
      <BsGithub className='text-3xl hover:text-[#ff0000]' />
      </Link>
      <Link href={"https://github.com/Rvwaqas"} target='_blank' className="ml-3 text-gray-500">
      <BsYoutube className='text-3xl hover:text-[#ff0000]'  />
      </Link>
      
    </span>
  </div>
</footer>

  )
}

export default Footer
