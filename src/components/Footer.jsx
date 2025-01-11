function Footer() {
  return (
    <div className="text-white p-2 px-64 bg-[#252C3A] flex justify-between xs:flex-col xs:gap-4 xs:px-6 sm:px-6 md:flex-col items-center md:px-8">
        <p className="text-md font-semibold xs:text-center">© DIGIWHIZ 2019</p>
        <ul className="flex gap-8 xs:gap-2 xs:text-[12px] sm:text-[12px]">
            {
                ["Home", "About us", "Features", "Project", "Pages", "Contact"].map((link, index) => <li key={index} className="cursor-pointer text-inherit hover:text-[#FFB700]">{link}</li>)
            }
        </ul>
    </div>
  )
}

export default Footer;