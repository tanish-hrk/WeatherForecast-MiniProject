const apiKey = "a8c2d3d7a3ad65b65df6091a177ff74f";
async function getWeather() {
    const city = document.getElementById('city').value;
    const weather = document.getElementById('result');

if(!city){
    weather.innerHTML = `<p>Please enter a city!<p>`;
    return;
}

const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

try{
    const response = await fetch(url);
    console.log(response);
    if(!response.ok) throw new Error('City Not Found!!');
    const data = await response.json();

    weather.innerHTML = `
    <p><strong>City:</strong> ${data.name} </p>
    <p><strong>Temperature:</strong> ${data.main.temp}°C</p>
    <p><strong>Weather:</strong> ${data.weather[0].description} </p>
    <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
    <p><strong>Wind Speed:</strong> ${data.wind.speed} m/s</p>    
    `;
}
catch(error){
    weather.innerHTML = `<p>${error.message}</p>`;
}

}