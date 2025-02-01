import React from 'react'
import {motion} from "framer-motion"
import { SiNuke } from "react-icons/si";
import { SiHoudini } from "react-icons/si";

const Skills = () => {
  return (
    <section className='pt-30 pb-30 max-md:py-0  max-md:overflow-x-hidden px-[10%]'>
         <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      
      className='pb-15 max-md:pb-7 max-md:px-4 flex max-md:flex-wrap flex-col justify-center items-center'>
      <h2 className='text-3xl font-bold'>Skills</h2>
      <span className='font-thin'>My Specialities</span>
      </motion.div>

      <div>
        <Tools/>

      </div>
    </section>
  )
}

const Tools = () =>{
    return (
  <div className='text-center border-2 py-10'>
        <h3>Tools & Software</h3>
        <div className='flex justify-center  '>
        
        <div className=' gap-1.5 p-10 max-md:p-5'>
            <div className = "flex gap-3">
                <div>icon</div>
                <div>Photoshop</div>
            </div>

            <div className = "flex gap-3">
                <div>icon</div>
                <div>Premier Pro</div>
            </div>

            <div className = "flex gap-3">
                <div>icon</div>
                <div>After Effects</div>
            </div>

            <div className = "flex gap-3">
                <div>icon</div>
                <div>Davinci Resolve</div>
            </div>
        </div>



        <div className='gap-1.5 p-10 max-md:p-5'>
            <div className = "flex gap-3">
                <div>icon</div>
                <div>3ds Max</div>
            </div>

            <div className = "flex gap-3">
                <div>icon</div>
                <div>Mocha Pro</div>
            </div>

            <div className = "flex gap-3 items-center">
                <div><SiNuke/></div>
                <div>Nuke</div>
            </div>

            <div className = "flex gap-3 items-center">
                <div><SiHoudini/></div>
                <div>Houdini</div>
            </div>
        </div>
        </div>

        </div>
    )
}

export default Skills
