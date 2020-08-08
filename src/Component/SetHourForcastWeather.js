import React from 'react'

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
const getDate = (dt) => {
    let date = (new Date(dt * 1000))
    console.log(date.toLocaleString("en-us",{weekday:'short',month:'short',day:'2-digit'}))
    return date.toLocaleString("en-us",{hour:'numeric',minute:'numeric'})+" "+date.toLocaleString("en-us",{weekday:'short',month:'short',day:'2-digit'})
}
const CreateCard = ({data}) => {
    const {date,desc,temp, icon} = data
    return<> <div className="col-12 col-sm-4">
                 <div className="card mb-3 mw-25" >
                    <div className="card-header"><p>{date}</p></div>
                     <div className="card-body text-primary">
                        <div className="row align-items-center justify-content-center">
                        <p>{desc}</p>
                        </div>
                        <div className="row align-items-center justify-content-center mt-2">
                            <div className="col-4">
                            <h1 className="display-3"><i className={icon}></i></h1>
                            </div>
                            <div className="col-5">
                                    {/* <p className="card-text">Temprature </p> */}
                                    <p className="hour-card-temp">{temp}<span className="hour-deg-symbol">&#8451;</span></p>
                            </div>
                        </div>
                     </div>
                </div>
             </div>
    </> 
}

const SetHourForcastWeather = ({weather}) => {
    if(weather && !weather.error)
    {
        return <>{weather.hourly.map((data, index) => <CreateCard 
            key={index}
            data={{
                date : getDate(data.dt),
                desc : data.weather[0].description ,
                temp : Math.round(data.temp),
                icon: getIcon(data.weather[0].id)
            }} />)}</>
    }
    if(weather && weather.error)
        return <p className="error" >{weather.error} !!</p>
    return <></>
}
export default SetHourForcastWeather