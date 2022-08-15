import React,{useState} from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import {FiPackage} from 'react-icons/fi';
import Button from './Button';
import { useGlobalContext } from '../Context/myContext';
import { deleteProduct } from '../api';

const ProductModel = () => {
    const {user,setProductModel,setUpdateProductForm,setRespText,getOneProduct,getAllProducts} = useGlobalContext();
    const [loading,setLoading] = useState(false);

    const {id,image,productName,purchase,selling1,selling2,product_type,stock} = getOneProduct[0];
  return (
    <div className='w-full h-full absolute z-10 bg-black/[0.6] flex justify-center items-center'>
              <div className='w-3/5 bg-white rounded-lg drop-shadow-2xl relative flex p-4 gap-4 items-center'>
                  {image === null || image==='' ? <div className='w-36 h-36 text-gray-400 border border-4 border-gray-300 rounded-lg flex justify-center items-center hover:drop-shadow-xl'>
                                <FiPackage className='w-full h-full' />
                            </div>:
                            <img src={image} alt=""  className='w-36 h-36 object-cover border border-4 border-gray-300 rounded-lg hover:shadow-xl hover:shadow-gray-200' />}

                <div className='p-2'>
                <div>
                    <span className='font-semibold mr-1 font-sans'>Product Name :</span>
                    <span className='capitalize'>{productName}</span>
                </div>

                <div className='my-2'>
                    <span className='font-semibold mr-1 font-sans'>Purchase Price:</span>
                    <span className='capitalize'>{purchase} <small className='font-semibold italic'>MMK</small></span>
                </div>

                <div className='my-2'>
                    <span className='font-semibold mr-1 font-sans'>Selling Price
                    <strong>(WholeSale)</strong>
                    :</span>
                    <span className='capitalize'>{selling1}
                    <small className='font-semibold italic'> MMK</small></span>
                </div>

                <div className='my-2'>
                    <span className='font-semibold mr-1 font-sans'>Selling Price
                    <strong>(Retail)</strong>
                    :</span>
                    <span className='capitalize'>{selling2}  <small className='font-semibold italic'>MMK</small></span>
                </div>

                <div className='my-2'>
                    <span className='font-semibold mr-1 font-sans'>Stock :</span>
                    <span style={{color:stock > 0 ? 'green':"red"}} className='font-bold capitalize'>{stock} packages</span>
                </div>

                <div className='my-2'>
                    <span className='font-semibold mr-1 font-sans'>Type of Product :</span>
                    <span className='font-bold capitalize'>
                      {product_type === '0' && 'Food'} 
                      {product_type === '1' && 'Liquor & Drink'} 
                      {product_type === '2' && 'medicine'}
                      {product_type === '3' && 'Furniture'}
                      {product_type === '4' && 'Clothes'}
                      {product_type === '5' && 'Boot'}
                      {product_type === '6' && 'Watches'}
                      {product_type === '7' && 'Other_supply'}
                    </span>
                </div>

                    {/* if  the user role is admin, the user can use the following func,otherwise the user can't */}
                    {user[0].role === 'admin' && <div className='flex gap-4'>
                <Button text={loading?'Deleting':'Delete Product'} color='#c22710'  func={()=>deleteProduct(id).then(resp=>{
                    getAllProducts()
                    setRespText(resp.data.message)
                    setProductModel(false)
                })} />
                <Button text={'Update'} color='#05b31a' func={()=>setUpdateProductForm(true)}/>
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