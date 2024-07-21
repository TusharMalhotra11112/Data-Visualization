import React, { useEffect, useState } from 'react'
import Likelyhood from './Likelyhood'
import axios from 'axios'
import Country from './Country'
import Intensity from './Intensity'
import Regional from './Regional'
import Topic from './Topic'
import Relevance from './Relevance'

export default function Component( appliedFilter,setAppliedFilter) {
  const [likelyhoodData,setLikelyhoodData] = useState(null)
  const [countryData,setCountryData] = useState(null)
  const [intensityData,setIntensityData] = useState(null)
  const [regionalData,setRegionalData] = useState(null)
  const [topicData,setTopicData] = useState(null)
  const [relevenceData,setRelevancedData] = useState(null)

  const reqLikelyhood = ()=>{
    axios.post('http://localhost:5000/getLikelyhood',appliedFilter)
    .then((dt)=>{
      setLikelyhoodData(dt);
    })
    .catch((err)=>{
      console.log(err)
    })
  }
  
  const reqCountry = ()=>{
    axios.post('http://localhost:5000/getCountry',appliedFilter)
    .then((dt)=>{
      const data = dt.data
      let req = {}
      data.map((e)=>{
        if(req[e.country]){
          req[e.country]+=1
        }
        else{
          req[e.country]=1
        }
      })
      setCountryData(req)
    })
    .catch((err)=>{
      console.log(err)
    })
  }
  
  const reqIntensity = ()=>{
    axios.post('http://localhost:5000/getIntensity',appliedFilter)
    .then((dt)=>{
      setIntensityData(dt);
    })
    .catch((err)=>{
      console.log(err)
    })
  }

  const reqRegion =()=>{
    axios.post('http://localhost:5000/getRegional',appliedFilter)
    .then((dt)=>{
      const data = dt.data
      let req = {}
      data.map((e)=>{
        if(req[e.region]){
          req[e.region]+=1
        }
        else{
          req[e.region]=1
        }
      })
      setRegionalData(req)
    })
    .catch((err)=>{
      console.log(err)
    })
  }

  const reqTopic =()=>{
    axios.post('http://localhost:5000/getTopic',appliedFilter)
    .then((dt)=>{
      const data = dt.data
      let req = {}
      data.map((e)=>{
        if(req[e.topic]){
          req[e.topic]+=1
          req[e.topic] %= 10 
        }
        else{
          req[e.topic]=1
        }
      })
      setTopicData(req)
    })
    .catch((err)=>{
      console.log(err)
    })
  }

  const reqRelevence=()=>{
      axios.post('http://localhost:5000/getRelevance',appliedFilter)
      .then((dt)=>{
        const data = dt.data
        let req = {}
        data.map((e)=>{
          if(req[e.region]){
            req[e.region]=Math.max(req[e.region],e.relevance)
          }
          else{
            req[e.region]=e.relevance
          }
          setRelevancedData(req)
        })
      })
      .catch((err)=>{
        console.log(err)
      })
    }

  useEffect(()=>{
    reqIntensity()
    reqLikelyhood()
    reqRelevence()
    reqCountry()
    reqRegion()
    reqTopic()
  },[])

  useEffect(()=>{
    reqIntensity()
    reqLikelyhood()
    reqRelevence()
    reqCountry()
    reqRegion()
    reqTopic()
  },[appliedFilter])

  return (
    <div className="component">
      {intensityData!=null?
      <Intensity data={intensityData}/>:
      <></>  
      }
      {likelyhoodData!=null?
      <Likelyhood data={likelyhoodData}/>:
      <></>  
      }
      {countryData!=null?
      <Country data={countryData}/>:
      <></>
    }
      {regionalData!=null?
      <Regional data ={regionalData}/>:
      <></>
    }
    {relevenceData!=null?
    <Relevance data ={relevenceData}/>:
    <></>
    }
    {topicData!=null?
    <Topic data ={topicData}/>:
    <></>
    }
    </div>
  )
}
