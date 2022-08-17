import React from 'react';
import { SparklineComponent,Inject, SparklineTooltip } from '@syncfusion/ej2-react-charts';
import Button from '../Button';
import { NincheLineAreaData } from '../../data';

const Product3Income = () => {
  return (
    <>
    <div className='flex'>
      <div>
      <p className='font-semibold tracking-wider text-2xl text-gray-700'>   
        {/* {totalIncome.toLocaleString()} */}
        123,123,123
        <span className="text-sm">MMK</span>
      </p>
      <p className='text-sm text-gray-400'>Total product-3 Revenue</p>
      </div>

    <div className='ml-2 self-center'>
      <p className='bg-green-600 rounded-full p-1 text-sm text-slate-100'>
        32%
      </p>
      </div>
    </div>
          <SparklineComponent id='product3'
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

          <Button text={'Daily Report'} color={'#406df1'}/>
          </>
  )
}

export default Product3Income