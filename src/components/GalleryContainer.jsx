import { useState } from "react";
import Plus from "../images/plus.svg";
import Link from "../images/link.svg";

function GalleryContainer(){
    const [isClick, setIsClick] = useState(0);
    const btnTxt = [{id : 0, text : "All"}, {id : 1, text : "Green Building"}, {id : 2, text : "Healthcare"}, {id : 3, text : "Interior Design"}, {id : 4, text : "Office"}];
  
    function handleClick(num){
      setIsClick(num);
    }
  
    return(
      <div className="bg-[#F8F8F8] flex flex-col items-center gap-12 py-24 pb-4 xs:p-6">
        <div className="w-7/12 flex flex-col gap-6">
          <p className="uppercase text-center font-bold text-3xl text-[#252C3A]">Featured Works</p>
          <p className="text-center text-[#5A5A5A]">Lorem ipsum dolor sit amet, sed dicunt oporteat cu, laboramus definiebas cum et. Duo id omnis persequeris neglegentur, facete commodo ea usu, possit lucilius sed ei. Esse efficiendi scripserit eos ex. Sea utamur iisque salutatus id.Mel autem animal.</p>
        </div>
        <div className="flex flex-col gap-10">
          <div className="flex gap-4 justify-center text-[#5A5A5A] xs:grid xs:grid-cols-3 xs:grid-rows-2 md:grid md:grid-cols-3 md:grid-rows-2 md:place-items-center">
            {
              btnTxt.map((txt, index) => {
                return (
                  <BTNGROUP key={index} data={txt} isActive={txt.id === isClick} updateState={handleClick}/>
                )
              })
            }
          </div>
          <Gallery index={isClick}/>
        </div>
      </div>
    )
  }
  
function BTNGROUP(props){
    return(
        <button className={`w-40 p-4 py-2 ${props.isActive? 'bg-[#FFB700] text-white' : 'bg-white'} xs:w-24 xs:text-sm xs:p-2`} onClick={() => props.updateState(props.data.id)}>
          {props.data.text}
        </button>
    )
}
  
function Gallery(props){

    const imgs = [
      [
        {url : "/images/gb1.jpg", title : "Garden"}, {url : "/images/hc2.jpg", title : "Stethoscope"}, {url : "images/id3.jpg", title : "Rest room interior"}, {url : "/images/office1.jpg", title : "Meeting Room"}, {url : "/images/id2.jpg", title : "Reading Room"}, {url : "/images/gb3.jpg", title : "Green Villa"}
      ],
      [
        {url : "/images/gb1.jpg", title : "Garden"},{url : "/images/gb2.jpg", title : "Green Park"},{url : "/images/gb3.jpg", title : "Green Villa"}
      ],
      [
        {url : "/images/hc1.jpg", title : "Medicine"},{url : "/images/hc2.jpg", title : "Stethoscope"},{url : "/images/hc3.jpg", title : "Inspection"}
      ],
      [
        {url : "/images/id1.jpg", title : "Living Room"},{url : "/images/id2.jpg", title : "Reading Room"},{url : "/images/id3.jpg", title : "Rest room interior"}
      ],
      [
        {url : "/images/office1.jpg", title : "Conference Room"},{url : "/images/office2.jpg", title : "Meetings"},{url : "/images/office3.jpg", title : "Canteen"}
      ]
    ];

    return(
        <div className="sm:flex sm:flex-col grid md:grid-cols-2 md:grid-rows-auto lg:grid-cols-3 lg:grid-rows-2 xl:grid-cols-3 xl:grid-rows-2">
        {
            imgs[props.index].map((img, index) => {
            return(
              <div key={index} className="group relative overflow-hidden shadow-lg transition-transform duration-300 hover:cursor-pointer">
                <img className="object-cover aspect-video" key={index} src={img.url} alt={img} />
                <div class="absolute bottom-0 left-0 w-full h-20 bg-black opacity-0 group-hover:opacity-80 transition-opacity duration-300">
                  <div class="flex items-center justify-between w-full h-full p-6 px-10">
                    <div class="flex flex-col gap-2">
                      <h3 class="text-white text-xl font-semibold heading-after">{img.title}</h3>
                      <hr class="h-1 w-[35%]"/>
                    </div>
                    <div class="flex items-center space-x-3 font-semibold text-black">
                      <button class="bg-accent p-1.5 rounded-full"><img src={Plus} alt="Add" /></button>
                      <button class="bg-accent p-1.5 rounded-full"><img src={Link} alt="link" /></button>
                    </div>
                  </div>
                </div>
              </div>
            )
            })
        }
        </div>
    )
}
export default GalleryContainer;
  