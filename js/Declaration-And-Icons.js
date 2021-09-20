//<!======================== Declaration ======== >
let Http;
let findloaction = document.getElementById("findloaction")
let Day = document.getElementById("Day")
let DayInmonth = document.getElementById("DayInmonth")
let NameofCity = document.getElementById("nameofcity")
let Degree = document.getElementById("degree")
let symbol = document.getElementById("symbol")
let condition = document.getElementById("condition")
let cloud = document.getElementById("cloud")
let Wind = document.getElementById("Wind")
let WindDirection = document.getElementById("WindDirection")
let Sunrise = document.getElementById("Sunrise");
let Sunset = document.getElementById("Sunset");
let Moonrise = document.getElementById("Moonrise");
let Moonset = document.getElementById("Moonset");
let Day_nextDay = document.getElementById("Day_nextDay");
let Day_NextDayInmonth = document.getElementById("Day_NextDayInmonth");
let nextDaymaxTemp = document.getElementById("nextDaymaxTemp");
let nextDayminTemp = document.getElementById("nextDayminTemp");
let NextDayCondition = document.getElementById("NextDayCondition");
let Day_nextDay2 = document.getElementById("Day_nextDay2");
let Day_NextDayInmonth2 = document.getElementById("Day_NextDayInmonth2");
let nextDay2maxTemp = document.getElementById("nextDay2maxTemp");
let nextDay2minTemp = document.getElementById("nextDay2minTemp");
let NextDay2Condition = document.getElementById("NextDay2Condition");
let CurrentIcon = document.querySelector(".CurrentIcon");
let nextdayicon = document.querySelector(".nextdayicon");
let nextdayicon2 = document.querySelector(".nextdayicon2");
let icon ="";
let Nexticon ="";
let Nexticon2 ="";
                // <!============================================ Array To Store Icons ============================================!>
