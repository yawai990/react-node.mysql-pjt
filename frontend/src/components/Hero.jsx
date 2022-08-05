import React from 'react'

const Hero = () => {
  return (
    <div>
        <div className="flex justify-around gap-4 p-4 mt-5">
            <div className='flex-1 flex items-start flex-col justify-center h-40 bg-hero-pattern bg-center bg-cover bg-no-repeat text-white drop-shadow-2xl rounded-lg p-2 border'>
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
    </div>
  )
}

export default Hero