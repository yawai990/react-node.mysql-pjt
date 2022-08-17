import React,{useState,useEffect} from 'react';
import {FaSearch} from 'react-icons/fa';
import { Notification,Navbars } from '../constant';
import {useGlobalContext} from '../Context/myContext';

const Navbar = () => {
  const [sticky,setSticky] = useState(false);
  const Navclass ='';
  const stickyNavClass='w-full h-12 bg-white drop-shadow-lg flex items-center justify-center md:justify-around fixed top-0 z-50';

  const stickyNav=()=>{
   window.scrollY > 120 ? setSticky(true):setSticky(false)
  }

  useEffect(()=>{
      window.addEventListener('scroll',stickyNav)
  },[])

  const {user,setHaveAcc} = useGlobalContext();
  return (
    <div className={`${sticky && 'navani'} w-full h-12 bg-white drop-shadow-lg flex items-center justify-center md:justify-around z-50 ${sticky && 'bg-transparent backdrop-blur-md border-b border-gray-400'}`}>
        <div className='w-60 h-3/4 items-center rounded-lg hidden md:flex'>
            <input type="text" className='h-3/4 border-b outline-none flex-1 focus:border-red-400 duration-50 focus:border-b-2' />
            <button className='bg-blue-500 text-white rounded-r-lg h-3/4 flex justify-center items-center p-2'>
                <FaSearch />
            </button>
        </div>

        <div className='h-full flex items-center gap-2'>
          {Navbars.map(nav=>(
            <button key={nav.id} className='nav-btn relative h-full px-2 text-2xl text-slate-400 hover:text-white duration-200'>
              {nav.icon}
            </button>
          ))}
        </div>

        <div className='md:flex gap-4 hidden'>
        <div className='flex justify-around gap-3 px-2'>
            {Notification.map(noti=>(
              <div key={noti.id} className="w-8 h-8 rounded-full bg-white drop-shadow-xl text-slate-500 hover:bg-blue-500 hover:text-white hover:drop-shadow-3xl overflow-hidden relative p-2">
                <button className="w-full h-full flex justify-center items-center text-2xl">
               {noti.icon}            
                </button>
              </div>
            ))}
          </div>
          
          <div className='flex items-center gap-2'>

              <div className='w-8 h-8 rounded-full bg-red-400 overflow-hidden'>
                  <img src="https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png" alt="" className='w-full h-full object-cover' />
              </div>
            <p className='capitalize font-semibold'>{user === '' ? 'username':user[0].name}</p>

            <button className='hover:bg-red-700 capitalize border p-1 bg-red-400 text-white rounded-lg' onClick={()=>{
              setHaveAcc('')
            }}>log out</button>
          </div>
        </div>
    </div>
  )
}

export default Navbar