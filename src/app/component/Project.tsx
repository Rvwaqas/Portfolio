import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
const Project = () => {
  return (
    <div id='project'>
      <section className="text-gray-600 body-font mt-[-10px]">
  <div className="container px-5 py-24 mx-auto ">
    <div className="flex flex-col text-center w-full mb-10">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
        My Projects
      </h1>
    </div>
    <div className="flex flex-wrap -m-8 ">
      {/* facebook login page */}
      <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
        {/* projects class */}
        <div className="flex relative">
          <Image
            alt="login"
            width={600}
            height={200}
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={"/picture/login.png"}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
              Facebook Clone
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              Facebook Login
            </h1>
            <p className="leading-relaxed line-clamp-2">
              Its just a pratice project using framework Nextjs to making facebook login page with input filed   .
            </p>
            <Link target='_blank' href={"https://www.linkedin.com/feed/update/urn:li:activity:7217066811433881600/"}>
            <p className="leading-relaxed text-blue-700 hover:underline">
              View More  
            </p>
            </Link>
          </div>
        
        </div>
      
      </div>

      {/* Studnet managment system */}
      <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
        {/* projects class */}
        <div className="flex relative">
          <Image
            alt="login"
            width={600}
            height={200}
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={"/picture/Capture.PNG"}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
              Student Management System
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              Add Student In collage
            </h1>
            <p className="leading-relaxed">
              This is a student management system using typescript and with inquirer library   .
            </p>
            <Link target='_blank' href={"https://www.linkedin.com/posts/waqas-hussain-786a39221_webdevelopment-coding-html-activity-7215260505068716032-ObFZ?utm_source=share&utm_medium=member_desktop"}>
            <p className="leading-relaxed text-blue-700 hover:underline">
              View More  
            </p>
            </Link>
          </div>
        
        </div>
      
      </div>
      {/* banking system       */}
      <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
        {/* projects class */}
        <div className="flex relative">
          <Image
            alt="login"
            width={600}
            height={200}
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={"/picture/image-1.PNG"}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
              Banking Management System
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              Customer Activity
            </h1>
            <p className="leading-relaxed line-clamp-2">
              This is a Banking management system using typescript and OOP concept.Full view on balance management
            </p>
            <Link target='_blank' href={"https://www.linkedin.com/posts/waqas-hussain-786a39221_ceo-techceo-chiefexecutiveofficer-activity-7205473011594936320-AyjH?utm_source=share&utm_medium=member_desktop"}>
            <p className="leading-relaxed text-blue-700 hover:underline">
              View More  
            </p>
            </Link>
          </div>
        
        </div>
      
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default Project
