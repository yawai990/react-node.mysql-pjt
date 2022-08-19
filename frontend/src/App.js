import React,{useState} from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import { Signin,Signup } from './auth';
import {Home,Staff,DetailChart,Product,User,Footer,Product1,Product2,Product3} from './pages';
import {Popup} from './components';
import { useGlobalContext } from './Context/myContext';

const App = () => {
  const {haveAcc,staffId,user,darkTheme} = useGlobalContext();

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
    <div id="App" className={darkTheme === 'dark' ? 'dark':''}>
      <div className='dark:bg-[#3b3a3a]'>
      <Popup />
    <Home />
    <Staff />
    {/* <DetailChart /> */}
    <Product />

    <Product1 />
    <Product2 />
    <Product3 />
    {user[0].role === 'admin' &&  <User />}
    <Footer />
    </div>
    </div>
  )
}

export default App