import React, { useRef } from 'react'
import { motion } from 'framer-motion'

const Home = () => {
  
  return (
    <motion.div 
    initial={
      { opacity: 0}
    }
    animate={ 
      {
        opacity: 1, 
        transition: {
          duration: 0.5,
          ease: [0.87, 0, 0.13, 1],
        },
      }
    }
    exit={
      {
        opacity: 0
      }
    }
    className='text-white'>

    </motion.div>
  )
}

export default Home