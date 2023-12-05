import { RingLoader } from "react-spinners" 

const FetchLoader = () => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <RingLoader color="#f0f1f1"/>
    </div>
  )
}

export default FetchLoader