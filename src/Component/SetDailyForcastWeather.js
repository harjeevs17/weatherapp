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

const CreateCard = ({data}) => {
    const {date,desc, max, min, morning, day, evening, night, icon} = data
    return<> <div className="col-12 col-sm-4">
                 <div className="card mb-3 mw-25" >
                    <div className="card-header"><p>{date}</p></div>
                     <div className="card-body text-primary">
                        <div className="row align-items-center justify-content-center">
                        <p>{desc}</p>
                        </div>
                        <div className="row align-items-center">
                            <div className="col-4">
                            <h1 className="display-3"><i className={icon}></i></h1>
                            </div>
                            <div className="col-8">
                                <div className="row">
                                    <div className="col-5 offset-2">
                                    <p className="card-text">Min <br/>{min}<span className="deg-symbol">&#8451;</span></p>
                                    </div>
                                    <div className="col-5">
                                    <p className="card-text">Max <br/>{max}<span className="deg-symbol">&#8451;</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row align-items-center card-foot mt-4">
                            <div className="col-3 custom-border px-0">
                                <p className="mr-2">Morgin <br/><span>{morning}</span><span className="deg-symbol">&#8451;</span></p>
                            </div>
                            <div className="col-3 custom-border px-0">
                                <p className="mr-2">Day <br/><span>{day}</span><span className="deg-symbol">&#8451;</span></p>
                            </div>
                            <div className="col-3 custom-border px-0">
                                <p>Evning <br/><span>{evening}</span><span className="deg-symbol">&#8451;</span></p>
                            </div>
                            <div className="col-3 px-0">
                                <p className="mr-2">Night <br/><span>{night}</span><span className="deg-symbol">&#8451;</span></p>
                            </div>
                        </div>
                     </div>
                </div>
             </div>
    </> 
}

const SetForcastWeather = ({weather}) => {
    if(weather && !weather.error)
    {
        return <>{weather.daily.map((data, index) => <CreateCard 
            key={index}
            data={{
                date : (new Date(data.dt * 1000)).toDateString(),
                desc : data.weather[0].description ,
                max : Math.round(data.temp.max),
                min : Math.round(data.temp.max),
                morning: Math.round(data.temp.morn),
                evening: Math.round(data.temp.eve),
                day: Math.round(data.temp.day),
                night: Math.round(data.temp.night),
                icon: getIcon(data.weather[0].id)
            }} />)}</>
    }
    if(weather && weather.error)
        return <p className="error" >{weather.error} !!</p>
    return <></>
}
export default SetForcastWeather