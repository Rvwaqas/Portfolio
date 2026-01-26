'use client'
import React from 'react'
import Image from 'next/image'
import Typewriter from 'typewriter-effect';
import Link from 'next/link';
const Hero = () => {
  return (
    <div>
      <section className="text-gray-600 body-font bg-fixed bg-cover bg-center bg-gray-100">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
        I am
        <br className="hidden lg:inline-block" />
        {/* typewriter effect */}
        <Typewriter
            options={{
            strings: ['AI Engineer',"Agentic AI Developer",'FrontEnd Developer',"Software Engineer"],
            autoStart: true,
            loop: true,
        }}
/>
      </h1>
      <div className='w-[100px] h-[2px] bg-blue-800'>

      </div>
      <p className="mb-8 leading-relaxed ">
      I am an Agentic AI Developer, AI Engineer, and Software Engineer with a strong focus on building intelligent, scalable, and user-centric applications. I specialize in developing AI-driven systems and modern frontend experiences using tools like Python, JavaScript, React, Next.js, and AI frameworks. I enjoy turning complex ideas into practical, high-impact solutions.
      </p>
      <div className="flex justify-center">
        <Link href={'#Contact'}>
        <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
          Contact
        </button>
        </Link>
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <Image className="object-cover object-center rounded mx-auto  w-[300px] h-[300px] " 
      alt='Herro'
      width={300}
      height={500}
      src={"/picture/waqas.png"}
      />
    </div>
  </div>
</section>

    </div>
  )
}

export default Hero


