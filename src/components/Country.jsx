import React from 'react'
import { Chart as ChartJS} from 'chart.js/auto'
import { Pie } from 'react-chartjs-2'

export default function Country(ReqData) {
    const data = ReqData.data
    
    let key=[]
    let value=[]
    for(const prop in data){
        key.push(prop)
        value.push(data[prop])
    }
  return (
    <div className='country'>
    <div className="heading">Country</div>

        <Pie
            data={{
                labels:key,
                datasets:[{
                    data:value
                }]
            }}
        />
    </div>
  )
}
