import React from 'react';
import { SparklineComponent, SparklineTheme, ISparklineLoadedEventArgs, Inject, SparklineTooltip } from '@syncfusion/ej2-react-charts';
import { SparklineAreaData } from '../../data';
import Button from '../Button';

const Expence = ({width,height}) => {
  const totalIncome =  SparklineAreaData[0].yval + SparklineAreaData[1].yval + SparklineAreaData[2].yval + SparklineAreaData[3].yval;
  
  return (
    <>
    <div className='flex dark:bg-[#1c1616]'>
      <div className='dark:bg-[#1c1616]'>
      <p className='font-semibold tracking-wider text-2xl text-gray-700'>   
        5,945,623
        <span className="text-sm">MMK</span>
      </p>
      <p className='text-sm text-gray-400'>Total product-1 Expences</p>
      </div>

    <div className='ml-2 self-center'>
      <p className='bg-red-600 rounded-full p-1 text-sm text-slate-100'>
        45%
      </p>
      </div>
    </div>
          <SparklineComponent id='sparkline'
          width={width} height={height}
          lineWidth={1} 
           type='Line' fill='red'
          
          dataSource={SparklineAreaData} xName='xval' 
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

          <Button text={'Daily Expences Report'} color={'#ea3b2f'} />
          </>
  )
}

export default Expence