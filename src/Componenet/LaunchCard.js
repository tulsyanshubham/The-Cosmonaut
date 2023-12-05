import React from 'react'

export default function launchcards(props) {
  return (
      <div className='d-flex flex-column'style={{gap:"4px",fontSize:"1.1vw"}}>
        <div><strong>ID: </strong>{props.data.id}</div>
        <div><strong>NAME: </strong>{props.data.name}</div>
        <div><strong>PROVIDER NAME: </strong>{props.data.provider.name}</div>
        <div><strong>VEHICLE NAME: </strong>{props.data.vehicle.name}</div>
        <div><strong>PAD NAME: </strong>{props.data.pad.name}</div>
        <div><strong>PAD LOCATION NAME: </strong>{props.data.pad.location.name}</div>
        <div><strong>PAD LOCATION COUNTRY: </strong>{props.data.pad.location.country}</div>
        <div><strong>PAD LOCATION SLUG: </strong>{props.data.pad.location.slug}</div>
        <div><strong>DESCRIPTION: </strong>{props.data.launch_description}</div>
        <div><strong>ESTIMATED DATE: </strong>{props.data.est_date.day}/{props.data.est_date.month}/{props.data.est_date.year}</div>
      </div>
  )
}
