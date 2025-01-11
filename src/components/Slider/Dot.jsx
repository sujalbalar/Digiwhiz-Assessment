function Dots(props) {
  return (
    <div className={`cursor-pointer w-5 h-5 rounded-full border-[#FFB700] border-2 ${props.isActive? 'bg-[#FFB700]' : 'bg-transparent'}`} onClick={() => props.updateState(props.data)}/>
  )
}

export default Dots;