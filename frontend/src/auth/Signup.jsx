import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {

  const onHandleSubmit =(e)=>{
    e.preventDefault()
  }

  return (
    <div className='w-4/5 md:w-96 py-2 drop-shadow-2xl bg-white rounded-xl'>

      <h2 className='font-semibold uppercase text-center text-xl mt-2'>Create Account</h2>

      <form action="" onSubmit={onHandleSubmit} className='p-2'>
        <div className='flex gap-2'>
        <div>
          <label htmlFor="firstName" className='block mb-1 font-semibold tracking-wider'>First Name</label>
          <input type="text" name='firstName' id='firstName' className='w-full border outline-none px-2 py-1 rounded-lg focus:border-blue-600' />
        </div>
        <div>
          <label htmlFor="lastName" className='block mb-1 font-semibold tracking-wider'>Last Name</label>
          <input type="text" name='lastName' id='lastName'  className='w-full border outline-none px-2 py-1 rounded-lg focus:border-blue-600'/>
        </div>
        </div>

        <div className='my-2'>
          <label htmlFor="email" className='block mb-1 font-semibold tracking-wider'>Email</label>
          <input type="text" name='email' id='email' className='w-full border outline-none px-2 py-1 rounded-lg focus:border-blue-600' />
        </div>
        <div className='my-2'>
          <label htmlFor="password" className='block mb-1 font-semibold tracking-wider'>Password</label>
          <input type="text" name='password' id='password' className='w-full border outline-none px-2 py-1 rounded-lg focus:border-blue-600' />
        </div>
        <div>
          <label htmlFor="confirmpassword" className='block mb-1 font-semibold tracking-wider'>Confirm Password</label>
          <input type="text" name='confirmpassword' id='confirmpassword'  className='w-full border outline-none px-2 py-1 rounded-lg focus:border-blue-600'/>
        </div>

        <button type='submit' className='w-full bg-blue-700 text-white py-1 text-center border mt-3 rounded-lg hover:drop-shadow-xl'>Sign Up</button>
      </form>

      <Link to='/signin' className='text-sm hover:text-blue-400 text-slate-400 text-center block my-2'>Have Account? Log In?</Link>
    </div>
  )
}

export default Signup;