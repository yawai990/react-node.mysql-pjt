import React,{useState} from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import { Signin,Signup } from './auth';
import {Home} from './pages';
import { useGlobalContext } from './Context/myContext';

const App = () => {
  const {haveAcc} = useGlobalContext();

  if(!haveAcc){
   return <div className='w-screen h-screen flex justify-center items-center relative'>
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<Signin />} />
      <Route path='/signin' element={<Signin />} />
      <Route path='/signup' element={<Signup />} />
    </Routes>
    </BrowserRouter>
    </div>
  }
  return (
    <BrowserRouter>
    <h1 className='underline text-3xl text-slate-500'>hello world</h1>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/home' element={<Home />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App