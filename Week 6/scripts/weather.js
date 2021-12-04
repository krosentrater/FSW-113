// API key  cc6aacf0104e44892e882185154d74a0
//API api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
import convertTemps from './convertTemp.js';
import dayLight from './getDayight.js'
let data, city;
document.querySelector('#goBttn').addEventListener('click', empty);
function empty(){
    fetchData();
};
function fetchData(){
    city = document.querySelector('#city').value;
    getWeather()
        .then(function(data){
            postWeather(data)
        })
        .catch(function(error){
            console.warn(error)
        })
};
const getWeather = async() => {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=cc6aacf0104e44892e882185154d74a0`);
    data = await response.json();
    console.log(data);
    return data;
};
function postWeather(data){
    document.getElementById('tempData').innerText = convertTemps(data.sys.country, data.main.temp);
    document.getElementById('humidData').innerText = data.main.humidity + '%';
    document.getElementById('conditionsData').innerText = data.weather[0].main;
    document.querySelector('.weatherWrapper').style.backgroundColor = dayLight(data.sys.sunrise, data.sys.sunset, data.dt);
};