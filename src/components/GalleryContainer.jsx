import { useState } from "react";
import img1 from "../images/p1.jpg";
import img2 from "../images/p2.jpg";
import img3 from "../images/p3.jpg";

function GalleryContainer(){
    const [isClick, setIsClick] = useState(0);
    const btnTxt = [{id : 0, text : "All"}, {id : 1, text : "Green Building"}, {id : 2, text : "Healthcare"}, {id : 3, text : "Interior Design"}, {id : 4, text : "Office"}];
  
    function handleClick(num){
      setIsClick(num);
    }
  
    return(
      <div className="w-screen flex flex-col gap-10">
        <div className="w-full flex gap-4 justify-center text-[#5A5A5A] sm:grid sm:grid-cols-3 sm:grid-rows-2">
          {
            btnTxt.map(txt => {
              return (
                <BTNGROUP data={txt} isActive={txt.id === isClick} updateState={handleClick}/>
              )
            })
          }
        </div>
        <Gallery/>
      </div>
    )
  }
  
function BTNGROUP(props){
    return(
        <button key={props.data.id} className={`w-40 p-4 py-2 ${props.isActive? 'bg-[#FFB700] text-white' : 'bg-inherit'} sm:w-32`} onClick={() => props.updateState(props.data.id)}>
        {props.data.text}
        </button>
    )
}
  
function Gallery(){

    const imgs = [img1, img3, img2, img3, img1, img3];

    return(
        <div className="w-full gap-[1px] sm:flex sm:flex-col md:grid-cols-2 md:grid-rows-auto lg:grid lg:grid-cols-3 lg:grid-rows-2">
        {
            imgs.map((img, index) => {
            return(
                <img className="w-full object-cover aspect-video" key={index} src={img} alt={img} />
            )
            })
        }
        </div>
    )
}
export default GalleryContainer;
  