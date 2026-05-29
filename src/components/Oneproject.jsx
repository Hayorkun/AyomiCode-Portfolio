import React from 'react'
import Project from './Project'
import { section } from 'framer-motion/client'

function Oneproject({ name, description, image }) {
  return (
   <section className='px-5 py-10 md:py-15 md:px-10'>
    <div className='border w-full my-max-width mx-auto
    '>
       <div className=' h-50 text-white'>
      <p>{name}</p>

      <p>{description}</p>

      <img src={image} alt="" />
    </div>
    </div>
   </section>
  )
}

export default Oneproject