
//<!================================ weather functions ===================================>
findloaction.addEventListener("keyup",function()
    {
        weather(findloaction.value)
    })
weather()

            // <!=================================================== API Fetching ================================================!>
async function weather(city = `auto:ip`)
{
        Http = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=4d86f756e23341bdb4f14102211809&q=${city}&days=7`)
        Http = await Http.json()
        
            // <!=====================GeT Day & month=======================!>
    var d = new Date();
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
    var n = weekday[d.getDay()];
    var nextDay = weekday[d.getDay()+1]
    var nextDay2 = weekday[d.getDay()+2]
    const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];

            // <!================================================================================================!>
                            // <!==================== current Day icon ======================!>
        for(let i = 0 ; i < allIcons.length ;i++)
        {
            if(allIcons[i].code == Http.current.condition.code && allIcons[i].time == Http.current.condition.icon.includes("day"))
            {
                icon = allIcons[i].icon;
            }
            else if(allIcons[i].code == Http.current.condition.code && allIcons[i].time != Http.current.condition.icon.includes("night"))
            {
                icon = allIcons[i].icon;
            }
        }
    CurrentIcon.setAttribute("src" , icon)
    Day.innerHTML = n;  //Name of The Day 
    DayInmonth.innerHTML = d.getDate() + " " + monthNames[d.getMonth()];    // Day and Month
    NameofCity.innerHTML = Http.location.name; // city Name
    Degree.innerHTML = Http.current.temp_c + `°C`;    // current temp
    condition.innerHTML = Http.current.condition.text;   //current condition
    cloud.innerHTML = Http.current.cloud +"%" ; //current cloud
    Wind.innerHTML = Http.current.wind_kph + "kph"; //current wind speed
    WindDirection.innerHTML = Http.current.wind_dir;    //current wind Direction
    Sunrise.innerHTML = Http.forecast.forecastday[0].astro.sunrise;
    Sunset.innerHTML = Http.forecast.forecastday[0].astro.sunset;
    Moonrise.innerHTML = Http.forecast.forecastday[0].astro.moonrise;
    Moonset.innerHTML = Http.forecast.forecastday[0].astro.moonset;
            // <!================================================================================================!>
                        // <!======================== next Day icon ============================!>
        for(let i = 0 ; i < allIcons.length ;i++)
        {
            if(allIcons[i].code == Http.forecast.forecastday[1].day.condition.code && allIcons[i].time == Http.forecast.forecastday[1].day.condition.icon.includes("day"))
            {
                Nexticon = allIcons[i].icon;
            }
            else if(allIcons[i].code == Http.forecast.forecastday[1].day.condition.code && allIcons[i].time != Http.forecast.forecastday[1].day.condition.icon.includes("night"))
            {
                Nexticon = allIcons[i].icon;
            }
        }
        nextdayicon.setAttribute("src" , Nexticon)
        Day_nextDay.innerHTML = nextDay ;
        Day_NextDayInmonth.innerHTML = d.getDate()+1 + " " + monthNames[d.getMonth()]
        nextDaymaxTemp.innerHTML = Http.forecast.forecastday[1].day.maxtemp_c + `°C` +` / ` ;
        nextDayminTemp.innerHTML = Http.forecast.forecastday[1].day.mintemp_c + `°C`;
        NextDayCondition.innerHTML = Http.forecast.forecastday[1].day.condition.text;

                // <!================================================================================================!>
                            // <!===================== next Day icon ==========================!>
        for(let i = 0 ; i < allIcons.length ;i++)
        {
            if(allIcons[i].code == Http.forecast.forecastday[2].day.condition.code && allIcons[i].time == Http.forecast.forecastday[2].day.condition.icon.includes("day"))
            {
                Nexticon2 = allIcons[i].icon;
            }
            else if(allIcons[i].code == Http.forecast.forecastday[2].day.condition.code && allIcons[i].time != Http.forecast.forecastday[2].day.condition.icon.includes("night"))
            {
                Nexticon2 = allIcons[i].icon;
            }
        }
    nextdayicon2.setAttribute("src" , Nexticon2)
    Day_nextDay2.innerHTML = nextDay2 ;
    Day_NextDayInmonth2.innerHTML = d.getDate()+2 + " " + monthNames[d.getMonth()]
    nextDay2maxTemp.innerHTML = Http.forecast.forecastday[2].day.maxtemp_c + `°C` +` / ` ;
    nextDay2minTemp.innerHTML = Http.forecast.forecastday[2].day.mintemp_c + `°C`;
    NextDay2Condition.innerHTML = Http.forecast.forecastday[2].day.condition.text;
}


