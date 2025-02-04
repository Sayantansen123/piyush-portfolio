import React from 'react'
import {motion} from "framer-motion"
import { SiNuke } from "react-icons/si";
import { SiHoudini } from "react-icons/si";
import { SiAdobeaftereffects } from "react-icons/si";
import { SiAdobepremierepro } from "react-icons/si";
import { SiAdobephotoshop } from "react-icons/si";
import { SiDavinciresolve } from "react-icons/si";
import { Gi3dStairs } from "react-icons/gi";
import { SiMocha } from "react-icons/si";
import { FaVideo } from "react-icons/fa";
import { PiUsersThreeLight } from "react-icons/pi";
import { TbBrandVisualStudio } from "react-icons/tb";
import { LuMove3D } from "react-icons/lu";
import { MdOutlineAnimation } from "react-icons/md";
import { MdAutoAwesomeMotion } from "react-icons/md";
import { IoLogoVue } from "react-icons/io5";
import { IoMdPhotos } from "react-icons/io";


const Skills = () => {
  return (
    <section className='pt-30 pb-15 max-md:py-0  max-md:overflow-x-hidden px-[10%]'>
         <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      
      className='pb-10 max-md:pb-7 max-md:px-4 flex max-md:flex-wrap flex-col justify-center items-center'>
      <h2 className='text-3xl font-bold'>Skills</h2>
      <span className='font-thin'>My Specialities</span>
      </motion.div>

      <div className='flex justify-center gap-8 flex-wrap'>
        <Tools/>
        <Skill/>

      </div>
    </section>
  )
}

const Tools = () =>{
    return (
  <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
  
  className='text-center  py-10 bg-[#fff] rounded-[1.25rem] max-w-[500px] flex-1 min-w-[400px] max-md:min-w-[340px] ' id='tool'>
        <h3 className='text-2xl font-serif max-md:text-xl pb-1.5'>Tools & Software</h3>
        <div className='flex justify-center max-md:justify-around '>
        
        <div className='space-y-6 p-10 max-md:p-5'>
            <div className = "flex gap-3 items-center max-md:flex-col max-md:gap-0">
                <div className='text-2xl max-md:text-xl'><SiAdobephotoshop/></div>
                <div>Photoshop</div>
            </div>

            <div className = "flex gap-3 items-center max-md:flex-col max-md:gap-0">
                <div className='text-2xl max-md:text-xl' ><SiAdobepremierepro/></div>
                <div>Premier Pro</div>
            </div>

            <div className = "flex gap-3 items-center max-md:flex-col max-md:gap-0">
                <div className='text-2xl max-md:text-xl'><SiAdobeaftereffects/></div>
                <div>After Effects</div>
            </div>

            <div className = "flex gap-3 items-center max-md:flex-col max-md:gap-0">
                <div className='text-2xl max-md:text-xl'><SiDavinciresolve/></div>
                <div>Davinci Resolve</div>
            </div>
        </div>



        <div className='space-y-6 p-10 max-md:p-5'>
            <div className = "flex gap-3 items-center max-md:flex-col max-md:gap-0">
                <div className='text-2xl max-md:text-xl'><Gi3dStairs/></div>
                <div>3ds Max</div>
            </div>

            <div className = "flex gap-3 items-center max-md:flex-col max-md:gap-0">
                <div className='text-2xl max-md:text-xl'><SiMocha/></div>
                <div>Mocha Pro</div>
            </div>

            <div className = "flex gap-3 items-center max-md:flex-col max-md:gap-0">
                <div className='text-2xl max-md:text-xl'><SiNuke/></div>
                <div>Nuke</div>
            </div>

            <div className = "flex gap-3 items-center max-md:flex-col max-md:gap-0">
                <div className='text-2xl max-md:text-xl'><SiHoudini/></div>
                <div>Houdini</div>
            </div>
        </div>
        </div>

        </motion.div>
    )
}


const Skill = () =>{
    return (
  <motion.div
  initial={{ opacity: 0, x: -50 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 1.5, ease: "easeOut" }}
  viewport={{ once: true, amount: 0.2 }}
  className='text-center  py-10 bg-[#fff] rounded-[1.25rem] max-w-[500px] flex-1 min-w-[400px] max-md:min-w-[340px]' id='skill'>
        <h3 className='text-2xl font-serif max-md:text-xl pb-1.5'>Skills & Speciality</h3>
        <div className='flex justify-center max-md:justify-around '>
        
        <div className='space-y-6 p-10 max-md:p-5'>
            <div className = "flex gap-3 items-center max-md:flex-col max-md:gap-0">
                <div className='text-2xl max-md:text-xl'><FaVideo/></div>
                <div className='text-nowrap'>Video Editing</div>
            </div>

            <div className = "flex gap-3 items-center max-md:flex-col max-md:gap-0">
                <div className='text-2xl max-md:text-xl' ><PiUsersThreeLight/></div>
                <div className='text-nowrap'>Reel/Shorts edits</div>
            </div>

            <div className = "flex gap-3 items-center max-md:flex-col max-md:gap-0">
                <div className='text-2xl max-md:text-xl'><TbBrandVisualStudio/></div>
                <div className='text-nowrap'>VFX Skill</div>
            </div>

            <div className = "flex gap-3 items-center max-md:flex-col max-md:gap-0">
                <div className='text-2xl max-md:text-xl'><LuMove3D/></div>
                <div className='text-nowrap'>3D Integration</div>
            </div>
        </div>



        <div className='space-y-6 p-10 max-md:p-5'>
            <div className = "flex gap-3 items-center max-md:flex-col max-md:gap-0">
                <div className='text-2xl max-md:text-xl'><MdOutlineAnimation/></div>
                <div  className='text-nowrap'>Animation</div>
            </div>

            <div className = "flex gap-3 items-center max-md:flex-col max-md:gap-0">
                <div className='text-2xl max-md:text-xl'><MdAutoAwesomeMotion/></div>
                <div className='text-nowrap'>Motion Graphics</div>
            </div>

            <div className = "flex gap-3 items-center max-md:flex-col max-md:gap-0">
                <div className='text-2xl max-md:text-xl'><IoLogoVue/></div>
                <div className='text-nowrap'>Logo Animation</div>
            </div>

            <div className = "flex gap-3 items-center max-md:flex-col max-md:gap-0">
                <div className='text-2xl max-md:text-xl'><IoMdPhotos/></div>
                <div className='text-nowrap'>Photo Editing</div>
            </div>
        </div>
        </div>

        </motion.div>
    )
}

export default Skills
