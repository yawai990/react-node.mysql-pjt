import React from 'react';
import AddUpdate from './Form';
import { addNewEmpoyee } from '../../api';
import { useGlobalContext } from '../../Context/myContext';

const initState={name:'',nrc:'',region:'',township:'',naing:'',number:'',
phone:'',dob:'',dept:'',position:'',education:'' ,other_qulification:'',status:'',image:''};

const AddStaff = () => {
  const {addForm,setAddForm} = useGlobalContext();
  return (
    <div className='w-full h-full absolute z-10 bg-black/[0.6] flex justify-center items-center'>
      <AddUpdate headerText={'Add New Employees'} apiFunc={addNewEmpoyee} BtnText={'Add Employees'} closeBtn={()=>setAddForm(!addForm)} forUpdate={initState} />
    </div>
  )
}

export default AddStaff