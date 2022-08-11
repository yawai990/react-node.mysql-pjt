import React,{useEffect} from 'react';
import {AiOutlineClose} from 'react-icons/ai';
import { BsPersonFill } from 'react-icons/bs';
import { useGlobalContext } from '../Context/myContext';
import Button from './Button';
import {deleteEmployees} from '../api';


const StaffModel = () => {
    const {staffId,getStaffId,user,setForm,employeeData,getAllStaff} = useGlobalContext();

    const {id,image,name,nrc,dob,education,dept,other_qulification,phone,position} = employeeData[staffId];

  return (
    <div className='w-full h-full absolute z-10 bg-black/[0.6] flex justify-center items-center'>

        <div className='w-3/5 bg-white rounded-lg drop-shadow-2xl relative flex p-4 gap-4 items-center'>
                  {image === null ? <div className='w-36 h-36 text-gray-400 border border-4 border-gray-300 rounded-lg flex justify-center items-center hover:drop-shadow-xl'>
                                <BsPersonFill className='w-full h-full' />
                            </div>:
                            <img src={image} alt=""  className='w-36 h-36 object-cover border border-4 border-gray-300 rounded-lg hover:shadow-xl hover:shadow-gray-200' />}

                <div className='p-2'>
                <div>
                    <span className='font-semibold mr-1'>Name :</span>
                    <span className='capitalize'>{name}</span>
                </div>

                <div className='my-2'>
                    <span className='font-semibold mr-1'>NRC No :</span>
                    <span className='capitalize'>{nrc}</span>
                </div>

                <div className='my-2'>
                    <span className='font-semibold mr-1'>Date Of Birth :</span>
                    <span className='capitalize'>{dob}</span>
                </div>

                <div className='my-2'>
                    <span className='font-semibold mr-1'>Phone No :</span>
                    <span className='capitalize'>{phone}</span>
                </div>

                <div className='my-2'>
                    <span className='font-semibold mr-1'>Department :</span>
                    <span className='capitalize'>{dept}</span>
                </div>
                <div className='my-2'>
                    <span className='font-semibold mr-1'>Position :</span>
                    <span className='capitalize'>{[position]}</span>
                </div>
               
                <div className='my-2'>
                    <span className='font-semibold mr-1'>Education :</span>
                    <span className='capitalize'>{education}</span>
                </div>
                

                <div className='my-2'>
                    <span className='font-semibold mr-1'>Other Qulification :</span>
                    <span className='capitalize'>{other_qulification}</span>
                </div>


                    {/* if  the user role is admin, the user can use the following func,otherwise the user can't */}
                    {user[0].role === 'admin' && <div className='flex gap-4'>
                <Button text={'Delete'} color='#c22710' func={deleteEmployees(id).then(resp=>getAllStaff())}  />
                <Button text={'Update'} color='#05b31a' func={setForm}/>
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