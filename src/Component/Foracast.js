import React, { Fragment, useState } from 'react'
import Axios from 'axios'
import './../dist/css/weather.css'
import SetDailyForcastWeather from './SetDailyForcastWeather'
import SetHourForcastWeather from './SetHourForcastWeather'


const getCurrentWeather = async(city='rajkot', setWeather,setLoading) => {
   await Axios.get('https://dhaval-weather.herokuapp.com/weather/forcast/'+city)
            .then(result => {
                setWeather(result.data)
                setLoading(false)
            });
}
const onSubmit = (event, setLoading, city, setWeather) => {
    event.preventDefault()
    if(city === '')
        return
    setLoading(true)
    getCurrentWeather(city,setWeather,setLoading)
}
const Forcast = () => {
    const [cityName, setCityName] = useState('')
    const [weather, setWeather] = useState(null)
    const [loading, setLoading] = useState(false)
    const [forcastType, setForcastType] = useState(true)

    return( 
        <Fragment>
            <div className="container">
            <form onSubmit={(event) => onSubmit(event,setLoading, cityName, setWeather)}>
                <div className="row justify-content-center mt-sm-1 mt-md-2">
                    <div className="col-8 col-sm-6 pr-0 offset-sm-1">
                        <input type="text" className="form-control" value={cityName} onChange={e => setCityName(e.target.value)} placeholder="Weather Of Your City ..."/>
                    </div>
                    <div className="col-3 col-sm-3">
                        <button 
                            className="btn btn-primary px-4" 
                            type="submit" id="button">Get</button>
                    </div>                
                </div>
            </form>
                <div className="row mt-3 justify-content-center">
                    <div className="col-9 col-sm-6 offset-sm-6">
                        <p className=" d-inline">Hourly</p>
                        <label className="switch mx-2 mt-2">
                        <input type="checkbox" onChange={(e) => setForcastType(e.target.checked)} checked={forcastType}/>
                        <span className="slider round"></span>
                        </label>
                        <p className="d-inline">Daily</p>
                    </div>
                </div>
                <div className="row justify-content-center align-items-center text-center mt-5">
                    
                    {loading 
                        ? <p>Please Wait...</p>
                        :[forcastType ? <SetDailyForcastWeather key={forcastType} weather={weather} /> : <SetHourForcastWeather key={forcastType} weather={weather}/> ]}
                </div>
            </div>
        </Fragment>
    );
}
export default Forcast