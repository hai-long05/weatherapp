import FetchingErrorModal from "../components/Error/FetchingErrorModal";
import FetchLoader from "../components/loader/FetchLoader";
import { useQuery } from "@tanstack/react-query";
import { fetchWeatherData } from "../services/fetchData";

const WeatherPage = () => {

  const query = useFetchData();
  const { data, isLoading, error } = query;

  if (isLoading) {
    return <FetchLoader />
  }

  if (error) {
    console.error('Fetching error: ', error)
    return <FetchingErrorModal />
  }

  console.log(data)

  return (
    <div className="text-[#f0f1f1]">
      WeatherPage
    </div>
  )
}

export const useFetchData = () => {
  const query = useQuery({
    queryFn: () => fetchWeatherData(),
    queryKey: ["weather"],
  });

  return query
}

export default WeatherPage