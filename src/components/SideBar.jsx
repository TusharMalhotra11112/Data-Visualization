import React, { useState } from 'react'
import AddData from './AddData'
import AddFilter from './Addfilter'

export default function SideBar({ appliedFilter,setAppliedFilter}) {
  const [showAddData,setShowAddData]= useState(false);
  const [filter,setFilter]= useState(false);
  return (
    <div className='sidebar'>
        <p className='sidebarHead'>Dashboard</p>
        <div className="sidetab" onClick={()=>{setShowAddData(true)}}>Add Data</div>
        <div className="sidetab" onClick={()=>{setFilter(true)}}>Add Filters</div>
        {showAddData?<AddData showAddData={showAddData} setShowAddData={setShowAddData}/>:<></>}
        {filter?<AddFilter filter={filter} setFilter={setFilter} appliedFilter={appliedFilter} setAppliedFilter={setAppliedFilter}/>:<></>}
    </div>
  )
}
