import React from 'react';
import { Link } from 'react-router-dom';

const Singin = () => {

  const onHandleSubmit =(e)=>{
    e.preventDefault()
  }
  return (
    <div className='w-4/5 md:w-96 py-2 drop-shadow-2xl bg-white rounded-xl'>
      <h2 className='font-semibold uppercase text-center text-xl mt-2'>Log In</h2>

      <form action="" onSubmit={onHandleSubmit} className='p-2'>
        <div>
          <label htmlFor="userName" className='block mb-1 font-semibold tracking-wider'>Email Or Phone</label>
          <input type="text" name='userName' id='userName' className='w-full border outline-none px-2 py-1 rounded-lg focus:border-blue-600' />
        </div>
        <div className='my-3'>
          <label htmlFor="password"className='block mb-1 font-semibold tracking-wider'>Password</label>
          <input type="text" name='password' id='password' className='w-full border outline-none px-2 py-1 rounded-lg focus:border-blue-600'/>
        </div>

        <button type='submit' className='w-full bg-blue-700 text-white py-1 text-center border mt-3 rounded-lg hover:drop-shadow-xl'>Log In</button>
      </form>

    <div className='flex justify-center items-center flex-col mt-2 gap-2'>
      <Link to='/' className='text-slate-400 text-sm hover:text-blue-400'>forget password?</Link>
      <Link to='/signup' className='text-slate-400 text-sm hover:text-blue-400'>Don't have accout?Sign up?</Link>
      </div>
    </div>
  )
}

export default Singin;