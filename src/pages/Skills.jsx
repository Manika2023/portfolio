import React from "react"
import reactImage from '../assets/image/react.jpeg'
import pythonImage from '../assets/image/python.png'
import mysqlImage from '../assets/image/mysql.png'

function Skills() {
     return (
       <section className="text-gray-400 bg-gray-900 -mt-20 body-font " id="my-skills">
     <div className="container px-5 py-24 mx-auto">
       <div className="flex flex-col text-center w-full mb-20">
         {/* <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">Skills & Experience</h1> */}
         <h1 className='bg-gray-900 text-white-500 p-8 ml-5 mr-5 text-center text-5xl rounded-lg font-bold text-orange-500'>Skills & Experience</h1>
         <div className="flex flex-col items-center text-center justify-center">
           
           <div className="w-44 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
           </div>
         {/* <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably havent heard of them.</p> */}
       </div>
       <div className="flex flex-wrap -m-2 ">
         <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
           <div className="h-full flex items-center bg-orange-500 hover:-translate-y-1 duration-300 border-gray-800 border p-4 rounded-lg">
             <img alt="team" className="w-16 h-16 bg-gray-100 object-cover
              object-center flex-shrink-0 rounded-full mr-4" src="https://w7.pngwing.com/pngs/201/90/png-transparent-logo-html-html5.png"/>
             <div className="flex-grow">
               <h2 className="text-white title-font font-medium">HTML</h2>
               <p className="text-gray-300">80%</p>
             </div>
           </div>
         </div>
         <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
           <div className="h-full flex items-center bg-blue-500 hover:-translate-y-1 duration-300 border-gray-800 border p-4 rounded-lg">
             <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center 
             flex-shrink-0 rounded-full mr-4" src="https://w7.pngwing.com/pngs/696/424/png-transparent-logo-css-css3.png"/>
             <div className="flex-grow">
               <h2 className="text-white title-font font-medium">CSS</h2>
               <p className="text-gray-300">85%</p>
             </div>
           </div>
         </div>
         <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
           <div className="h-full flex items-center bg-yellow-500 hover:-translate-y-1 duration-300 border-gray-800 border p-4 rounded-lg">
             <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center 
             flex-shrink-0 rounded-full mr-4" src="https://static.vecteezy.com/system/resources/previews/027/127/560/original/javascript-logo-javascript-icon-transparent-free-png.png"/>
             <div className="flex-grow">
               <h2 className="text-white title-font font-medium">JavaScript</h2>
               <p className="text-gray-200">60%</p>
             </div>
           </div>
         </div>
         <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
           <div className="h-full flex items-center bg-[#663CE9] hover:-translate-y-1 duration-300 border-gray-800 border p-4 rounded-lg">
             <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center 
             flex-shrink-0 rounded-full mr-4" src="https://logos-world.net/wp-content/uploads/2020/02/Canva-New-Logo.png"/>
             <div className="flex-grow">
               <h2 className="text-white title-font font-medium">Canva</h2>
               <p className="text-gray-300">70%</p>
             </div>
           </div>
         </div>
         <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
           <div className="h-full flex items-center bg-teal-400 hover:-translate-y-1 duration-300 border-gray-800 border p-4 rounded-lg">
             <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center
              flex-shrink-0 rounded-full mr-4" src="https://banner2.cleanpng.com/20180711/rtc/kisspng-django-web-development-web-framework-python-softwa-django-5b45d913f29027.4888902515313042119936.jpg"/>
             <div className="flex-grow">
               <h2 className="text-white title-font font-medium">Django</h2>
               <p className="text-gray-500">75%</p>
             </div>
           </div>
         </div>
         <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
           <div className="h-full flex items-center bg-gray-500 hover:-translate-y-1 duration-300 border-gray-800 border p-4 rounded-lg">
             <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center 
             flex-shrink-0 rounded-full mr-4" src="https://res.cloudinary.com/apideck/image/upload/v1616206512/icons/django-rest-framework.png"/>
             <div className="flex-grow">
               <h2 className="text-white title-font font-medium">Rest Framwork</h2>
               <p className="text-gray-300">70%</p>
             </div>
           </div>
         </div>
         <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
           <div className="h-full flex items-center bg-[#00758f] hover:-translate-y-1 duration-300 border-gray-800 border p-4 rounded-lg">
             <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center 
             flex-shrink-0 rounded-full mr-4" src={mysqlImage}/>
             <div className="flex-grow">
               <h2 className="text-white title-font font-medium">MySQL </h2>
               <p className="text-gray-200">70%</p>
             </div>
           </div>
         </div>
         <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
           <div className="h-full flex items-center bg-[#092E20] hover:-translate-y-1 duration-300 border-gray-800 border p-4 rounded-lg">
             <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center 
             flex-shrink-0 rounded-full mr-4" src={reactImage} />
             <div className="flex-grow">
               <h2 className="text-white title-font font-medium">React</h2>
               <p className="text-gray-300">70%</p>
             </div>
           </div>
         </div>
         <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
           <div className="h-full flex items-center bg-blue-600 hover:-translate-y-1 duration-300 border-gray-800 border p-4 rounded-lg">
             <img alt="team" className="w-16 h-16 bg-gray-100 
             object-cover object-center flex-shrink-0 rounded-full mr-4" src={pythonImage}/>
             <div className="flex-grow">
               <h2 className="text-white title-font font-medium">Python</h2>
               <p className="text-gray-300">50%</p>
             </div>
           </div>
         </div>
       </div>
     </div>
   </section>
     )
   }
   
   export default Skills