
const apiKey="69626a1ae39733fd1c3bda67fe79480b";
let lat
let lon

window.addEventListener("load",()=>
{
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition((position)=>{
         lon=position.coords.longitude;
            lat=position.coords.latitude;

            const url=`https://api.openweathermap.org/data/2.5/weather?q=Delhi&appid=${apiKey}`

            fetch(url).then(res=>{
                return res.json();
            }).then((data)=>{
                console.log(data)
                weatherReport(data)
            })
        })
    }
})

function weatherReport(data){
    var urlcast=`https://api.openweathermap.org/data/2.5/forecast?q=${data.name}&appid=${apiKey}`

    fetch(urlcast).then(res=>{
        return res.json();
    }).then((forecast)=>{
        console.log(forecast)
        hourForecast(forecast)
        dayForecast(forecast)

        document.getElementById('city')
.innerText=data.name+','+data.sys.country;
        document.getElementById('temperature').innerText=Math.floor(data.main.temp-273)+'°C';

        document.getElementById('clouds').innerText=data.weather[0].description;

        let icon=data.weather[0].icon;
        let iconurl="http://api.openweathermap.org/img/w/"+icon+".png";

        document.getElementById('img').src=iconurl;

})
}

function hourForecast(){



}


function dayForecast(){

}