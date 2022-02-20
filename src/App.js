import React,{useState} from 'react';
import axios from 'axios';
import './App.css';

const App = () => {
  const [strtloc,setstrtLoc] = useState('');
  const [destLoc,setDestLoc] = useState(''); 
  const key = 'AIzaSyBk9Lm_M2FdJTHXZihGYmy9Fel32n_Ab9E';
  let config = {
    method: 'get',
    url: `https://maps.googleapis.com/maps/api/directions/json?origin=${strtloc}&destination=${destLoc}&key=${key}`,
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    getDirection();
  }

  const getDirection = () => {
    axios(config)
      .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  return (
    <div className="App">
      <h1>Get Your Direction On Google Map</h1>
      <p>Get your direction by intering your starting and destination location</p>
      <div className='form'>
        <div className='form-group'>
          <div className='input-field'>
            <label htmlFor='strtloc'>
                Starting Location
            </label>
            <input 
                type='text' 
                name='strtloc' 
                value={strtloc}
                onChange={e => setstrtLoc(e.target.value)}
            />
          </div>
        </div>
        <div className='form-group'>
          <div className='input-field'>
            <label htmlFor='destLoc'>
                Destination Location
            </label>
            <input 
                type='text' 
                name='setDestLoc' 
                value={destLoc}
                onChange={e => setDestLoc(e.target.value)}
            />
          </div>
        </div>
        <input type='submit' className='form-submit' name='submit' onClick={onSubmit}/>
      </div>
    </div>
  );
}

export default App;
