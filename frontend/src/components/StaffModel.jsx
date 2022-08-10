import React from 'react';
import {AiOutlineClose} from 'react-icons/ai';
import { useGlobalContext } from '../Context/myContext';
import Button from './Button';

const staffs = [
      {profile:'https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',name:'aung aung',dept:'manufacturing',hireDate:'20/12/2022'},
    {profile:'https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',name:'zaw zaw',dept:'M&E',hireDate:'10/11/2019'},
    {profile:'https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1476&q=80',name:'kyaw kyaw',dept:'system developement',hireDate:'20/12/2018'},
    {profile:'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',name:'ko ko aung',dept:'purchase',hireDate:'20/12/2015'}
];

const StaffModel = () => {
    const {staffId,getStaffId,user} = useGlobalContext();

  return (
    <div className='w-full h-full absolute z-10 bg-black/[0.6] flex justify-center items-center'>

        <div className='w-3/5 bg-white rounded-lg drop-shadow-2xl relative flex p-4 gap-4 items-center'>
            
            <div>
                <img src={staffs[staffId].profile} alt="" className='w-40 h-40 object-cover border border-4 border-gray-300 rounded-lg hover:shadow-xl hover:shadow-gray-200' />
            </div>

            <div className='p-2'>
                <div>
                    <span className='font-semibold mr-1'>Name :</span>
                    <span className='capitalize'>{staffs[staffId].name}</span>
                </div>

                <div className='my-2'>
                    <span className='font-semibold mr-1'>NRC No :</span>
                    <span className='capitalize'>{staffs[staffId].name}</span>
                </div>

                <div className='my-2'>
                    <span className='font-semibold mr-1'>Phone No :</span>
                    <span className='capitalize'>{staffs[staffId].name}</span>
                </div>

                <div className='my-2'>
                    <span className='font-semibold mr-1'>Education :</span>
                    <span className='capitalize'>{staffs[staffId].name}</span>
                </div>

                <div className='my-2'>
                    <span className='font-semibold mr-1'>Address :</span>
                    <span className='capitalize'>{staffs[staffId].name}</span>
                </div>


                    {/* if  the user role is admin, the user can use the following func,otherwise the user can't */}
                    {user[0].role === 'admin' && <div className='flex gap-4'>
                <Button text={'Delete'} color='#c22710' func={{}} />
                <Button text={'Update'} color='#05b31a' func={{}} />
                </div>
                }
                
            </div>

            <button onClick={()=>getStaffId(null)} className='fixed top-5 right-5 text-lg bg-gray-500 drop-shadow-2xl rounded-full p-1 hover:drop-shadow-3xl text-white hover:bg-red-600'>
                <AiOutlineClose />
                </button>
              </div>
    </div>
  )
}

export default StaffModel;