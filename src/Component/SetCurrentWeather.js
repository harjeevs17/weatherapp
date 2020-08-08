import React from 'react'


function showTemperature(min,max)
{
    return(
        <div className="row justify-content-center align-items-center">
             <div className="col-auto">
                <table className="table table-responsive mb-0"> 
                    <tbody>      
                    <tr>
                        <td>
                            <p ><span >Minimum</span><br/>{min}<span className="deg-symbol">&#8451;</span></p>
                        </td>
                        <td>
                            <p><span >Maximum</span><br/>{max}<span className="deg-symbol">&#8451;</span></p>
                        </td>
                    </tr>
                    </tbody>      
                </table>
            </div>
        </div>);
}
const getIcon = (id) =>
    {
        const weather ={
            Thunderstorm:"wi wi-day-thunderstorm",
            Drizzle:"wi wi-sleet",
            Rain:"wi wi-storm-showers",
            Snow:"wi wi-snow",
            Atmosphere:"wi wi-fog",
            Clear:"wi wi-day-sunny",
            Clouds:"wi wi-day-fog"
        }
        
        let icon;
        switch(true)
        {
            case id>=200 && id<=232:
                icon=weather.Thunderstorm;
                break;
            case id>=300 && id<=321:
                icon=weather.Drizzle;
                break;
            case id>=500 && id<=531:
                icon=weather.Rain;
                break;
            case id>=600 && id<=622:
                icon=weather.Snow;
                break;
            case id>=701 && id<=781:
                icon=weather.Atmosphere;
                break;
            case id===800:
                icon=weather.Clear;
                break;
            case id>=801 && id<=804:
                icon=weather.Clouds;
                break;
            default:
                break
        }       
        return icon;
}

const SetCurrentWeather = ({weather}) => 
{
    if(weather && !weather.error) {
        let data = {
                        desc : weather.weather[0].description ,
                        max : weather.main.temp_max,
                        min : weather.main.temp_min,
                        city : weather.name,
                        current : weather.main.temp,
                        icon: getIcon(weather.weather[0].id)
                    }
        const {city, current, icon, min, max, desc} = data
        return(
               
                    <div className="col-12 d-inline">
                        <p className="city-name">{city}</p>
                        <p className="display-3 mt-4 mb-3"><i className={icon}></i></p>
                        <p className="text-capitalize"> {desc}</p>
                        <p className="pt-2">Current : {current}<span className="deg-symbol">&#8451;</span></p>

                        {/* Show Min And Max Tempreture */}
                        
                        {showTemperature(min,max)}
                    </div>
        );
    }
    if(weather && weather.error)
        return <p className="error" >{weather.error} !!</p>
    return <></>
}
export default SetCurrentWeather