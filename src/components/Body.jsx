import SimpleImageSlider from "react-simple-image-slider";
import bgWall from "../images/bgwall.png";
import building from "../images/building.svg";
import skyline from "../images/skyline.svg";
import wallpaper from "../images/wallpaper.svg";
import img1 from "../images/p1.jpg";
import img2 from "../images/p2.jpg";
import img3 from "../images/p3.jpg";
import GalleryContainer from "./GalleryContainer";

function Body() {

  const imgs = [{url : img3}, {url : img1}, {url : img2}];

  return (
    <div className="h-full">
      <div className="relative">
        <SimpleImageSlider style={{width : "full", objectFit : "cover", filter : "contrast(50%)" }}
          width="100%"
          height={580}
          images={imgs}
          showBullets={true}/>

        <div className="absolute top-32 left-36 flex flex-col gap-6 sm:top-6 sm:left-5">
          <p className="w-4/12 text-white font-bold text-5xl text-wrap spac">We Do Big Things With Big Ideas </p>
          <p className="text-white w-5/12 sm:w-10/12">Talk To Our Experts and Get Your Dream Home Done.</p>
          <button className="w-fit p-4 py-2 bg-[#F9B701] text-white">Explore Now</button>
        </div>
      </div>
      <div className="bg-[#FAB702] px-36 py-2 flex items-center justify-between sm:p-4">
        <p className="text-[#FFFFFF] text-md font-bold sm:text-sm">
            Consulting And Estimate For Your Project, <span className="text-[#252C3A] text-md font-bold underline sm:text-sm">Contact Us Today</span>
        </p>
        <button className="bg-[#FFFFFF] py-3 px-6 text-[#252C3A] font-bold sm:text-sm sm:px-2 sm:py-3">Get A Quote</button>
      </div>
      <div className="h-6/12 bg-[#F8F8F8] flex sm:flex-col md:flex-row">
        <img className="w-6/12 sm:w-full" src={bgWall} alt="wallpaper" />
        <div className="h-full flex flex-col gap-12 m-auto p-12 sm:p-6">
            <div className="flex gap-4">
                <img className="self-start" src={skyline} alt="builder"/>
                <div className="flex flex-col gap-5">
                    <p className="text-[#252C3A] font-bold text-xl">GENERAL BUILDER</p>
                    <p className="w-10/12 text-md text-[#5A5A5A] sm:w-full sm:text-justify">Lorem ipsum dolor sit amet, sed dicunt oporteat cuum Tuo iomnis persequeris neglegentur, facete commodo ea use possit lucilius.</p>
                </div>
            </div>
            <div className="flex gap-4">
                <img className="self-start" src={building} alt="builder"/>
                <div className="flex flex-col gap-5">
                    <p className="text-[#252C3A] font-bold text-xl">HOUSE EXTENSIONS</p>
                    <p className="w-10/12 text-md text-[#5A5A5A] sm:w-full sm:text-justify">Lorem ipsum dolor sit amet, sed dicunt oporteat cuum Tuo iomnis persequeris neglegentur, facete commodo ea use possit lucilius.</p>
                </div>
            </div>
            <div className="flex gap-4">
                <img className="self-start" src={wallpaper} alt="builder"/>
                <div className="flex flex-col gap-5">
                    <p className="text-[#252C3A] font-bold text-xl">REFURBISHMENT</p>
                    <p className="w-10/12 text-md text-[#5A5A5A] sm:w-full sm:text-justify">Lorem ipsum dolor sit amet, sed dicunt oporteat cuum Tuo iomnis persequeris neglegentur, facete commodo ea use possit lucilius.</p>
                </div>
            </div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-12 py-24 pb-4 sm:p-6">
        <div className="w-7/12 flex flex-col gap-6">
            <p className="uppercase text-center font-bold text-4xl text-[#252C3A]">Featured Works</p>
            <p className="text-center text-[#5A5A5A]">Lorem ipsum dolor sit amet, sed dicunt oporteat cu, laboramus definiebas cum et. Duo id omnis persequeris neglegentur, facete commodo ea usu, possit lucilius sed ei. Esse efficiendi scripserit eos ex. Sea utamur iisque salutatus id.Mel autem animal.</p>
        </div>
        <GalleryContainer/>
      </div>
    </div>
  )
}

export default Body;