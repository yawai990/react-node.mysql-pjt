import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../Context/myContext';

const CreateSuccess = () => {
    const {setSignUpPopUp} = useGlobalContext();
  return (
    <div className='absolute w-full h-full bg-black/[0.7] z-40 flex justify-center items-center'>
        <div className='w-4/5 md:w-1/5 p-2 bg-white rounded-lg relative'>
            <h3 className='text-green-700 text-lg font-semibold tracking-wide text-center'>Account Created</h3>

        <Link to='/signin' className='m-auto self-center block w-3/5 p-2 rounded-lg text-center uppercase font-sans my-2 text-white bg-blue-600' onClick={()=>setSignUpPopUp(false)}>To Login</Link>

        <button className='w-5 h-5 bg-gray-300 rounded-full absolute -top-5 right-2 hover:gray-400 hover:text-red-600 flex justify-center items-center' onClick={()=>setSignUpPopUp(false)}>
            <AiOutlineClose />
        </button>
        </div>
    </div>
  )
}

export default CreateSuccess