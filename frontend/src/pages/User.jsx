import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import {BsPersonFill} from 'react-icons/bs';
import { useGlobalContext } from '../Context/myContext';

const User = () => {
    const {getUsers,deleteuser} = useGlobalContext();

  return (
    <div id='users' className='w-full h-auto p-2'>

        <h2 className='font-semibold uppercase font-sans text-xl text-gray-600'>User Lists</h2>
        <div className='p-2 flex flex-wrap gap-3'>
        {getUsers.map(user=>(
            <div key={user.id} className="w-full md:w-auto m-3 flex px-2 py-3 relative bg-white rounded-lg drop-shadow-2xl">
                <button className='w-7 h-7 rounded-full absolute top-1 bg-white drop-shadow right-2 flex justify-center items-center hover:drop-shadow-xl hover:bg-red-500 hover:text-white text-red-800' onClick={()=>deleteuser(user.id)}>
                    <AiOutlineClose />
                </button>
                <div className='w-2/5 p-2'>
                    {
                    user.image === null || user.image === '' ? <div className='w-20 h-20 text-gray-400 rounded-full flex justify-center items-center bg-white drop-shadow-xl'>
                                <BsPersonFill className='w-4/5 h-4/5' />
                            </div>:
                <img src={user.image} alt="" className='w-20 h-20 rounded-full border-2 border-gray-400' />
                }
                </div>

                <div className='flex-1 p-3'>
                    <h2>{user.name}</h2>
                    <p>{user.email}</p>
                    <p>{user.role}</p>
                </div>
            </div>
        ))}
        </div>
    </div>
  )
}

export default User