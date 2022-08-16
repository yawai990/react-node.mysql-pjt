import React,{useState} from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import { Signin,Signup } from './auth';
import {Home,Staff,DetailChart,Product,User} from './pages';
import {Popup} from './components';
import { useGlobalContext } from './Context/myContext';

const App = () => {
  const {haveAcc,staffId,user} = useGlobalContext();
  const [darkTheme,setDarkTheme] = useState('light')

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
    <div className={darkTheme === 'dark' ? 'dark':''}>
      <Popup />
    <Home />
    <Staff />
    {/* <DetailChart /> */}
    <Product />

    {user[0].role === 'admin' &&  <User />}
    </div>
  )
}

export default App