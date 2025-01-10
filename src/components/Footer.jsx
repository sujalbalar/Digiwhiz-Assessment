function Footer() {
  return (
    <div className="text-white p-4 px-36 bg-[#252C3A] flex justify-between px-16 sm:flex-col sm:gap-4 sm:px-6">
        <p className="text-md font-semibold sm:text-center">© DIGIWHIZ 2019</p>
        <ul className="flex gap-8 sm:gap-2 sm:text-sm">
            {
                ["Home", "About us", "Features", "Project", "Pages", "Contact"].map((link, index) => <li className="cursor-pointer hover:text-[#FFB700]">{link}</li>)
            }
        </ul>
    </div>
  )
}

export default Footer;