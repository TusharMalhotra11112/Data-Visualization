import React from 'react'
import {Bar} from 'react-chartjs-2'
import { Chart as ChartJS } from 'chart.js/auto'


export default function Intensity(ReqData) {
  const data = ReqData.data.data
  return (
  <div className='intensity'>
    <div className="heading">Intensity</div>
    <Bar
      data={{
        labels:data.map((dt)=>dt.intensity),
        datasets:[{
          label:"Intensity",
          data:data.map((dt)=>[dt.start_year,dt.end_year])
        }]
      }}
      options={{
        indexAxis:'y',
        scales:{
          xAxis:{
            min:2015
          },
        },
      }}
    />
  </div>
)}
