import React,{useState,useEffect} from 'react';
import {FiPackage} from 'react-icons/fi';
import {AiOutlineSearch,AiOutlineClose} from 'react-icons/ai';
import { Button,ProductModel,Loading,AddProduct } from '../components';
import { useGlobalContext } from '../Context/myContext';

const Contact = () => {
  const {user,addProductForm,setAddProductForm,productModel,productData,OneProduct,setProductData,getAllProducts} = useGlobalContext();
  const [searchTerm,setSearchTerm] = useState('');

  const onHandleSubmit=async(e)=>{
    e.preventDefault();

    const filter = productData.filter(item=>item.productName.includes(searchTerm) && item);

    setProductData(filter)
    if(searchTerm === ''){
      getAllProducts()
    }
    setSearchTerm('')
  };

  return (
    <div className='w-full h-auto min-h-[80vh] relative'>
        
     {productModel && <ProductModel />}
     {addProductForm && <AddProduct />}

    <div className='my-3 p-4 flex items-center justify-between'>
    <h1 className='text-2xl text-gray-600 tracking-wider font-extrabold font-serif'>Our Products</h1>
    {user[0].role === 'admin' && <div>
        <Button text='Add New Product' color='green' func={()=>setAddProductForm(!addProductForm)} />
        </div>}
    </div>

    <div className='w-4/5 m-auto rounded-lg drop-shadow-xl overflow-hidden'>

    <section className='w-full bg-slate-100 py-2 flex justify-end'>

      {/* searching a single product */}
    <form className='flex mr-2 focus:border-red-400 duration-400' onSubmit={onHandleSubmit}>
    <input productType="text" className='px-2 outline-none bg-transparent border-b border-gray-400 focus:border-red-500 duration-100' value={searchTerm} onChange={e=>setSearchTerm(e.target.value)} />
    <button className='flex justify-center items-center text-slate-800 text-lg'>
        <AiOutlineSearch />
    </button>
    <button className='flex justify-center items-center text-red-700 ' onClick={()=>setSearchTerm('')}>
        <AiOutlineClose />
    </button>
    </form>
    </section>
    <table className='h-auto border bg-white drop-shadow-2xl overflow-x-scroll block whitespace-nowrap'>
        <thead className='bg-gray-600 text-white'>
            <tr>
            <th className='py-2 w-52 inline-block'>Product</th>
            <th className='w-52 inline-block'>Purchase Price</th>
            <th className='w-40 inline-block'>Selling Price(WholeSale)</th>
            <th className='w-40 inline-block'>Selling Price(Retial)</th>
            <th className='w-40 inline-block'>Stock(pk)</th>
            <th className='w-52 inline-block'>Type</th>
                 </tr>
        </thead>
        {productData === undefined || productData.length <= 0 ? <tbody>
            <tr className='my-2'>
                {/* <td className='text-lg font-semibold tracking-wider py-2'>No record to display</td> */}
                <Loading />
                </tr>
            </tbody>:
        <tbody className='text-center capitalize'>

           {productData.map((item,ind)=>{
            const {id,image,productName,selling1,selling2,purchase,productType,stock} = item;
                           return <tr key={ind} className='bg-white py-2 my-2 hover:bg-gray-200 border-b cursor-pointer flex items-center' onClick={()=>OneProduct(id)}>
                    <td className='w-52 flex justify-center items-center'>
                        {image === null || image === '' ? <div className='w-10 h-10 text-gray-400 rounded-full flex justify-center items-center bg-white drop-shadow-xl'>
                            <FiPackage className='w-4/5 h-4/5' />
                        </div>:<img src={image} alt="" className='w-10 h-10 block rounded-full object-cover drop-shadow-xl bg-white' />}
                        
                        <span className='ml-2 capitalize'>
                        {productName}
                        </span>
                        </td>
                    <td className='w-52 uppercase'>{purchase}</td>
                    <td className='w-40'>{selling1}</td>
                    <td className='w-40'>{selling2}</td>
                    <td className='w-40'>{stock}</td>
                    <td className='w-52'>
                      {productType === '0' && 'Food'}
                      {productType === '1' && 'Watches'}
                      {productType === '2' && 'Liquor & Drink'}
                      {productType === '3' && 'medicine'}
                      {productType === '4' && 'Furniture'}
                      {productType === '5' && 'Clothes'}
                      {productType === '6' && 'Boot'}
                      {productType === '7' && 'other_supply'}
                    </td>
                    
                </tr>
            })}
        </tbody>
}
    </table>
    </div>

</div>
  )
}

export default Contact