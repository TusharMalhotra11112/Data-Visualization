import React from 'react'
import Header from './Header'
import Component from './Component'

export default function Container({ appliedFilter, setAppliedFilter}) {
  return (
    <div className='container'>
        <Header/>
        <Component  appliedFilter={appliedFilter} setAppliedFilter={setAppliedFilter}/>
    </div>
  )
}
