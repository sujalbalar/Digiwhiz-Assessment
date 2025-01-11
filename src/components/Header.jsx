import { useState } from "react";

function Header() {

  const [showMobMenu, setShowMobMenu] = useState(false);

  return (
    <div className="sticky top-0 bg-white z-[9999]">
      <div className="bg-[#EBEBEB] text-[#464646] flex justify-between px-64 py-2 sm:flex-col sm:p-4 md:px-6 lg:px-8 xs:hidden sm:px-4 xl:visible">
        <p className="text-[12px] text-[#464646]">Have any questions?</p>
        <div className="flex gap-4 / text-sm sm:gap-6">
          <div className="flex gap-2 items-center">
            <img src="/images/email.svg" alt="email"/>
            <p>contact@mail.com</p>
          </div>
          <span className="w-[1px] h-5 border-r-2 border-[#D9D9D9] sm:hidden"></span>
          <div className="flex gap-2 items-center">
            <img src="/images/telephone.svg" alt="email"/>
            <p className="text-nowrap">+080 0444 333 444</p>
          </div>
        </div>
      </div>
      <div className="bg-[#FFFFFF] py-2 px-64 font-semibold text-[#252C3A] flex justify-between items-center xs:p-2 sm:p-4 md:px-6 lg:px-8">
          <img className="w-24" src="/images/logo.svg" alt="logo"/> 
          <ul className="text-lg flex gap-8 items-center xs:hidden sm:hidden md:visible">
            <Links/>
            <span className="w-[1px] h-5 border-r-2 border-[#D9D9D9] sm:hidden"></span>
            <li className="sm:hidden cursor-pointer"><img className="h-8 aspect-square" src="/images/magnifyer.svg" alt="search" /></li>
          </ul>
          {showMobMenu? <span className="cursor-pointer flex items-center xs:visible md:hidden" onClick={() => setShowMobMenu(!showMobMenu)}> <img className="w-4 aspect-square" src="/images/close.svg" alt="close"/> </span> : <span className="cursor-pointer items-center flex sm:visible md:hidden lg:hidden xl:hidden" onClick={() => setShowMobMenu(!showMobMenu)}> <img className="w-6 aspect-square" src="/images/hamb.svg" alt="menu"/> </span>}
      </div>
      {
        showMobMenu?
        <div className="px-2 pt-2 pb-3 space-y-1 sm:visible md:hidden">
          {
            ["Home","About us","Features","Project","Pages","Contact"].map((link,index) => {
              return <a className="block py-2 px-4 rounded text-[#25C3A] hover:bg-[#252C3A] hover:text-white" href={link.href}> {link} </a>
            })
          }
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
    <li className="flex gap-2 items-center text-xl">
      {
        props.isActive ? 
        <div className="grid grid-rows-2 grid-cols-2 gap-[2px]"> 
          <div className="bg-[#FFB700] w-1 h-1"></div> <div className="bg-[#FFB700] w-1 h-1"></div> <div className="bg-[#FFB700] w-1 h-1"></div> <div className="bg-[#FFB700] w-1 h-1"></div>
        </div> : ""
      }
      <p className={`cursor-pointer text-sm ${props.isActive ? 'text-[#FFB700]' : 'text-[#252C3A]'}`} onClick={() => props.updateState(props.num)}>{props.data}</p>
    </li>
  )
}

export default Header;