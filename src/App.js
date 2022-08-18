import React, {useState} from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState({})
  const [latitude, setLatitude]= useState('')
  const [longitude, setLongitude] = useState('')

  
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=08ff7fa43e47718a2afcf1eba91a7a4b`

  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data)

      })
    setLatitude('')
    setLongitude('')
    }
  }
  return (
    <div className="app">
      <div className="search">
        <input
        value = {latitude}
        
        onChange= {event => setLatitude(event.target.value)}
        onKeyPress = {searchLocation}
        type = "text"
        placeholder="Latitude"
        
        />
        <input
        value = {longitude}
        
        onChange= {event => setLongitude(event.target.value)}
        onKeyPress = {searchLocation}
        type = "text"
        placeholder = "Longitude"
        
        />
        
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temp">
            {data.main? <h1>{data.main.temp}</h1>: null}
          </div>
          <div className="description">
          {data.weather? <p>{data.weather[0].main}</p>: null}
          </div>
        </div>

        {data.name !=undefined &&
        <div className="bottom">
          <div className="feels">
            {data.main? <p className="bold">{data.main.feels_like}F</p>: null}
            <p>Feels Like</p>
          </div>
          <div className="humidity">
            {data.main ? <p className="bold">{data.main.humidity}%</p>: null}
            <p>Humidity</p>
          </div>
          <div className="wind">
           
            {data.main? <p className="bold">{data.wind.speed}</p>: null}
            <p className="bold">12 MPH</p>
          </div>
        </div>
      }
      </div>

    </div>
    
  );
}

export default App;
