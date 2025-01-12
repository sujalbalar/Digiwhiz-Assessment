import React, { useEffect, useState } from "react";
import ImgContainer from "./ImgContainer.jsx"
import Dot from "./Dot.jsx";
import {slides} from "./SliderData.js";

const len = slides.length - 1;

function SliderLayout() {

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(activeIndex >= len ? 0 : activeIndex + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, [activeIndex]);

  function handleClick(index){
    setActiveIndex(index);
  }

  return (
    <>
      <div className="relative">
        <ImgContainer index={activeIndex} data={slides[activeIndex]} />
        <div className="flex gap-2 absolute bottom-10 left-[50%] -translate-x-10">
        {
          slides.map((data, index) => {
            return <Dot key={index} isActive={activeIndex === index} data={index} updateState={handleClick} />
          })
        }
        </div>
      </div>
      <div className="w-full bg-[#FAB702] px-64 py-2 flex items-center justify-between xs:p-2 xs:gap-3 sm:px-4 md:px-6 lg:px-8">
        <p className="text-[#FFFFFF] text-md font-bold sm:text-[12px]">
            Consulting And Estimate For Your Project, <span className="text-[#252C3A] text-md font-bold underline sm:text-sm">Contact Us Today</span>
        </p>
        <button className="bg-[#FFFFFF] py-2 px-6 text-[#252C3A] font-bold sm:text-[10px] sm:p-3 xs:p-2">Get A Quote</button>
      </div>
    </>
  );
}

export default SliderLayout;