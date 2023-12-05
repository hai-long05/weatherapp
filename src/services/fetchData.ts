export const fetchWeatherData = async () => {
  const APIKEY = import.meta.env.VITE_API_KEY
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=London&appid=${APIKEY}`);
  const data = await response.json();
  console.log(data)
  return data;
}