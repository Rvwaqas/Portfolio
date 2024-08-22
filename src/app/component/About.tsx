import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
const About = () => {
  return (
    <div id='about'>
      <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <Image
        width={300}
        height={500}
        className=" object-cover object-center rounded mx-auto w-[300px] h-[300px]"
        alt="hero"
        src={"/picture/waqas.JPG"}
      />
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-3 font-medium text-gray-900">
        About Me
      </h1>
      <p className="mb-5 leading-relaxed">
        I am a Software Engineer. I have good hand on front-end development.
        I am also good in different languages like Java,Python,JavaScript and TypeScript.
        I am also in mySql. My other Skill are Digital Marketer. I can handle the social media account,
        Google ads,Facebook Ads,SEO and Shopify.

      </p>
      <div className="flex justify-center">
        <Link target='_blank' href={"./picture/SoftwareCVwaqas.pdf"}>
        <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
          View CV
        </button>
        </Link>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default About
