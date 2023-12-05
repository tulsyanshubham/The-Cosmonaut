import React from 'react'
import spinner from '../Image/Spinner-0.7s-200px.gif'

export default function Spinner() {
  return (
    <div>
      <img src={spinner} alt="LOADING" style={{width:"10vw", marginLeft:"18vw"}}/>
    </div>
  )
}
