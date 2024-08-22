import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { MdOutlineCloudDownload } from "react-icons/md";
const Navbar = () => {
  
  //import components from tailblock.cc 
  
    return (
    <div className='bg-white z-50 sticky'> 
      <header className="text-gray-600 body-font sticky">
  <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <Image src={"/picture/waqas.JPG"} width={100} height={100} alt='logoimage' className='border rounded-[100%] w-[50px] h-[50px] mt-1'/>
      <span className="ml-3 text-xl">Waqas Hussain</span>
    </a>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <Link href={"/"} className="mr-5 hover:text-gray-900">Home</Link>
      <Link href={"#about"} className="mr-5 hover:text-gray-900">About</Link>
      <Link href={"#skills"} className="mr-5 hover:text-gray-900">Skills </Link>
      <Link href={"#project"} className="mr-5 hover:text-gray-900">Projects</Link>
      <Link href={"#Contact"} className="mr-5 hover:text-gray-900">Contact</Link>
    </nav>
    <a href="/picture/SoftwareCVwaqas.pdf"> 
    <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
        Download CV
      <MdOutlineCloudDownload className='text-lg ml-2' />
     </button>
     </a>
  </div>
</header>
    </div>
  )
}

export default Navbar
