import React from 'react'
import { Chart as ChartJS} from 'chart.js/auto'
import { Bar } from 'react-chartjs-2'

export default function Likelyhood(ReqData) {
  const data = ReqData.data.data;
  return (
    <div className='likelyhood'>
    <div className="heading">Likelyhood</div>
      {data!=null?
        <Bar
            data={{
              labels:data.map((dt)=>dt.title),
              datasets:[{
                  label:"Likelyhood",
                  data:data.map((dt)=>dt.likelihood),
              }],
            }}
            options={{
              scales:{
                x:{
                  display:false
                }
              },
            }}
        />:
        <></>
          }
    </div>
  )
}
