import React from 'react'
import { Doughnut } from 'react-chartjs-2'
import {Chart} from 'chart.js/auto'

export default function Regional(ReqData) {
    const data = ReqData.data
    let key=[]
    let value=[]
    for(const prop in data){
        key.push(prop)
        value.push(data[prop])
    }
  return (
    <div className="region">
    <div className="heading">Region</div>
    
    <Doughnut
        data={{
            labels:key,
            datasets:[{
                data:value,
            }]
        }}
        />
    </div>
  )
}
