import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import { login } from '../api';
import { useGlobalContext } from '../Context/myContext';

const initState = {
  email:'',
  password:''
}

const Singin = () => {
  const {user,addUser,setHaveAcc} = useGlobalContext();
  const [data,setData] = useState(initState);
  const [incorrectPassword,setIncorrectPassword] = useState(false);

  const onHandleSubmit =(e)=>{
    e.preventDefault()
    login(data)
    .then(resp=>addUser(resp.data))
    .catch(err=>{
      if(err){
        setIncorrectPassword(true)
      }
    })
    clear()
  }
  const clear=e=>{
    setData(initState)
  };
  return (
    <div className='w-screen h-screen relative flex justify-center items-center'>
    {incorrectPassword &&  <div className='w-full h-full flex justify-center items-center z-50 bg-black/[0.65] absolute'>
      <div className="bg-white rounded-lg drop-shadow-2xl px-10 py-3">
        <h1 className='font-semibold tracking-widest'>"Wrong credential"</h1>
        <button onClick={e=>setIncorrectPassword(false)} className='block m-auto rounded-lg capitalize font-semidbold text-gray-700 tracking-wider px-5 py-2 my-3 bg-red-400 hover:drop-shadow-2xl hover:bg-red-500 hover:text-white'>try again</button>
      </div>
    </div>}
    
    {/* login form */}
    <div className='w-4/5 md:w-96 py-2 drop-shadow-2xl bg-white rounded-xl'>
      <h2 className='font-semibold uppercase text-center text-xl mt-2'>Log In</h2>

      <form action="" onSubmit={onHandleSubmit} className='p-2'>
        <div>
          <label htmlFor="userName" className='block mb-1 font-semibold tracking-wider'>Email Or Phone</label>
          <input type="text" name='userName' id='userName' value={data.email} onChange={e=>setData({...data,email:e.target.value})} className='w-full border outline-none px-2 py-1 rounded-lg focus:border-blue-600' />
        </div>
        <div className='my-3'>
          <label htmlFor="password"className='block mb-1 font-semibold tracking-wider'>Password</label>
          <input type="text" name='password' id='password' value={data.password} onChange={e=>setData({...data,password:e.target.value})} className='w-full border outline-none px-2 py-1 rounded-lg focus:border-blue-600'/>
        </div>

        <button type='submit' className='w-full bg-blue-700 text-white py-1 text-center border mt-3 rounded-lg hover:drop-shadow-xl'>Log In</button>
      </form>

    <div className='flex justify-center items-center flex-col mt-2 gap-2'>
      <Link to='/' className='text-slate-400 text-sm hover:text-blue-400'>forget password?</Link>
      <Link to='/signup' className='text-slate-400 text-sm hover:text-blue-400'>Don't have accout?Sign up?</Link>
      </div>
    </div>
    </div>
  )
}

export default Singin;