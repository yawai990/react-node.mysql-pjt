import React,{useState,useEffect} from 'react';
import {AiOutlineSearch,AiOutlineClose} from 'react-icons/ai';
import {BsPersonFill} from 'react-icons/bs';
import {Update, StaffModel,Button,AddStaff} from '../components';
import { useGlobalContext } from '../Context/myContext';

const Staff = () => {
    const {staffId,setAddForm,addForm,user,form,employeeData,setEmpolyeeData,getAllStaff,getOneStaff} = useGlobalContext();
    const [searchTerm,setSearchTerm]= useState('');

    const onHandleSubmit =e=>{
        e.preventDefault()
        
        const filter = employeeData.filter(staff=>(staff.name.includes(searchTerm) || staff.dept.includes(searchTerm)) && staff);

        setEmpolyeeData(filter);
        if(searchTerm === ''){
            getAllStaff()
          }
          setSearchTerm('')
    };


  return (
    <div className='w-full h-auto relative'>
        
        {staffId !== null && <StaffModel />}
        {form && <Update />}
        {addForm && <AddStaff />}

        <div className='my-3 p-4 flex items-center justify-between'>
        <h1 className='text-2xl text-gray-600 tracking-wider font-extrabold font-serif'>Employees</h1>
        {user[0].role === 'admin' && <div>
            <Button text='Add New Employee' color='green' func={()=>setAddForm(!addForm)} />
            </div>}
        </div>

        <div className='w-4/5 m-auto rounded-lg drop-shadow-xl overflow-hidden'>

        <section className='w-full bg-slate-100 py-2 flex justify-end'>
        <form className='flex mr-2 focus:border-red-400 duration-400' onSubmit={onHandleSubmit}>
        <input type="text" className='px-2 outline-none bg-transparent border-b border-gray-400 focus:border-red-500 duration-100' value={searchTerm} onChange={e=>setSearchTerm(e.target.value)} />
        <button className='flex justify-center items-center text-slate-800 text-lg'>
            <AiOutlineSearch />
        </button>
        <button className='flex justify-center items-center text-red-700 ' onClick={getAllStaff}>
            <AiOutlineClose />
        </button>
        </form>
        </section>
        <table className='h-auto border bg-white drop-shadow-2xl overflow-x-scroll block whitespace-nowrap'>
            <thead className='bg-gray-600 text-white'>
                <tr>
                <th className='py-2 w-52 inline-block'>Employee</th>
                <th className='w-52 inline-block'>Deparment</th>
                <th className='w-52 inline-block'>Position</th>
                <th className='w-40 inline-block'>Status</th>
                <th className='w-40 inline-block'>Education</th>
                <th className='w-52 inline-block'>Other Qulification</th>
                <th className='w-40 inline-block'>Phone</th>
                     </tr>
            </thead>
            {employeeData === undefined || employeeData.length <= 0 ? <tbody>
                <tr className='my-2'>
                    <td className='text-lg font-semibold tracking-wider py-2'>No record to display</td>
                    </tr>
                </tbody>:
            <tbody className='text-center capitalize'>

               {employeeData.map((staff,ind)=>{
                               return <tr key={ind} className='bg-white py-2 my-2 hover:bg-gray-200 border-b cursor-pointer flex items-center' onClick={(e)=>getOneStaff(staff.id)}>
                        <td className='w-52 flex justify-center items-center'>
                            {staff.image === null || staff.image === '' ? <div className='w-10 h-10 text-gray-400 rounded-full flex justify-center items-center bg-white drop-shadow-xl'>
                                <BsPersonFill className='w-4/5 h-4/5' />
                            </div>:<img src={staff.image} alt="" className='w-10 h-10 block rounded-full object-cover drop-shadow-xl bg-white' />}
                            
                            <span className='ml-2 capitalize'>
                            {staff.name}
                            </span>
                            </td>
                        <td className='w-52 uppercase'>{staff.dept}</td>
                        <td className='w-52'>{staff.position}</td>
                        <td className='w-40'>{staff.status === "1" ? <div className='w-7 h-2 rounded-lg bg-green-600 m-auto'></div>:
                     <div className='w-7 h-2 rounded-lg bg-red-600 m-auto'></div>
                        }</td>
                        <td className='w-40'>{staff.education}</td>
                        <td className='w-52'>{staff.other_qulification}</td>
                        <td className='w-40'>{staff.phone}</td>
                    </tr>
                })}
            </tbody>
}
        </table>
        </div>

    </div>
  )
}

export default Staff;