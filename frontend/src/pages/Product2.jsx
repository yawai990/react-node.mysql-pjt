import React,{useEffect} from 'react';
import {product1Details} from '../data';

const Product2 = () => {

    return (
  
      <div id='product2-details' className='min-h-[60vh] dark:bg-[#3b3a3a]'>
              <div className='my-3 p-4 flex items-center justify-between'>
          <h1 className='text-2xl text-gray-600 tracking-wider font-extrabold font-serif'>Product-2 Details Report</h1>
      </div>
      <div className='w-4/5 m-auto rounded-lg drop-shadow-xl overflow-hidden'>
      <table className='h-auto border bg-white drop-shadow-2xl overflow-x-scroll block whitespace-nowrap dark:bg-[#1c1616]'>
              <thead className='bg-green-600 text-white'>
                  <tr>
                  <th className='py-2 w-20 inline-block'>No</th>
                  <th className='w-52 inline-block'>Customer Name</th>
                  <th className='w-52 inline-block'>Customer Type</th>
                  <th className='w-40 inline-block'>Order Date</th>
                  <th className='w-40 inline-block'>Delivery Date</th>
                  <th className='w-40 inline-block'>Product Name</th>
                  <th className='w-52 inline-block'>Product Price</th>
                  <th className='w-40 inline-block'>Quantity</th>
                  <th className='w-40 inline-block'>Total</th>
                  <th className='w-40 inline-block'> </th>
                  </tr>
              </thead>
              <tbody>
                {product1Details.map(detail=>(
              <tr key={detail.id} className='bg-white py-2 my-2 hover:bg-gray-200 border-b cursor-pointer flex items-center dark:bg-[#1c1616] dark:text-white'>
                        <td className='w-20 flex justify-center items-center'>{detail.id}</td>
                        <td className='w-52 flex justify-center items-center capitalize'>{detail.cur}</td>
                        <td className='w-52 flex justify-center items-center capitalize'>{detail.curType}</td>
                        <td className='w-40 flex justify-center items-center'>{detail.order}</td>
                        <td className='w-40 flex justify-center items-center'>{detail.delivery}</td>
                        <td className='w-40 flex justify-center items-center capitalize'>{detail.product}</td>
                        <td className='w-52 flex justify-center items-center'>{(detail.sellingPrice).toLocaleString()}</td>
                        <td className='w-40 flex justify-center items-center'>{detail.quantity}</td>
                        <td className='w-40 flex justify-center items-center'>{(detail.quantity * detail.sellingPrice).toLocaleString()}
                        <sub style={{fontSize:'14px'}} className='ml-2'> MMK</sub>
                        </td>
                        <td className='w-40 flex justify-center items-center gap-2'>
                            <button className='border p-1 rounded-md bg-red-500 text-white hover:bg-red-700'>delete</button>
                            <button className='border p-1 rounded-md bg-blue-400 text-white hover:bg-blue-700'>update</button>
                        </td>
                    </tr>
                ))}
              </tbody>
          </table>
      </div>
      </div>
    )
  
}

export default Product2