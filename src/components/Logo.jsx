import React from 'react'
import speak from '../assets/speak.png'


function Logo({width='100px'}) {
  return (
    <div className='  w-[80px] h-[40px]'
    style={{backgroundImage: `url(${speak})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' , height: '50px'}
    }
    >
      
    </div>
  )
}

export default Logo