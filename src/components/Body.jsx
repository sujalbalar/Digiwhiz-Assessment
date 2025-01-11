import SliderLayout from "../components/Slider/SliderLayout";
import About from "../components/About"
import GalleryContainer from "./GalleryContainer";
import EmployeeData from "./EmployeeData";

function Body() {

  return (
    <div className="h-full">
      <SliderLayout className="object-cover"/>
      <About/>
      <GalleryContainer/>
      <EmployeeData />
    </div>
  )
}

export default Body;