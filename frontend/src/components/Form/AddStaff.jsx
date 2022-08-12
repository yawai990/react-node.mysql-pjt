import React from 'react';
import AddUpdate from './AddUpdate';
import { useGlobalContext } from '../../Context/myContext';

const AddStaff = () => {
  const {addForm,setAddForm} = useGlobalContext();
  return (
    <div className='w-full h-full absolute z-10 bg-black/[0.6] flex justify-center items-center'>
      <AddUpdate headerText={'Add New Employees'} BtnText={'Add Employees'} closeBtn={()=>setAddForm(!addForm)} />
    </div>
  )
}

export default AddStaff