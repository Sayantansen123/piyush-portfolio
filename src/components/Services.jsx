import React from 'react'
import {motion } from "framer-motion"

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
 </section>
  )
}

export default Services
