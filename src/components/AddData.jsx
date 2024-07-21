import React, { useEffect, useState } from 'react'
import TextField from '@mui/material/TextField';
import { Button, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import axios from 'axios'

export default function AddData({showAddData,setShowAddData}) {
    const [formData,setFormData] = useState(null)
    const [fire,setFire] = useState(true)
    useEffect(()=>{
        setFormData({
            "end_year":document.getElementById("endyear").value,
            "intensity":document.getElementById("intensity").value,
            "sector":document.getElementById("sector").value,
            "topic":document.getElementById("topic").value,
            "insight":document.getElementById("insight").value,
            "url":document.getElementById("url").value,
            "region": document.getElementById("region").value,
            "start_year": document.getElementById("startyear").value,
            "impact": document.getElementById("impact").value,
            "added": document.getElementById("added").value,
            "published": document.getElementById("published").value,
            "country": document.getElementById("country").value,
            "relevance": document.getElementById("relevance").value,
            "pestle": document.getElementById("pestle").value,
            "source": document.getElementById("source").value,
            "title": document.getElementById("title").value,
            "likelihood": document.getElementById("likelyhood").value
        })
    },[fire])


    const test=()=>{
        setFire((fire)=>!fire)
        setShowAddData(false)
        console.log(formData)
        axios.post("http://localhost:5000/Upload",formData)
        .then(()=>{
            console.log("Upload done")
        })
        .catch(()=>{
            console.log("Error in Uploading")
        })

    }

  return (
    <div className='adddata'>
        <div className="adddataheader">
            <p className="adddatahead">Upload</p>
            <IconButton className='adddataclose' onClick={()=>{setShowAddData(false)}}>
                <CloseIcon />
            </IconButton>
        </div>
        <form className='adddataform'>
            <label>End Year:</label>
            <input type="number" min="1900" max="2099" id='endyear' onChange={(e)=>{setFire((fire)=>!fire)}}/>
            <label>Intensity:</label>
            <input type="number" id='intensity'  onChange={(e)=>{setFire((fire)=>!fire)}}/>
            <label>Sector:</label>
            <input type="text" id='sector' onChange={(e)=>{setFire((fire)=>!fire)}} />
            <label>Topic:</label>
            <input type="text" id='topic' onChange={(e)=>{setFire((fire)=>!fire)}} />
            <label>Insight:</label>
            <input type="text" id='insight' onChange={(e)=>{setFire((fire)=>!fire)}} />
            <label>URL:</label>
            <input type="url" id='url' onChange={(e)=>{setFire((fire)=>!fire)}} />
            <label>Region:</label>
            <input type="text" id='region' onChange={(e)=>{setFire((fire)=>!fire)}}/>
            <label>Start Year:</label>
            <input type="number" min="1900" max="2099" id='startyear' onChange={(e)=>{setFire((fire)=>!fire)}}/>
            <label>Impact:</label>
            <input type="number" id='impact' onChange={(e)=>{setFire((fire)=>!fire)}}/>
            <label>Added:</label>
            <input type="datetime-local" id='added' onChange={(e)=>{setFire((fire)=>!fire)}}/>
            <label>Published:</label>
            <input type="datetime-local" id='published' onChange={(e)=>{setFire((fire)=>!fire)}}/>
            <label>Country:</label>
            <input type="text" id='country' onChange={(e)=>{setFire((fire)=>!fire)}}/>
            <label>Relevance:</label>
            <input type="number" id='relevance' onChange={(e)=>{setFire((fire)=>!fire)}}/>
            <label>Pestle:</label>
            <input type="text" id='pestle' onChange={(e)=>{setFire((fire)=>!fire)}}/>
            <label>Source:</label>
            <input type="text" id='source' onChange={(e)=>{setFire((fire)=>!fire)}}/>
            <label>Title:</label>
            <input type="text" id='title' onChange={(e)=>{setFire((fire)=>!fire)}}/>
            <label>Likelyhood:</label>
            <input type="number" id='likelyhood' onChange={(e)=>{setFire((fire)=>!fire)}}/>
        </form>
        <Button variant="contained" className='uploadbutton' onClick={test}>Upload</Button>
    </div>
  )
}
