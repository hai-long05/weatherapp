export const fetchWeatherData = async (lat: number, lon: number) => {
  const APIKEY = import.meta.env.VITE_API_KEY
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKEY}`);
  const data = await response.json();
  return data;
}