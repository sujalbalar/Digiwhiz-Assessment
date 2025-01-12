import SliderLayout from "../components/Slider/SliderLayout.jsx";
import About from "../components/About.jsx"
import GalleryContainer from "./GalleryContainer.jsx";
import EmployeeData from "./EmployeeData.jsx";

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