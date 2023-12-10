import { useEffect, useState } from "react";
import Weather from "../components/Weather";
import FetchLoader from "../components/loader/FetchLoader";

export type CordsType = {
  latitude: number | null
  longitude: number | null
}

const WeatherPage = () => {

  const [isLoading, setIsLoading] = useState<boolean>(true);

  const [location, setLocation] = useState<CordsType>({
    latitude: null,
    longitude: null,
  });

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      });
    } else {
      alert("Geolocation is not supported by this browser.");
    }
    setIsLoading(false);
  };

  useEffect(() => {
    getLocation();
  }, []);

  return (
    <div className="text-[#f0f1f1] w-full">
      { isLoading ? (<FetchLoader />) : (<Weather location={location}/>) }
    </div>
  )
}


export default WeatherPage