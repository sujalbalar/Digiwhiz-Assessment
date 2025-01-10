import logo from "../images/logo.svg";
import magnifier from "../images/magnifyer.svg";
import mail from "../images/email.svg";
import tele from "../images/telephone.svg";
import Hamb from "../images/hamb.svg";
import Close from "../images/close.svg";
import { useState } from "react";

function Header() {

  const [showMobMenu, setShowMobMenu] = useState(false);

  return (
    <div className="w-full sticky top-0">
      <div className="bg-[#EBEBEB] text-[#464646] flex justify-between py-2 px-36 sm:flex-col sm:hidden">
        <p className="text-md text-[#464646]">Have any questions?</p>
        <div className="flex gap-4 sm:flex-col sm:gap-1">
          <div className="flex gap-2 items-center">
            <img src={mail} alt="email"/>
            <p className="text-sm">contact@mail.com</p>
          </div>
          <span className="w-[1px] h-5 border-r-2 border-[#D9D9D9] sm:hidden"></span>
          <div className="flex gap-2 items-center">
            <img src={tele} alt="email"/>
            <p className="text-sm">+080 0444 333 444</p>
          </div>
        </div>
      </div>
      <div className="bg-[#FFFFFF] px-36 py-4 font-semibold text-[#252C3A] flex justify-between sm:p-2">
          <img className="w-20" src={logo} alt="logo"/>
          <ul className="text-lg flex gap-8 items-center sm:hidden">
            <Links/>
            <span className="w-[1px] h-5 border-r-2 border-[#D9D9D9] sm:hidden"></span>
            <li className="sm:hidden cursor-pointer"><img className="h-10 aspect-square" src={magnifier} alt="search" /></li>
          </ul>
          {showMobMenu? <p className="flex items-center sm:visible md:hidden lg:hidden" onClick={() => setShowMobMenu(!showMobMenu)}> <img className="w-4 aspect-square" src={Close} alt="close"/> </p> : <p className="flex items-center sm:visible md:hidden lg:hidden" onClick={() => setShowMobMenu(!showMobMenu)}> <img className="w-4 aspect-square" src={Hamb} alt="menu"/> </p>}
      </div>
      {
        showMobMenu?
        <div className="px-2 pt-2 pb-3 space-y-1 sm:visible md:hidden">
          <li className="block py-2 px-4 rounded text-[#25C3A] hover:bg-[#252C3A] hover:text-white">
            Home
          </li>
          <li className="block py-2 px-4 rounded text-[#25C3A] hover:bg-[#252C3A] hover:text-white">
            About us
          </li>
          <li className="block py-2 px-4 rounded text-[#25C3A] hover:bg-[#252C3A] hover:text-white">
            Features
          </li>
          <li className="block py-2 px-4 rounded text-[#25C3A] hover:bg-[#252C3A] hover:text-white">
            Project
          </li>
          <li className="block py-2 px-4 rounded text-[#25C3A] hover:bg-[#252C3A] hover:text-white">
            Pages
          </li>
          <li className="block py-2 px-4 rounded text-[#25C3A] hover:bg-[#252C3A] hover:text-white">
            Contact
          </li>
        </div>:
        null
      }
    </div>
  )
}

function Links(){

  const [isLinkActive, setLinkActive] = useState(0);

  function handleClick(num){
    setLinkActive(num);
  }

  return(
      ["Home","About us", "Features","Project","Pages","Contact"].map((link, index) => {
        return <Link key={index} data={link} num={index} isActive={index === isLinkActive} updateState={handleClick}/>
      })
  )
}

function Link(props){
  return(
    <li className="flex gap-2 items-center">
      {
        props.isActive ? 
        <div className="grid grid-rows-2 grid-cols-2 gap-[2px]"> 
          <div className="bg-[#FFB700] w-1 h-1"></div> <div className="bg-[#FFB700] w-1 h-1"></div> <div className="bg-[#FFB700] w-1 h-1"></div> <div className="bg-[#FFB700] w-1 h-1"></div>
        </div> : ""
      }
      <p className={`cursor-pointer ${props.isActive ? 'text-[#FFB700]' : 'text-[#252C3A]'}`} onClick={() => props.updateState(props.num)}>{props.data}</p>
    </li>
  )
}

export default Header;