import React,{useState} from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import {FiPackage} from 'react-icons/fi';
import Button from './Button';
import { useGlobalContext } from '../Context/myContext';
import { dummyProduct } from '../data';

const ProductModel = () => {
    const {user,setProductModel} = useGlobalContext();
    const [loading,setLoading] = useState(false);

    const {id,productImg,product,purchase,selling1,selling2,type,stock} = dummyProduct[0];
  return (
    <div className='w-full h-full absolute z-10 bg-black/[0.6] flex justify-center items-center'>
              <div className='w-3/5 bg-white rounded-lg drop-shadow-2xl relative flex p-4 gap-4 items-center'>
                  {productImg === null || productImg==='' ? <div className='w-36 h-36 text-gray-400 border border-4 border-gray-300 rounded-lg flex justify-center items-center hover:drop-shadow-xl'>
                                <FiPackage className='w-full h-full' />
                            </div>:
                            <img src={productImg} alt=""  className='w-36 h-36 object-cover border border-4 border-gray-300 rounded-lg hover:shadow-xl hover:shadow-gray-200' />}

                <div className='p-2'>
                <div>
                    <span className='font-semibold mr-1'>Product Name :</span>
                    <span className='capitalize'>{product}</span>
                </div>

                <div className='my-2'>
                    <span className='font-semibold mr-1'>Purchase Price:</span>
                    <span className='capitalize'>{purchase} <small className='font-semibold italic'>MMK</small></span>
                </div>

                <div className='my-2'>
                    <span className='font-semibold mr-1'>Selling Price
                    <strong>(WholeSale)</strong>
                    :</span>
                    <span className='capitalize'>{selling1}
                    <small className='font-semibold italic'>MMK</small></span>
                </div>

                <div className='my-2'>
                    <span className='font-semibold mr-1'>Selling Price
                    <strong>(Retail)</strong>
                    :</span>
                    <span className='capitalize'>{selling2}  <small className='font-semibold italic'>MMK</small></span>
                </div>

                <div className='my-2'>
                    <span className='font-semibold mr-1'>Stock :</span>
                    <span style={{color:stock > 0 ? 'green':"red"}} className='font-bold capitalize'>{stock} packages</span>
                </div>

                    {/* if  the user role is admin, the user can use the following func,otherwise the user can't */}
                    {user[0].role === 'admin' && <div className='flex gap-4'>
                <Button text={loading?'Deleting':'Delete Product'} color='#c22710' />
                <Button text={'Update'} color='#05b31a' func={{}}/>
                </div>
                }
                
            </div>

            <button onClick={()=>setProductModel(false)} className='fixed top-5 right-5 text-lg bg-gray-500 drop-shadow-2xl rounded-full p-1 hover:drop-shadow-3xl text-white hover:bg-red-600'>
                <AiOutlineClose />
                </button>
              </div>
    </div>
  )
}

export default ProductModel;