import React,{useState} from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { useGlobalContext } from '../../Context/myContext';
import FileBase64 from 'react-file-base64';
import { updateEmployee } from '../../api';

const initState={name:'',nrc:'',region:'',township:'',naing:'',number:'',
phone:'',dob:'',dept:'',position:'',education:'' ,other_qulification:'',status:'',image:''};

const Form = () => {
    const {setForm,updateOneEmployee,setStaffId,setRespText} = useGlobalContext();

    const [employeeData,setEmployeeData] = useState(updateOneEmployee[0]);

    const onHandleSubmit =async(e)=>{
      e.preventDefault();
    
      setEmployeeData({...employeeData})

      updateEmployee(employeeData.id,employeeData).then(resp=>{
        setStaffId(null)
        setRespText(resp.data.message)
      })
      //remove the form 
      setForm(false)

    }
  return (
    <div className='w-full bg-black/[0.08] absolute z-50 p-2 md:p-0'>

      <div className='w-full md:w-3/5 m-auto mt-5 bg-white rounded-lg drop-shadow-2xl p-4 '>

      <div className='pb-5'>
        <h1 className='uppercase text-lg font-semibold text-center '>Update Employees</h1>

      <button className='fixed top-2 right-2 bg-red-400 text-white hover:bg-red-700 p-1 drop-shadow-2xl text-xl rounded-full' onClick={()=>setForm(false)}>
          <AiOutlineClose />
      </button>
      </div>

        <form className='flex flex-col gap-4' onSubmit={onHandleSubmit}>
                <div className='flex flex-col md:flex-row items-center'>
                <label htmlFor="dept" className='w-full md:w-2/4 md:text-center font-semibold text-lg'>Name :</label>
                  <input type="text" name='name' id='name' 
                  value={employeeData.name} 
                  onChange={(e)=>setEmployeeData({...employeeData,name:e.target.value})}
                  className='w-full border outline-none p-1 rounded-lg focus:border-blue-400' />
                </div>

                  {/* need to format */}
                <div className='flex flex-col md:flex-row items-center'>
                <label htmlFor="dept" className='w-full md:w-2/4 md:text-center font-semibold text-lg'>NRC Number :</label>
                  {/* <input type="text" name='nrc' id='nrc' className='w-full border outline-none p-1 rounded-lg focus:border-blue-400' /> */}
                  <div name='nrc' id="nrc" className='w-full outline-none p-1 rounded-lg focus:border-blue-400 flex gap-2'>
                    <select name="region" id="region" 
                        value={employeeData.region || 1} 
                        onChange={(e)=>setEmployeeData({...employeeData,region:e.target.value})} 
                    className='border outline-none p-1 rounded-lg focus:border-blue-400'>
                       {[1,2,3,4,5,6,7,8,9,10,11,12,13,14].map(num=>(
                        <option key={num} value={`${num}`}>{num}</option>
                       ))}
                    </select>
                    <input type="text"  
                        value={employeeData.township || ''} 
                        onChange={(e)=>setEmployeeData({...employeeData,township:e.target.value})} 
                    className='border flex-1 rounded-lg focus:border-blue-400 outline-none'  />

                    <select name="region" id="" 
                        value={employeeData.naing} 
                        onChange={(e)=>setEmployeeData({...employeeData,naing:e.target.value})} 
                    className='border outline-none p-1 rounded-lg focus:border-blue-400'>
                        <option value='N' defaultValue='N'>(N)</option>
                    </select>

                    <input type="number" min={1} max={999999}
                        value={employeeData.number || ''} 
                        onChange={(e)=>setEmployeeData({...employeeData,number:e.target.value})} 
                      className='border flex-1 rounded-lg focus:border-blue-400 outline-none'  />
                  </div>
                </div>
         
                <div className='flex flex-col md:flex-row items-center'>
                <label htmlFor="dept" className='w-full md:w-2/4 md:text-center font-semibold text-lg'>Phone :</label>
                  <input type="tel" name='nrc' id='nrc' pattern="[0][9][0-9]{3}[0-9]{3}[0-9]{3}" 
                                    value={employeeData.phone} 
                                    onChange={(e)=>setEmployeeData({...employeeData,phone:e.target.value})}className='w-full border outline-none p-1 rounded-lg focus:border-blue-400' />
                </div>

                <div className='flex flex-col md:flex-row items-center'>
                <label htmlFor="dept" className='w-full md:w-2/4 md:text-center font-semibold text-lg'>Date Of Birth :</label>
                  <input type="date" name='nrc' id='nrc' 
                                    value={employeeData.dob} 
                                    onChange={(e)=>setEmployeeData({...employeeData,dob:e.target.value})}
                                     className='w-full border outline-none p-1 rounded-lg focus:border-blue-400' />
                </div>

                <div className='flex flex-col md:flex-row items-center'>
                  <label htmlFor="dept" className='w-full md:w-2/4 md:text-center font-semibold text-lg'>Department :</label>
                  <input type="text" name='dept' id='dept' 
                                    value={employeeData.dept} 
                                    onChange={(e)=>setEmployeeData({...employeeData,dept:e.target.value})}
                   className='w-full border outline-none p-1 rounded-lg focus:border-blue-400' />
                </div>

                <div className='flex flex-col md:flex-row items-center'>
                  <label htmlFor="pos" className='w-full md:w-2/4 md:text-center font-semibold text-lg'>Position  :</label>
                  <input type="text" name='pos' id='pos' 
                                    value={employeeData.position} 
                                    onChange={(e)=>setEmployeeData({...employeeData,position:e.target.value})} 
                  className='w-full border outline-none p-1 rounded-lg focus:border-blue-400' />
                </div>

                <div className='flex flex-col md:flex-row items-center'>
                <label htmlFor="dept" className='w-full md:w-2/4 md:text-center font-semibold text-lg'>Education :</label>
                  <input type="text" name='nrc' id='nrc' 
                      value={employeeData.education} 
                      onChange={(e)=>setEmployeeData({...employeeData,education:e.target.value})} 
                  className='w-full border outline-none p-1 rounded-lg focus:border-blue-400' />
                </div>

                <div className='flex flex-col md:flex-row items-center'>
                  <label htmlFor="pos" className='w-full md:w-2/4 md:text-center font-semibold text-lg'>Other Qulification  :</label>
                  <input type="text" name='pos' id='pos' 
                      value={employeeData.other_qulification} 
                      onChange={(e)=>setEmployeeData({...employeeData,other_qulification:e.target.value})} 
                   className='w-full border outline-none p-1 rounded-lg focus:border-blue-400' />
                </div>

                <div className='flex flex-col md:flex-row items-center'>
                  <label htmlFor="status" className='w-full md:w-2/4 md:text-center font-semibold text-lg'>Status  :</label>
                  <select name="status" id="status"
                      value={employeeData.status} 
                      onChange={(e)=>setEmployeeData({...employeeData,status:e.target.value})} 
                   className='w-full border outline-none p-1 rounded-lg focus:border-blue-400'>
                    <option value="0" className=''>Resigned</option>
                    <option value="1" className=' '>Working</option>
                  </select>
                </div>

                <div className='flex flex-col md:flex-row items-center'>
                <label htmlFor="img" className='w-full md:w-2/4 md:text-center font-semibold text-lg'>Photo :</label>
                  {/* <input type="file" name='img' id='img' className='w-full border outline-none p-1 rounded-lg focus:border-blue-400' /> */}
                  <div className='w-full border p-1 rounded-lg'>
                  <FileBase64 type='file' multiple={false} value={employeeData.image} onDone={({base64})=>setEmployeeData({...employeeData,image:base64})} />
                  </div>
                </div>

                <button className='w-full bg-blue-500 rounded-lg my-2 text-white py-1 text-lg hover:bg-blue-800 hover:drop-shadow-2xl'>Update</button>
        </form>
      </div>
    </div>
  )
}

export default Form