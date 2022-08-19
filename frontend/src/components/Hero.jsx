import React,{useState} from 'react';
import {GoPrimitiveDot} from 'react-icons/go';
import { useGlobalContext } from '../Context/myContext';
import {Income,Expence,Product2Exp,Product2Income,Product3Income,Product3Exp} from './chart';
import { SparklineAreaData,NincheLineAreaData } from '../data';

const Hero = () => {
    const {dataShow,setDataShow} = useGlobalContext();
    const [product2Exp,setProduct2Exp] = useState(false);
    const [product3Exp,setProduct3Exp] = useState(false);

  return (
    <div className='dark:border-red-400'>
        <div className="flex flex-col md:flex-row justify-around gap-4 p-4 mt-5">
            <div className='flex-1 flex items-start flex-col justify-center md:h-40 bg-hero-pattern bg-center bg-cover bg-no-repeat text-white drop-shadow-2xl rounded-lg p-2 border'>
                <h1 className='text-xl tracking-widest uppercase font-semibold text-gray-400 '>Total Revenue</h1>
                <p>
                    <span className='text-3xl font-semibold tracking-wider'>21,365,958</span>
                    <span className='font-semibold text-lg'> MMK</span>
                </p>
            </div>

            <div className='flex-1 text-slate-900 bg-expences-bg bg-cover bg-no-repeat bg-center drop-shadow-2xl rounded-lg flex flex-col items-start justify-center p-2'>
            <h1 className='text-xl tracking-widest uppercase font-bold text-gray-700 '>Total Expences</h1>
                <p>
                <span className='text-3xl font-semibold tracking-wider'>15,235,626</span>
                    <span className='font-semibold text-lg'> MMK</span> <span></span>
                </p>
            </div>
        </div>

            <div className='p-2'>
        <h1 className='font-bold text-2xl uppercase'>Sale Process - 1</h1>
        <div className='flex flex-wrap gap-2'>

                {/* mass card */}
            <div className='w-full md:flex-1 rounded-lg overflow-hidden bg-white drop-shadow-2xl'>
                
                <div className='flex justify-between items-center p-2 bg-slate-300 drop-shadow-xl'>
                    <h4 className='font-semibold text-lg tracking-wider'>Product-1 Total</h4>

                    <div className="flex gap-2">
                        <button className='flex items-center' 
                        style={{
                            color:dataShow === 'income' && 'blue'
                        }}
                        onClick={()=>setDataShow('income')}>
                            <GoPrimitiveDot />
                            <span>Income</span>
                        </button>
                        <button className='flex items-center' 
                             style={{
                                color:dataShow === 'expence' && 'red'
                            }}
                        onClick={()=>setDataShow('expence')}>
                            <GoPrimitiveDot />
                            <span>Expence</span>
                        </button>
                    </div>
                </div>

                {/* chart area */}
                <div className='w-full h-80 flex justify-center items-center flex-col dark:bg-[#1c1616]'>
                    {dataShow === 'income' ? <Income lineData={SparklineAreaData} />:<Expence width='60%' height='50%' />}
                </div>
            </div>

            {/* Ninche card area */}
            <div className='w-full md:flex-1 rounded-lg overflow-hidden bg-white drop-shadow-2xl'>
                
                <div className='flex justify-between items-center p-2 bg-slate-300 drop-shadow-xl'>
                    <h4 className='font-semibold text-lg tracking-wider'>Product-2 Total</h4>

                    <div className="flex gap-2">
                        <button style={{color:!product2Exp && 'blue'}} className='flex items-center' onClick={()=>setProduct2Exp(false)}>
                            <GoPrimitiveDot />
                            <span>Income</span>
                        </button>
                        <button style={{color:product2Exp && 'red'}} className='flex items-center' onClick={()=>setProduct2Exp(true)}>
                            <GoPrimitiveDot />
                            <span>Expence</span>
                        </button>
                    </div>
                </div>

                {/* chart area */}
                <div className='w-full h-80 flex justify-center items-center flex-col dark:bg-[#1c1616]'>
              {!product2Exp ? <Product2Income />:<Product2Exp width='60%' height='50%'  />}
     
                </div>
            </div>

            {/* pure honey card area */}
            <div className='w-full md:flex-1 rounded-lg overflow-hidden bg-white drop-shadow-xl'>
                
                <div className='flex justify-between items-center p-2 bg-slate-300 drop-shadow-xl'>
                    <h4 className='font-semibold text-lg tracking-wider'>Product-3</h4>

                    <div className="flex gap-2">
                        <button style={{color:!product3Exp && 'blue'}} className='flex items-center' onClick={()=>setProduct3Exp(false)}>
                            <GoPrimitiveDot />
                            <span>Income</span>
                        </button>
                        <button style={{color:product3Exp && 'red'}} className='flex items-center' onClick={()=>setProduct3Exp(true)}>
                            <GoPrimitiveDot />
                            <span>Expence</span>
                        </button>
                    </div>
                </div>

                {/* chart area */}
                <div className='w-full h-80 flex justify-center items-center flex-col dark:bg-[#1c1616] dark:text-white'>
                {!product3Exp ? <Product3Income />:<Product3Exp width='60%' height='50%' />}
                </div>
            </div>
        </div>
        </div>


    </div>
  )
}

export default Hero