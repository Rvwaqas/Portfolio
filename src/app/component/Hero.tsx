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
            strings: ['Software Engineer', 'FrontEnd Developer','Digital marketer'],
            autoStart: true,
            loop: true,
        }}
/>
      </h1>
      <div className='w-[100px] h-[2px] bg-blue-800'>

      </div>
      <p className="mb-8 leading-relaxed ">
        Copper mug try-hard pitchfork pour-over freegan heirloom neutra air
        plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk
        tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard
        chambray.
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
      src={"/picture/waqas.JPG"}
      />
    </div>
  </div>
</section>

    </div>
  )
}

export default Hero
