import React, { useState, useEffect } from 'react';
import LaunchCard from './LaunchCard';
import Loader from './Loader';

export default function Launches() {
  const [launches, setLaunches] = useState([]);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    const fetchLaunches = async () => {
      try {
        const url = 'https://fdo.rocketlaunch.live/json/launches/next/3';
        const response = await fetch(url);
        const data = await response.json();
        setLaunches(data.result);
        setLoad(true);
      } catch (error) {
        console.error('Error fetching launches:', error);
      }
    };

    fetchLaunches();
  }, []);

  return load ? (
    <div className='satellitemain  justify-content-center flex-column'>
      <div className='heading mt-5' style={{width:"100%", padding:"0 7vw"}}>
        <span>UPCOMING SPACE MISSIONS</span>
      </div>
        <div className='launchcardbox d-flex flex-row mt-3'>
        {launches.map((launch, index) => (
          <div key={index} className='launchcard d-flex justify-content-center'>
            <LaunchCard data={launch}/>
          </div>
        ))}
      </div>
    </div>
  ):(
    <div className='contactus'>
      <div><Loader /> </div>
    </div>
  )
}
