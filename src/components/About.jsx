import React from "react";
import about from "../assets/about.jpeg";
import { ABOUT } from "../constants";
import { motion } from "framer-motion";
import About1 from '../../public/About1.mp4'
import About2 from '../../public/About2.mp4'
import About3 from '../../public/About3.mp4'
import About4 from '../../public/About4.mp4'

const About = () => {
  return (
    <section className="container mx-auto mb-8 px-4 lg:px-0" id="about">
      {/* Section Title Animation */}
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="mb-8 text-center text-3xl tracking-tighter lg:text-4xl"
      >
        <p className="text-3xl md:text-4xl text-white font-semibold">ABOUT US</p>
      </motion.h2>

      <div className="flex flex-wrap items-center">
        {/* Image with Smooth Animation */}
        <motion.div
          initial={{ opacity: 0, x: -100, rotate: -5 }}
          whileInView={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="w-full p-4 lg:w-1/2"
        >
          <img
            src={about}
            className="rounded-3xl shadow-lg lg:rotate-3"
            alt="About Us"
          />
        </motion.div>

        {/* Text Section with Staggered Animation */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, x: 100 },
            visible: {
              opacity: 1,
              x: 0,
              transition: { duration: 1, ease: "easeOut", staggerChildren: 0.3 },
            },
          }}
          className="w-full px-2 lg:w-1/2"
        >
          {/* Animated Header */}
          <motion.h2
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
            }}
            className="text-4xl tracking-tighter text-white lg:text-6xl"
          >
            {ABOUT.header}
          </motion.h2>

          {/* Animated Divider */}
          <motion.div
            variants={{
              hidden: { scaleX: 0 },
              visible: { scaleX: 1, transition: { duration: 0.5 } },
            }}
            className="mb-8 mt-1 h-2 w-36 origin-left bg-rose-300 lg:rotate-3"
          ></motion.div>

          {/* Animated Paragraph */}
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
            }}
            className="m-8 text-2xl leading-relaxed text-white tracking-tight lg:max-w-xl"
          >
            {ABOUT.content}
          </motion.p>
        </motion.div>
        <h1 className=" mx-auto mb-8 text-center font-bold tracking-tighter lg:text-4xl text-3xl md:text-4xl  pb-1 pt-10 ">MORE <span className="text-red-500">ABOUT</span> US</h1>
        <div className='grid md:grid-cols-2 gap-6 px-10  pt-20 relative '>
          
          <div className="flex flex-col justify-center items-end hover:scale-95 transfrom transition-transform duration-300  rounded-xl shadow-md shadow-red-400 ">
          <video src="" className=' w-full flex mx-auto items-center justify-center ' autoPlay muted loop playsInline ><source src={About1} /></video>
          <p className=' pt-3 pb-3  text-left ml-10 text-slate-500 tracking-tighter lg:text-3xl'>Group Of Friends Enjoying Evening Meal In Restaurant.</p>
          </div>
          <div className="flex flex-col justify-center items-end hover:scale-95 transfrom transition-transform duration-300  rounded-xl shadow-md shadow-red-400 ">
          <video src="" className=' w-full flex mx-auto items-center justify-center ' autoPlay muted loop playsInline ><source src={About2} /></video>
          <p className=' pt-3 pb-3  text-left ml-10 text-slate-500 tracking-tighter lg:text-3xl'>Honeymoon Husband And Wife Celebrating Anniversary.</p>
          </div>
          <div className="flex flex-col justify-center items-end hover:scale-95 transfrom transition-transform duration-300  rounded-xl shadow-md shadow-red-400 ">
          <video src="" className=' w-full flex mx-auto items-center justify-center ' autoPlay muted loop playsInline ><source src={About3} /></video>
          <p className=' pt-3 pb-3  text-left ml-10 text-slate-500 tracking-tighter lg:text-3xl'>Customer Pays Restaurant Bill On Digital Tablet Shot On R3d.</p>
          </div>
          <div className="flex flex-col justify-center items-end hover:scale-95 transfrom transition-transform duration-300  rounded-xl shadow-md shadow-red-400 ">
          <video src="" className=' w-full flex mx-auto items-center justify-center ' autoPlay muted loop playsInline ><source src={About4} /></video>
          <p className=' pt-3 pb-3  text-left ml-10 text-slate-500 tracking-tighter lg:text-3xl'>Bucharest Romania August 4th 2017 People In A Dance Club</p>
          </div>
        
        </div>
        
      </div>
    </section>
  );
};

export default About;