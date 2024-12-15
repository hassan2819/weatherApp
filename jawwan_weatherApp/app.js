
const api_key='1d70729088091093b6155bb73d541574';
const inputdata= document.getElementById("inputField");
const showWeather= document.getElementById("showWeather");

const searchData = async ()=>{
    showWeather.innerHTML='';
    const api_url=`https://api.openweathermap.org/data/2.5/weather?q=${inputdata.value}&appid=${api_key}&units=metric`;
     const fethData=await fetch(api_url);
     const response= await fethData.json();
     console.log(response);
     return showData(response);
};
     const showData=(data)=>{
        showWeather.innerHTML=`
        <img  width="80"  src=${`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt="">

        <h2> City: ${data.name}, ${data.sys.country}</h2>
        <h3> Current Temperature: ${data.main.temp} C</h3>
        <h4> Feels like: ${data.main.feels_like} C</h4>
        <h4> Condition: ${data.weather[0].main}</h4>
        <h4> Humidity: ${data.main.humidity}%</h4>

        `;
     };
     












    
    
    














