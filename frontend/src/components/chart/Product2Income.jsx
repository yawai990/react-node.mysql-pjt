import React from 'react';
import { SparklineComponent,Inject, SparklineTooltip } from '@syncfusion/ej2-react-charts';
import Button from '../Button';
import { NincheLineAreaData } from '../../data';

const Product2Income = () => {
  return (
    <>
    <div className='flex'>
      <div>
      <p className='font-semibold tracking-wider text-2xl text-gray-700'>   
        {/* {totalIncome.toLocaleString()} */}
        123,123,123
        <span className="text-sm">MMK</span>
      </p>
      <p className='text-sm text-gray-400'>Total product-2 Revenue</p>
      </div>

    <div className='ml-2 self-center'>
      <p className='bg-green-600 rounded-full p-1 text-sm text-slate-100'>
        32%
      </p>
      </div>
    </div>
          <SparklineComponent id=''
          width='60%' height='50%'
          lineWidth={1} 
           type='Line' fill='steelblue'
          dataSource={NincheLineAreaData} xName='xval' 
          yName='yval' valueType='Category'    
          tooltipSettings={{
            visible:true,
            format:'${xval}: ${yval}kyats',
            trackLineSettings:{
              visible:true
            }
          }}>
            <Inject services={[SparklineTooltip]} />
          </SparklineComponent>

          <a href="#product2-details"    
           style={{backgroundColor:'#406df1'}}
           className='mt-3 p-2 rounded-lg hover:drop-shadow-xl text-white'
              >Daily Report</a>
          </>
  )
}

export default Product2Income