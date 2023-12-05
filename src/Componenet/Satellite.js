import axios from 'axios';
import React, { useEffect, useState } from 'react';
import download from '../space_cmd_id.pdf'
import Spinner from './Spinner';

export default function Test() {
  const [position, setPosition] = useState([]);
  const [load, setLoad] = useState(false);
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [satelliteId, setSatelliteId] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setSatelliteId(e.target.value);
    setError('');
  }

  useEffect(() => {
    const fetchGeolocation = () => {
      navigator.geolocation.getCurrentPosition(
        function (pos) {
          setLatitude(pos.coords.latitude);
          setLongitude(pos.coords.longitude);
        },
        function (error) {
          console.error('Error getting geolocation:', error);
        }
      );
    };

    fetchGeolocation();
  }, []);

  const fetchMoreData = async () => {
    if (!/^\d+$/.test(satelliteId)) {
      setError('Invalid satellite ID. Please enter a valid numeric ID.');
      return;
    }

    if (latitude !== null && longitude !== null && satelliteId !== '') {
      setLoad(false)
      setLoading(true);
      const url = `/rest/v1/satellite/positions/${satelliteId}/${latitude}/${longitude}/0/1/&apiKey=HYUPPZ-VLKCBU-6B9DKP-5603`;
      try {
        const res = await axios.get(url);
        setPosition(res.data.positions);
        setLoad(true);
        console.log(position);
      } catch (error) {
        console.error('Error fetching satellite positions:', error);
      }
      finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className='satellitemain'>
      <div style={{width: '45vw', margin: '0 0 5vw 4vw'}}>
        <div className='heading' >GET REAL TIME SATELLITE POSITIONS</div>
        <div className='my-2 h4'><label htmlFor="stdid">SPACE COMMAND ID</label></div>
        <div><input type="text" className='my-2' name="stdid" id="stdid" value={satelliteId} onChange={handleChange} /></div>
        <div><button className='my-2' onClick={fetchMoreData}>FETCH POSITION</button></div>
      </div>
      <div style={{height:"28vw",width:"1px", backgroundColor:"white"}}></div>
      {loading && (
        <div className="loader">
          <p><Spinner/></p>
        </div>
      )}
      {error && <p className="h3 mx-5"style={{ color: 'red',}}>{error}</p>}
      {load &&
        position.map((satellite, index) => (
      <div style={{border:"2px solod red"}}>
          <div className='satdata' key={index}>
                <div>Latitude: {satellite.satlatitude}</div>
                <div>Longitude: {satellite.satlongitude}</div>
                <div>Altitude: {satellite.sataltitude}</div>
                <div>Azimuth: {satellite.azimuth}</div>
                <div>Elevation: {satellite.elevation}</div>
                <div>Right Ascension: {satellite.ra}</div>
                <div>Declination: {satellite.dec}</div>
                <div>Timestamp: {satellite.timestamp}</div>
          </div>
      </div>
          ))}
          <a href={download} download={download}>
      <button type="button" className="btn btn-dark" style={{position:"fixed",bottom:"1vw",right:"1vw"}}><i className="fa-solid fa-download" />&#160; SPACE COMMAND ID LIST</button></a>
    </div>
  );
}
