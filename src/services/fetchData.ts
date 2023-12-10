
const APIKEY = import.meta.env.VITE_API_KEY

export const fetchWeatherData = async (lat: number, lon: number, url: string) => {
  const response = await fetch(`${url}lat=${lat}&lon=${lon}&appid=${APIKEY}`);
  const data = await response.json();
  return data;
}
