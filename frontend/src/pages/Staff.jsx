import React,{useState,useEffect} from 'react';
import {AiOutlineSearch} from 'react-icons/ai';

const staffs = [
    {profile:'https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',name:'aung aung',dept:'manufacturing',hireDate:'20/12/2022'},
    {profile:'https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',name:'zaw zaw',dept:'M&E',hireDate:'10/11/2019'},
    {profile:'https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1476&q=80',name:'kyaw kyaw',dept:'system developement',hireDate:'20/12/2018'},
    {profile:'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',name:'ko ko aung',dept:'purchase',hireDate:'20/12/2015'}
];

const Staff = () => {
    const [searchTerm,setSearchTerm]= useState('');
    const [employeeData,setEmpolyeeData] = useState(undefined)

    useEffect(() => {
        setEmpolyeeData(staffs)
    }, []);
    
    const onHandleSubmit =e=>{
        e.preventDefault()
        
        const filter = staffs.filter(staff=>staff.name.includes(searchTerm) || staff.dept.includes(searchTerm) && staff);

        setEmpolyeeData(filter);

        setSearchTerm('')
    };


  return (
    <div className='w-screen p-2'>
        <h1 className='text-2xl text-gray-600 tracking-wider font-bold'>Employees</h1>

        <div className='w-4/5 m-auto rounded-lg overflow-hidden'>

        <section className='w-full bg-slate-100 py-2 flex justify-end'>
        <form className='px-2 flex border-b border-blue-400 mr-2 focus:border-red-400 duration-400' onSubmit={onHandleSubmit}>
        <input type="text" className='outline-none bg-transparent' value={searchTerm} onChange={e=>setSearchTerm(e.target.value)} />
        <button className='flex justify-center items-center text-slate-800 text-lg'>
            <AiOutlineSearch />
        </button>
        </form>
        </section>
        <table className='w-full h-auto border bg-white drop-shadow-2xl'>
            <thead className='bg-gray-600 text-white'>
                <tr>
                <th className='py-2'>Employee</th>
                <th>Deparment</th>
                <th>Hire Date</th>
                </tr>
            </thead>
            {employeeData === undefined ? <tbody>
                <tr>
                    <td>No record to display</td>
                    </tr>
                </tbody>:
            <tbody className='text-center capitalize'>
               {employeeData.map((staff,ind)=>(
                    <tr key={ind} className='bg-white py-5 my-2 hover:bg-gray-200 border-b'>
                        <td className='flex justify-center items-center py-1 my-1'>
                            <img src={staff.profile} alt="" className='w-10 h-10 block rounded-full object-cover' />
                            <span className='ml-2'>
                            {staff.name}
                            </span>
                            </td>
                        <td>{staff.dept}</td>
                        <td>{staff.hireDate}</td>
                    </tr>
                ))}
            </tbody>
}
        </table>
        </div>
    </div>
  )
}

export default Staff;