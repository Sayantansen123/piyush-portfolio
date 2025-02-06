import React from 'react'
import { motion } from "framer-motion"
import { TbBrandFramerMotion } from "react-icons/tb";
import { FaVideo } from "react-icons/fa";
import { GiExtractionOrb } from "react-icons/gi";

const Services = () => {
  return (
    <section className='pt-30 pb-30 max-md:pt-13  max-md:overflow-x-hidden px-[10%]'>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}

        className='pb-10 max-md:pb-7 max-md:px-4 flex max-md:flex-wrap flex-col justify-center items-center'>
        <h2 className='text-3xl font-bold'>Services</h2>
        <span className='font-thin'>Work i Provide</span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
        id='servicediv'
        className='flex flex-wrap gap-[3rem] mb-5 px-23 max-md:px-8 justify-center'>
        <div className='infoboxS'>
          <div className='text-3xl max-md:text-2xl '> <FaVideo /></div>

          <h3 className='font-bold'>Video & Reels Editing</h3>
          <span className='font-thin '>I edit events, reels, films, before-after comparisons, and commercial videos with professional touch and color grading. </span>
        </div>

        <div className='infoboxS'>
          <div className='text-3xl max-md:text-2xl'><GiExtractionOrb /></div>

          <h3 className='font-bold'>VFX Designing</h3>
          <span className='font-thin '>Compositing, motion tracking, Object tracking, camera tracking, Particles & Simulations, VFX simulations, rotoscoping, and 3D integration.</span>
        </div>

        <div className='infoboxS'>
          <div className='text-3xl max-md:text-2xl'><TbBrandFramerMotion /></div>
          <h3 className='font-bold'>Motion Graphics & Animation</h3>
          <span className='font-thin'>Typography animation, kinetic text, 
            Infographics and HUD elements, high-tech, motion UI
            Logo animation, glitch, smooth transitions, brand animations</span>
        </div>

      </motion.div>



    </section>
  )
}

export default Services
