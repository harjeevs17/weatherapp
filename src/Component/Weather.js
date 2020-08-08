import React, { Fragment, useState } from 'react'
import Axios from 'axios'
import './../dist/css/weather.css'
import GetWeather from './SetCurrentWeather'


const getCurrentWeather = async(city='rajkot', setWeather,setLoading) => {
   let data
   await Axios.get('https://dhaval-weather.herokuapp.com/weather/'+city)
            .then(result => {
                setWeather(result.data)
                setLoading(false)
            });
    return data

}
const onSubmit = (event, setLoading, city, setWeather) => {
    event.preventDefault()
    if(city === '')
        return
    setLoading(true)
    getCurrentWeather(city,setWeather,setLoading)
}

const Weather = () => {
    const [cityName, setCityName] = useState('')
    const [weather, setWeather] = useState(null)
    const [loading, setLoading] = useState(false)
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

                <div className="row justify-content-center align-items-center text-center mt-5">
                    {loading ? <p>Please Wait...</p>:<GetWeather weather={weather}/>}
                </div>
            </div>
        </Fragment>
    );
}
export default Weather