import React from 'react';
import { useGlobalContext } from '../Context/myContext';

const Popup = () => {
    const {respText} = useGlobalContext();

  return (
    <div 
    className={`${respText !== '' ? 'fixed bottom-5 right-5 p-4 rounded-lg drop-shadow-xl z-50':'hidden'} bg-green-600 duration-500`}>
            <p className='capitalize tracking-wider font-serif text-white'>{respText}</p>
    </div>
  )
}

export default Popup;