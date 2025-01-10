const API_KEY = '507c11568d3fa59ac1e25c1fe3831ee6';

const fetchWeather = async (event) => {
  event.preventDefault(); // Prevent form submission
  const city = document.getElementById('city').value;

  if (!city) {
    alert('Please enter a city name!');
    return;
  }

  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
    );
    if (!response.ok) {
      throw new Error('City not found or API error.');
    }
    const data = await response.json();
    displayWeather(data);
  } catch (error) {
    alert(error.message);
  }
};

const displayWeather = (data) => {
  const weatherDiv = document.getElementById('weatherDisplay');
  weatherDiv.innerHTML = `
    <h2>${data.name}, ${data.sys.country}</h2>
    <p>Temperature: ${data.main.temp}°C</p>
    <p>Humidity: ${data.main.humidity}%</p>
    <p>Wind Speed: ${data.wind.speed} m/s</p>
  `;
};

document.getElementById('weatherForm').addEventListener('submit', fetchWeather);
