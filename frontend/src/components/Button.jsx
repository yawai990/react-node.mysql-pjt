import React from 'react';

const Button = ({text,color,func}) => {
  return (
    <button 
    style={{backgroundColor:color ? color:'rgba(0,0,0,0.6'}}
    className='mt-3 p-2 rounded-lg hover:drop-shadow-xl text-white'>
        {text}
    </button>
  )
}

export default Button