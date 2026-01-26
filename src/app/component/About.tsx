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
        src={"/picture/waqas.png"}
      />
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-3 font-medium text-gray-900">
        About Me
      </h1>
      <p className="mb-5 leading-relaxed">
       I am an Agentic AI Developer and Software Engineer specializing in building intelligent AI systems, including chatbots, workflow automation, and Retrieval-Augmented Generation (RAG) solutions. I have hands-on experience with AI frameworks, LLM integrations, and data-driven applications using Python and modern AI tools. Alongside AI development, I have strong expertise in front-end development using JavaScript and TypeScript, and experience working with databases like MySQL. I also have a background in digital marketing, managing social media accounts, Google Ads, Facebook Ads, SEO, and Shopify, which helps me build technology that delivers real business impact.

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


