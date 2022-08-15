import React,{useState} from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import FileBase64 from 'react-file-base64';
import { useGlobalContext } from '../../../Context/myContext';

const init={
        productName:'',image:'',purchase:'',selling1:'',selling2:'',stock:'',product_type:''
}

const Form = ({headerText,closeBtn,BtnText,apifunc}) => {
    const {setAddProductForm,setRespText,getAllProducts} = useGlobalContext();
    const [productData,setProductData] = useState(init);

    const onHandleSubmit=async(e)=>{
                e.preventDefault();      

                apifunc(productData).then(resp=>{
                  setRespText(resp.data.message)
                });
                setAddProductForm(false)
                getAllProducts()
    }
  return (
          <div className='w-full md:w-3/5 m-auto mt-5 bg-white rounded-lg drop-shadow-2xl p-4 '>

          <div className='pb-5'>
            <h1 className='uppercase text-lg font-semibold text-center font-serif tracking-wide text-gray-700'>{headerText}</h1>

          <button className='fixed top-2 right-2 bg-red-400 text-white hover:bg-red-700 p-1 drop-shadow-2xl text-xl rounded-full' onClick={closeBtn}>
              <AiOutlineClose />
          </button>
          </div>
          <form className='flex flex-col gap-4' onSubmit={onHandleSubmit}>
          <div className='flex flex-col md:flex-row items-center'>
          <label htmlFor="dept" className='w-full md:w-2/4 md:text-center font-semibold text-lg'>Product Name :</label>
            <input type="text" name='name' id='name' 
            value={productData.productName} 
            onChange={(e)=>setProductData({...productData,productName:e.target.value})}
            className='w-full border outline-none p-1 rounded-lg focus:border-blue-400' required />
          </div>

            {/* need to format */}
          <div className='flex flex-col md:flex-row items-center'>
          <label htmlFor="purchase" className='w-full md:w-2/4 md:text-center font-semibold text-lg'>Purchase Price :</label>
          <input type="number" name='purchase' id='purchase' 
          value={productData.purchase}
          onChange={e=>setProductData({...productData,purchase:e.target.value})}
          className='w-full border outline-none p-1 rounded-lg focus:border-blue-400' required
          />
          </div>

          <div className='flex flex-col md:flex-row items-center'>
          <label htmlFor="selling1" className='w-full md:w-2/4 md:text-center font-semibold text-lg'>Selling Price(WholeSale) :</label>
          <input type="number" name='selling1' id='selling1' 
          value={productData.selling1}
          onChange={e=>setProductData({...productData,selling1:e.target.value})}
          className='w-full border outline-none p-1 rounded-lg focus:border-blue-400' required
          />
          </div>

          <div className='flex flex-col md:flex-row items-center'>
          <label htmlFor="selling2" className='w-full md:w-2/4 md:text-center font-semibold text-lg'>Selling Price(Retail) :</label>
          <input type="number" name='selling2' id='selling2' 
          value={productData.selling2}
          onChange={e=>setProductData({...productData,selling2:e.target.value})}
          className='w-full border outline-none p-1 rounded-lg focus:border-blue-400' required
          />
          </div>

          <div className='flex flex-col md:flex-row items-center'>
          <label htmlFor="stock" className='w-full md:w-2/4 md:text-center font-semibold text-lg'>Stock:</label>
          <input type="number" name='stock' id='stock' 
          value={productData.stock}
          onChange={e=>setProductData({...productData,stock:e.target.value})}
          className='w-full border outline-none p-1 rounded-lg focus:border-blue-400' required
          />
          </div>


          <div className='flex flex-col md:flex-row items-center'>
            <label htmlFor="type" className='w-full md:w-2/4 md:text-center font-semibold text-lg'>Product Type  :</label>
            <select name="type" id="type"
                value={productData.product_type} 
                onChange={(e)=>setProductData({...productData,product_type:e.target.value})} 
            className='w-full border outline-none p-1 rounded-lg focus:border-blue-400'>
              <option value="0" defaultValue="0">Food</option>
              <option value="1">Drink</option>
              <option value="2">Medicine</option>
              <option value="3">Furniture</option>
              <option value="4">Clothes</option>
              <option value="5">Boots</option>
              <option value="6">Watches</option>
              <option value="7">Other_supply</option>
            </select>
          </div>

          <div className='flex flex-col md:flex-row items-center'>
          <label htmlFor="img" className='w-full md:w-2/4 md:text-center font-semibold text-lg'>Product Image :</label>
            <div className='w-full border p-1 rounded-lg'>
            <FileBase64 type='file' multiple={false} value={productData.image} onDone={({base64})=>setProductData({...productData,image:base64})} />
            </div>
          </div>

          <button className='w-full bg-blue-500 rounded-lg my-2 text-white py-1 text-lg hover:bg-blue-800 hover:drop-shadow-2xl'>{BtnText}</button>
      </form>
          </div>
  )
}

export default Form