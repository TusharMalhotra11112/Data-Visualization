import { Button, IconButton } from '@mui/material'
import React, { useEffect, useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import axios from 'axios'


export default function AddFilter({filter,setFilter, appliedFilter, setAppliedFilter}) {
    const [fire,setFire] = useState(true)

    const [topics,setTopics] = useState([])
    const [sectors,setSectors] = useState([])
    const [regions,setRegions] = useState([])
    const [source,setSource] = useState([])

    const [endYear,setEndYear] = useState(2099)
    const [filterTopic,setFilterTopic] = useState(null)
    const [filterSector,setFilterSector] = useState(null)
    const [filterRegion,setFilterRegion] = useState(null)
    const [filterSource,setFilterSource] = useState(null)

    const apply=()=>{
        setFire(!fire)
    }

    useEffect(()=>{
        setAppliedFilter({
            "end_year":endYear>2099?2099:endYear,
            "topic":filterTopic==="none"?null:filterTopic,
            "sector":filterSector==="none"?null:filterSector,
            "region":filterRegion==="none"?null:filterRegion,
            "source":filterSource==="none"?null:filterSource,
        })
        console.log("fired")
        setEndYear(2099)
        setFilterTopic(null)
        setFilterSector(null)
        setFilterRegion(null)
        setFilterSource(null)
    },[fire])

    const getlist = async()=>{
        await axios.post("https://data-visualization-backend-zco6.onrender.com/getTopicList")
        .then((dt)=>{
            let temp={}
            const data = dt.data
            for(let i=0;i<data.length;i++){
                temp[data[i].topic] =1;
            }
            let dx = []
            for(const x in temp){
                dx.push(x)
            }
            setTopics(dx)

        })
        .catch(()=>{
            console.log("topics error")
        })
        await axios.post("https://data-visualization-backend-zco6.onrender.com/getSectorList")
        .then((dt)=>{
            let temp={}
            const data = dt.data
            for(let i=0;i<data.length;i++){
                temp[data[i].sector] =1;
            }
            let dx = []
            for(const x in temp){
                dx.push(x)
            }
            setSectors(dx)

        })
        .catch(()=>{
            console.log("sector error")
        })
        await axios.post("https://data-visualization-backend-zco6.onrender.com/getRegionList")
        .then((dt)=>{
            let temp={}
            const data = dt.data
            for(let i=0;i<data.length;i++){
                temp[data[i].region] =1;
            }
            let dx = []
            for(const x in temp){
                dx.push(x)
            }
            setRegions(dx)

        })
        .catch(()=>{
            console.log("Region error")
        })
        await axios.post("https://data-visualization-backend-zco6.onrender.com/getSourceList")
        .then((dt)=>{
            let temp={}
            const data = dt.data
            for(let i=0;i<data.length;i++){
                temp[data[i].source] =1;
            }
            let dx = []
            for(const x in temp){
                dx.push(x)
            }
            setSource(dx)

        })
        .catch(()=>{
            console.log("Source error")
        })
    }

    useEffect(()=>{
        getlist()
    },[])

  return (
    <div className='addfilter'>
        <div className="addfilterheader">
            <p className="addfilterhead">Filter</p>
            <IconButton className='addfilterclose' onClick={()=>{setFilter(false)}}>
                <CloseIcon />
            </IconButton>
        </div>
        <form className='addfilterform'>
            <label>End Year:</label>
            <input type="number" min="1900" max="2099" id='endyear' placeholder='2099' onChange={(e)=>{setEndYear(e.target.value)}}/>
            <label>Topic:</label>
            {topics!=null?
            <select name="topic" id="topic" onChange={(e)=>setFilterTopic(e.target.value)}>
                <option value="none">--none--</option>
                {topics.map((dt)=>{
                    return(
                        <option value={dt}>{dt}</option>
                        )
                })}
            </select>:<></>}
            <label>Sector:</label>
            {sectors!=null?
            <select name="sector" id="sector" onChange={(e)=>setFilterSector(e.target.value)} >
                <option value="none">--none--</option>
                {sectors.map((dt)=>{
                    
                    return(
                        <option value={dt}>{dt}</option>
                        )
                })}
            </select>:<></>}
            <label>Region:</label>
            {regions!=null?
            <select name="region" id="region" onChange={(e)=>setFilterRegion(e.target.value)} >
                <option value="none">--none--</option>
                {regions.map((dt)=>{
                    return(
                        <option value={dt}>{dt}</option>
                        )
                })}
            </select>:<></>}
            <label>Source:</label>
            {source!=null?
            <select name="source" id="source"  onChange={(e)=>setFilterSource(e.target.value)}>
                <option value="none">--none--</option>
                {source.map((dt)=>{
                    return(
                        <option value={dt}>{dt}</option>
                        )
                })}
            </select>:<></>}
        </form>
        <Button variant="contained" className='filterbutton' onClick={apply}>Filter</Button>

    </div>
  )
}
