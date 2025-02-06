import React from 'react'
import { motion } from "framer-motion"
import {Data} from "./ClientData.jsx"

import { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';


const Testimonial = () => {
  return (
    <section className='pt-30 pb-30 max-md:pt-13  max-md:overflow-x-hidden px-[10%]'>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}

        className='pb-10 max-md:pb-7 max-md:px-4 flex max-md:flex-wrap flex-col justify-center items-center'>
        <h2 className='text-3xl font-bold'>Client Reviews</h2>
        <span className='font-thin'>Reviews from my client</span>
      </motion.div>
      <motion.div
      
      initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}>
      <Swiper
      loop={true}
      grabCursor={true}
      spaceBetween={24}
      pagination={{
        clickable: true,
      }}
      breakpoints={{
        576: {
          slidesPerView: 1,
          
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1028: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
      }}
      modules={[Pagination]}  
      className='w-[90%] max-md:w-[90%] flex justify-center'
      >
        {Data.map(({ id, image, title, description }) => {
          return (
            <SwiperSlide className='bg-[#fff] border-1 px-[1.2rem] py-[2rem] mb-[3rem] rounded-[1.5rem]'
            key={id}>
              <img className='w-[60px] rounded-[3rem] mb-[0.5rem]' src={image} alt="" />
              <h3 className='font-medium text-[1rem] mb-[0.25rem]'>{title}</h3>
              <p className='text-[0.875rem] font-thin'>{description}</p>
            </SwiperSlide>
          )
        })}

      </Swiper>
      </motion.div>


    </section>
  )
}

export default Testimonial
