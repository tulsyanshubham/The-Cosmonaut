import React from 'react'
import loader from '../Image/Spinner-0.7s-200px.gif'

export default function Loader() {
  return (
    <div>
      <img src={loader} alt="Loading..." style={{width:"10vw"}}/>
    </div>
  )
}
