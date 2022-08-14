import React from 'react';
import Form from './Form';
import { useGlobalContext } from '../../../Context/myContext';

const AddProduct = () => {
    const {setAddProductForm} = useGlobalContext();
  return (
    <div className='w-full h-full absolute z-10 bg-black/[0.6] flex justify-center items-center'>
        <Form headerText="Add New Product" BtnText="Add Product" closeBtn={()=>setAddProductForm(false)} />
        </div>
  )
}

export default AddProduct