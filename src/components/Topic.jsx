import React from 'react'
import { PolarArea } from 'react-chartjs-2'
import {Chart, Ticks, scales} from 'chart.js/auto'
export default function Topic(ReqData) {
    const data = ReqData.data
    let key=[]
    let value=[]
    for(const prop in data){
        key.push(prop)
        value.push(data[prop])
    }
  return (
    <div className="topic">
    <div className="heading">Topic</div>

    <PolarArea
        data={{
            labels:key,
            datasets:[{
                data:value,
            }]
        }}
        options={{
            scales:{
                yAxis:{
                    min:10,
                    max:100
                }
            }
        }}
        />
    </div>
  )
}
