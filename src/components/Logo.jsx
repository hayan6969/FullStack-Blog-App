import React from 'react'

import codeSpace from '../assets/logo/codeSpace.png'


function Logo({width='100px'}) {
  return (
    <div className='   w-[100px] h-[50px]'
    >
      <img className='h-[100%] w-[100%] object-cover' src={codeSpace}  alt="" />
    </div>
  )
}

export default Logo