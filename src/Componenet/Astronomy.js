import React, { useState, useEffect } from 'react';
import Loader from './Loader';
import altimage from '../Image/imagenotfound.png'

export default function Astronomy() {
  const [data, setData] = useState({});
  const [load, setLoad] = useState(false);

  useEffect(() => {
    const fetchAPOD = async () => {
      try {
        const url = 'https://api.nasa.gov/planetary/apod?api_key=jy1ZEQXOprcfTIK5a9iZjnMruzBpKzLvVXQsHaNA';
        const response = await fetch(url);
        const responseData = await response.json();
        setData(responseData);
        setLoad(true);
      } catch (error) {
        console.error('Error fetching APOD:', error);
      }
    };
    fetchAPOD();
  }, []);

  return load ? (
    <div className='astronomy'>
        <div className="heading" style={{margin:"6vw 0vw 0vw 5vw"}}>ASTRONOMY PICTURE OF THE DAY</div>
        <div className='astronomybox'>
            <div >
            <img src={`${data.hdurl}`} alt="API Error" className='h1' style={{width:"38vw",height:"25vw",borderRadius:"10px",backgroundImage: `url(${altimage})`}}/>
            </div>
            <div style={{width:"10px",height:"22vw",backgroundColor:"white",borderRadius:"30px"}}></div>
            <div className='astronomydata'>
                <div className='h2'>{data.title}</div>
                <div className='h5'>{data.explanation}</div>
                <div>
                <span className="badge rounded-pill bg-light" style={{color:"black",fontSize:"1vw"}}>
            {data.date}
            </span>
                </div>
            </div>
        </div>
    </div>
  ) : (
    <div className='contactus'>
      <div><Loader /> </div>
    </div>
  );
}
