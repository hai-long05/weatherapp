import { faCloud, faCloudRain, faSnowflake, faSpinner, faWater } from "@fortawesome/free-solid-svg-icons";

export const getIconFromWeather = (weather: string | undefined) => {
    switch (weather) {
      case "Clouds":
        return faCloud;
      case "Mist":
        return faWater;
      case "Snow":
        return faSnowflake;
      case "Rain":
        return faCloudRain;
    }
    return faSpinner;
}