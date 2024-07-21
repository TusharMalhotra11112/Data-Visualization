import React from 'react'
import { Radar } from 'react-chartjs-2'
import {Chart} from 'chart.js/auto'

export default function Relevance(ReqData) {
    const data = ReqData.data
    let key=[]
    let value=[]
    for(const prop in data){
        key.push(prop)
        value.push(data[prop])
    }
  return (
    <div className='relevance'>
    <div className="heading">Relevance</div>

    <Radar
        data={{
            labels:key,
            datasets:[{
                label:"Relevance",
                data:value
            }]
        }}
        />
    </div>
  )
}
