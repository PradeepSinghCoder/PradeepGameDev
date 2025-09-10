import React from 'react'
import Tilt from 'react-parallax-tilt';
import {motion} from 'framer-motion'
import { styles } from '../styles';
import { services } from '../constants/constants';
import {fadeIn,textVariant} from '../utils/motion'
import { SectionWrapper } from '../hoc';

const ServiceCard = ({index,title,icon})=>{
  return(
      <Tilt className='xs:w-[150px] w-full'>
          <motion.div variants= {fadeIn('right','spring', 0.5*index,1,0.75)}
          className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
          >
          <div options = {
            {
              max:45,
              scale:1,
              speed:450
          }}
          className='bg-tertiary rounded-[20px] py-5 px-5 min-h-[200px] flex justify-evenly items-center flex-col'
          >
            <img src={icon} alt={title}
            className='w-16 h-16 object-contain'/>
            <h3 className='text-white text-[20]px font-bold text-center'>{title}</h3>


          </div>
          </motion.div>
      </Tilt>
  )
}

const About = () => {
  return (
    <>
    <motion.div variants={textVariant()}> 
      <p className={styles.sectionSubText}>Introduction</p>
      <h2 className={styles.sectionHeadText}>Overview.</h2>
    </motion.div>

    <motion.p variants={fadeIn("","",0.1,1)}
    className='mt-4 text-secondary text-[17px]
    max-w-3xl leading-[30px]'>
      I'm a dynamic Senior Unity Developer with over 8 years of hands-on experience building high-performance 2D/3D games, AR/VR/XR/Metaverse applications, and WebGL modules. Expert in C# scripting, real-time computational geometry, and shader graph optimization. Proven track record delivering end-to-end solutions-from concept and prototyping to launch-while collaborating cross functionally and mentoring teams. Passionate about pushing interactive experiences forward, I aim to step into a lead architect role where I can drive innovation in immersive gaming and expand my expertise in multiplayer and AI-driven gameplay.
    </motion.p>

    <div className = 'mt-20 flex flex-wrap gap-10'>
      {
        services.map((service,index)=>(
          <ServiceCard key = {service.title} index = {index} {...service}/>
        ))
      }
    </div>
    </>
  )
}

export default SectionWrapper(About,'about')