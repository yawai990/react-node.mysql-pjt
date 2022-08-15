import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import {BsEyeSlashFill,BsEyeFill} from 'react-icons/bs';
import { signup } from '../api';
import { useGlobalContext } from '../Context/myContext';

const initState = {
  firstname:'',
  lastname:'',
  email:'',
  password:'',
  confirmpassword:''
};

const Signup = () => {
  const {addUser}= useGlobalContext();
  const [showPassword,setShowPassword] = useState(false);
  const [showConfirmPassword,setShowConfirmPassword] = useState(false);
  const [newAcc,setNewAcc] = useState(initState);
  const [field,setField] = useState(false);

  //checking the password are matching or not;
  const [checkPassword,setCheckPassword] = useState(true);

  const onHandleSubmit =(e)=>{
    e.preventDefault()
    if(newAcc.firstname === '' || newAcc.lastname==='' || newAcc.email === '' || newAcc.password=== '' || newAcc.confirmpassword===''){
      setField(true)
    }else{
      if(newAcc.password !== newAcc.confirmpassword){
        setCheckPassword(false)
        setNewAcc({...newAcc,password:'',confirmpassword:''})
      }else{
        setCheckPassword(true)
        signup(newAcc)
        .then(res=>addUser(res))
        .catch(err=>{
          alert('Something went wrong')
        })
        clear()
      }
      setField(false)
    }
  };
  //clearing the input field
  const clear =()=>{
    if(!checkPassword){
      setNewAcc({...newAcc,password:'',confirmpassword:""})
    }
    setNewAcc(initState)
  }

  return (
    <div className='w-4/5 md:w-96 p-2 drop-shadow-2xl bg-white rounded-xl'>

      <h2 className='font-semibold uppercase text-center text-xl mt-2'>Create Account</h2>

      <form action="" onSubmit={onHandleSubmit} className='p-2'>
        <div className='flex gap-1 flex-col md:flex-row justify-between'>
        <div>
          <label htmlFor="firstName" className='block mb-1 font-semibold tracking-wider'>First Name</label>
          <input type="text" name='firstName' id='firstName' 
          value={newAcc.firstname}
          onChange={e=>setNewAcc({...newAcc,firstname:e.target.value})}
          className='w-full border outline-none px-2 py-1 rounded-lg focus:border-blue-600' />
        </div>
        <div>
          <label htmlFor="lastName" className='block mb-1 font-semibold tracking-wider'>Last Name</label>
          <input type="text" name='lastName' id='lastName'   
          value={newAcc.lastname}
          onChange={e=>setNewAcc({...newAcc,lastname:e.target.value})}  
          className='w-full border outline-none px-2 py-1 rounded-lg focus:border-blue-600'/>
        </div>
        </div>

        <div className='my-2'>
          <label htmlFor="email" className='block mb-1 font-semibold tracking-wider'>Email</label>
          <input type="text" name='email' id='email'          
          value={newAcc.email}
          onChange={e=>setNewAcc({...newAcc,email:e.target.value})}   
          className='w-full border outline-none px-2 py-1 rounded-lg focus:border-blue-600' />
        </div>
        <div className='my-2'>
          <label htmlFor="password" className='block mb-1 font-semibold tracking-wider'>Password</label>
          <div className='w-full flex'>
          <input type={showPassword ? "text":"password"} name='password' id='password'
          value={newAcc.password}
           onChange={e=>setNewAcc({...newAcc,password:e.target.value})}  
           className={`this w-full border outline-none px-2 py-1 border-r-0 rounded-l-lg ${!checkPassword && 'border-red-400'} focus:border-blue-600`} />
          <button type='button' className='that p-1 border rounded-r-lg border-l-0' onClick={()=>setShowPassword(!showPassword)}>
            {showPassword && <BsEyeFill />}
            {!showPassword && <BsEyeSlashFill />}
          </button>
          </div>
          {!checkPassword && <span className='text-red-500 text-sm'>Password are not matching</span>}
        </div>
        <div>
          <label htmlFor="confirmpassword" className='block mb-1 font-semibold tracking-wider'>Confirm Password</label>
          <div className="w-full flex">
          <input  type={showConfirmPassword ? "text":"password"} name='confirmpassword' id='confirmpassword' 
           value={newAcc.confirmpassword}
           onChange={e=>setNewAcc({...newAcc,confirmpassword:e.target.value})}   
           className={`this w-full border outline-none px-2 py-1 border-r-0 rounded-l-lg focus:border-blue-600 ${!checkPassword && 'border-red-400'} `}/>
          <button type='button' className='that p-1 border rounded-r-lg border-l-0' onClick={()=>setShowConfirmPassword(!showPassword)}>
            {showPassword && <BsEyeFill />}
            {!showPassword && <BsEyeSlashFill />}
          </button>
          </div>
           {!checkPassword && <span className='text-red-500 text-sm'>Password are not matching</span>}
        </div>
    {field && <p className='text-center text-red-500 font-semibold tracking-wider py-1'>Please,fill all the require fields.</p>}
        <button type='submit' className='w-full bg-blue-700 text-white py-1 text-center border mt-3 rounded-lg hover:drop-shadow-xl'>Sign Up</button>
      </form>

      <Link to='/signin' className='text-sm hover:text-blue-400 text-slate-400 text-center block my-2'>Have Account? Log In?</Link>
    </div>
  )
}

export default Signup;