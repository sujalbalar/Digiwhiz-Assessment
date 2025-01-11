function About() {
  return (
    <div className="h-6/12 bg-[#F8F8F8] flex xs:flex-col md:flex-col">
        <img className="w-6/12 xs:w-full md:w-full" src="/images/bgwall.png" alt="wallpaper" />
        <div className="h-full flex flex-col gap-12 m-auto p-12 sm:p-6">
            <div className="flex gap-4">
                <img className="self-start" src="/images/skyline.svg" alt="builder"/>
                <div className="flex flex-col gap-5">
                    <p className="text-[#252C3A] font-bold text-xl">GENERAL BUILDER</p>
                    <p className="w-10/12 text-md text-[#5A5A5A] sm:w-full sm:text-justify">Lorem ipsum dolor sit amet, sed dicunt oporteat cuum Tuo iomnis persequeris neglegentur, facete commodo ea use possit lucilius.</p>
                </div>
            </div>
            <div className="flex gap-4">
                <img className="self-start" src="/images/building.svg" alt="builder"/>
                <div className="flex flex-col gap-5">
                    <p className="text-[#252C3A] font-bold text-xl">HOUSE EXTENSIONS</p>
                    <p className="w-10/12 text-md text-[#5A5A5A] sm:w-full sm:text-justify">Lorem ipsum dolor sit amet, sed dicunt oporteat cuum Tuo iomnis persequeris neglegentur, facete commodo ea use possit lucilius.</p>
                </div>
            </div>
            <div className="flex gap-4">
                <img className="self-start" src="/images/wallpaper.svg" alt="builder"/>
                <div className="flex flex-col gap-5">
                    <p className="text-[#252C3A] font-bold text-xl">REFURBISHMENT</p>
                    <p className="w-10/12 text-md text-[#5A5A5A] sm:w-full sm:text-justify">Lorem ipsum dolor sit amet, sed dicunt oporteat cuum Tuo iomnis persequeris neglegentur, facete commodo ea use possit lucilius.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About;