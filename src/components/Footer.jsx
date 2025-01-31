import React from 'react'

function Footer() {
  return (
    <div className='py-5 bg-slate-800 text-center text-gray-300 rounded-t-lg'>
      <a href="#hero" className='block text-xl md:text-2xl font-semibold'> Halimo Ali</a>
      <a href="mailto:halimoali94@gmail.com" className='font-regular text-sm md:text-md hover:text-cyan-500'>Halimoali94@gmail.com</a>

      <p className='text-xs font-regular mt-2 text-gray-500'>
      &#169; Halimo Ali {new Date().getFullYear()}. All rights reserved
      </p>
    </div>
  )
}

export default Footer