let allIcons =[
                    ///<============================================== Day Icons ==================================> ///
                    {code:1000 ,time:true, icon:"imags/condition-icons/Day/clear-day.svg"},
                    {code:1006 ,time:true, icon:"imags/condition-icons/Day/cloudy.svg"},
                    {code:1003 ,time:true, icon:"imags/condition-icons/Day/partly-cloudy-day.svg"},
                    {code:1009 ,time:true, icon:"imags/condition-icons/Day/overcast-day.svg"},
                    {code:1030 ,time:true, icon:"imags/condition-icons/Day/mist.svg"},
                    {code:1063 ,time:true, icon:"imags/condition-icons/Day/partly-cloudy-day-rain.svg"},
                    {code:1066 ,time:true, icon:"imags/condition-icons/Day/partly-cloudy-day-snow.svg"},
                    {code:1069 ,time:true, icon:"imags/condition-icons/Day/partly-cloudy-day-sleet.svg"},
                    {code:1072 ,time:true, icon:"imags/condition-icons/Day/partly-cloudy-day-drizzle.svg"},
                    {code:1087 ,time:true, icon:"imags/condition-icons/Day/thunderstorms-day.svg"},
                    {code:1114 ,time:true, icon:"imags/condition-icons/Day/partly-cloudy-day-snow.svg"},
                    {code:1117 ,time:true, icon:"imags/condition-icons/Day/partly-cloudy-day-snow.svg"},
                    {code:1135 ,time:true, icon:"imags/condition-icons/Day/fog-day.svg"},
                    {code:1147 ,time:true, icon:"imags/condition-icons/Day/fog-day.svg"},
                    {code:1150 ,time:true, icon:"imags/condition-icons/Day/partly-cloudy-day-drizzle.svg"},
                    {code:1153 ,time:true, icon:"imags/condition-icons/Day/partly-cloudy-day-drizzle.svg"},                   
                    {code:1168 ,time:true, icon:"imags/condition-icons/Day/drizzle.svg"},
                    {code:1171 ,time:true, icon:"imags/condition-icons/Day/drizzle.svg"},
                    {code:1180 ,time:true, icon:"imags/condition-icons/Day/partly-cloudy-day-rain.svg"},
                    {code:1183 ,time:true, icon:"imags/condition-icons/Day/rain.svg"},
                    {code:1186 ,time:true, icon:"imags/condition-icons/Day/partly-cloudy-day-rain.svg"},
                    {code:1189 ,time:true, icon:"imags/condition-icons/Day/partly-cloudy-day-rain.svg"},
                    {code:1192 ,time:true, icon:"imags/condition-icons/Day/rain.svg"},
                    {code:1195 ,time:true, icon:"imags/condition-icons/Day/rain.svg"},
                    {code:1198 ,time:true, icon:"imags/condition-icons/Day/rain.svg"},
                    {code:1201 ,time:true, icon:"imags/condition-icons/Day/partly-cloudy-day-rain.svg"},
                    {code:1204 ,time:true, icon:"imags/condition-icons/Day/partly-cloudy-day-sleet.svg"},
                    {code:1207 ,time:true, icon:"imags/condition-icons/Day/partly-cloudy-day-sleet.svg"},
                    {code:1210 ,time:true, icon:"imags/condition-icons/Day/partly-cloudy-day-snow.svg"},
                    {code:1213 ,time:true, icon:"imags/condition-icons/Day/snow.svg"},
                    {code:1216 ,time:true, icon:"imags/condition-icons/Day/partly-cloudy-day-snow.svg"},
                    {code:1219 ,time:true, icon:"imags/condition-icons/Day/partly-cloudy-day-snow.svg"},
                    {code:1222 ,time:true, icon:"imags/condition-icons/Day/snow.svg"},
                    {code:1225 ,time:true, icon:"imags/condition-icons/Day/snow.svg"},
                    {code:1237 ,time:true, icon:"imags/condition-icons/Day/hail.svg"},
                    {code:1240 ,time:true, icon:"imags/condition-icons/Day/partly-cloudy-day-rain.svg"},
                    {code:1243 ,time:true, icon:"imags/condition-icons/Day/rain.svg"},
                    {code:1246 ,time:true, icon:"imags/condition-icons/Day/rain.svg"},
                    {code:1249 ,time:true, icon:"imags/condition-icons/Day/partly-cloudy-day-sleet.svg"},
                    {code:1252 ,time:true, icon:"imags/condition-icons/Day/partly-cloudy-day-sleet.svg"},
                    {code:1255 ,time:true, icon:"imags/condition-icons/Day/partly-cloudy-day-snow.svg"},
                    {code:1258 ,time:true, icon:"imags/condition-icons/Day/partly-cloudy-day-snow.svg"},
                    {code:1261 ,time:true, icon:"imags/condition-icons/Day/partly-cloudy-day-hail.svg"},
                    {code:1264 ,time:true, icon:"imags/condition-icons/Day/partly-cloudy-day-hail.svg"},
                    {code:1273 ,time:true, icon:"imags/condition-icons/Day/thunderstorms-day-rain.svg"},
                    {code:1276 ,time:true, icon:"imags/condition-icons/Day/thunderstorms-day-rain.svg"},
                    {code:1279 ,time:true, icon:"imags/condition-icons/Day/thunderstorms-day-rain.svg"},
                    {code:1282 ,time:true, icon:"imags/condition-icons/Day/thunderstorms-day-rain.svg"},

                    ///<!============================== Night Icons ======================= > ///

                    {code:1000 ,time:false, icon:"imags/condition-icons/Night/clear-night.svg"},
                    {code:1006 ,time:false, icon:"imags/condition-icons/Night/cloudy.svg"},
                    {code:1003 ,time:false, icon:"imags/condition-icons/Night/partly-cloudy-night.svg"},
                    {code:1009 ,time:false, icon:"imags/condition-icons/Night/overcast-night.svg"},
                    {code:1030 ,time:false, icon:"imags/condition-icons/Night/mist.svg"},
                    {code:1063 ,time:false, icon:"imags/condition-icons/Night/partly-cloudy-night-rain.svg"},
                    {code:1066 ,time:false, icon:"imags/condition-icons/Night/partly-cloudy-night-snow.svg"},
                    {code:1069 ,time:false, icon:"imags/condition-icons/Night/partly-cloudy-night-drizzle.svg"},
                    {code:1072 ,time:false, icon:"imags/condition-icons/Night/partly-cloudy-night-drizzle.svg"},
                    {code:1087 ,time:false, icon:"imags/condition-icons/Night/thunderstorms-night.svg"},
                    {code:1114 ,time:false, icon:"imags/condition-icons/Night/partly-cloudy-night-snow.svg"},
                    {code:1117 ,time:false, icon:"imags/condition-icons/Night/partly-cloudy-night-snow.svg"},
                    {code:1135 ,time:false, icon:"imags/condition-icons/Night/fog-night.svg"},
                    {code:1147 ,time:false, icon:"imags/condition-icons/Night/fog-night.svg"},
                    {code:1150 ,time:false, icon:"imags/condition-icons/Night/partly-cloudy-night-drizzle.svg"},
                    {code:1153 ,time:false, icon:"imags/condition-icons/Night/partly-cloudy-night-drizzle.svg"},                   
                    {code:1168 ,time:false, icon:"imags/condition-icons/Night/drizzle.svg"},
                    {code:1171 ,time:false, icon:"imags/condition-icons/Night/drizzle.svg"},
                    {code:1180 ,time:false, icon:"imags/condition-icons/Night/partly-cloudy-night-rain.svg"},
                    {code:1183 ,time:false, icon:"imags/condition-icons/Night/rain.svg"},
                    {code:1186 ,time:false, icon:"imags/condition-icons/Night/partly-cloudy-night-rain.svg"},
                    {code:1189 ,time:false, icon:"imags/condition-icons/Night/partly-cloudy-night-rain.svg"},
                    {code:1192 ,time:false, icon:"imags/condition-icons/Night/rain.svg"},
                    {code:1195 ,time:false, icon:"imags/condition-icons/Night/rain.svg"},
                    {code:1198 ,time:false, icon:"imags/condition-icons/Night/rain.svg"},
                    {code:1201 ,time:false, icon:"imags/condition-icons/Night/partly-cloudy-night-rain.svg"},
                    {code:1204 ,time:false, icon:"imags/condition-icons/Night/partly-cloudy-night-drizzle.svg"},
                    {code:1207 ,time:false, icon:"imags/condition-icons/Night/partly-cloudy-night-drizzle.svg"},
                    {code:1210 ,time:false, icon:"imags/condition-icons/Night/partly-cloudy-night-snow.svg"},
                    {code:1213 ,time:false, icon:"imags/condition-icons/Night/snow.svg"},
                    {code:1216 ,time:false, icon:"imags/condition-icons/Night/partly-cloudy-night-snow.svg"},
                    {code:1219 ,time:false, icon:"imags/condition-icons/Night/partly-cloudy-night-snow.svg"},
                    {code:1222 ,time:false, icon:"imags/condition-icons/Night/snow.svg"},
                    {code:1225 ,time:false, icon:"imags/condition-icons/Night/snow.svg"},
                    {code:1237 ,time:false, icon:"imags/condition-icons/Night/hail.svg"},
                    {code:1240 ,time:false, icon:"imags/condition-icons/Night/partly-cloudy-night-rain.svg"},
                    {code:1243 ,time:false, icon:"imags/condition-icons/Night/rain.svg"},
                    {code:1246 ,time:false, icon:"imags/condition-icons/Night/rain.svg"},
                    {code:1249 ,time:false, icon:"imags/condition-icons/Night/partly-cloudy-night-drizzle.svg"},
                    {code:1252 ,time:false, icon:"imags/condition-icons/Night/partly-cloudy-night-drizzle.svg"},
                    {code:1255 ,time:false, icon:"imags/condition-icons/Night/partly-cloudy-night-snow.svg"},
                    {code:1258 ,time:false, icon:"imags/condition-icons/Night/partly-cloudy-night-snow.svg"},
                    {code:1261 ,time:false, icon:"imags/condition-icons/Night/partly-cloudy-night-hail.svg"},
                    {code:1264 ,time:false, icon:"imags/condition-icons/Night/partly-cloudy-night-hail.svg"},
                    {code:1273 ,time:false, icon:"imags/condition-icons/Night/thunderstorms-night-rain.svg"},
                    {code:1276 ,time:false, icon:"imags/condition-icons/Night/thunderstorms-night-rain.svg"},
                    {code:1279 ,time:false, icon:"imags/condition-icons/Night/thunderstorms-night-rain.svg"},
                    {code:1282 ,time:false, icon:"imags/condition-icons/Night/thunderstorms-night-rain.svg"},
                ]
