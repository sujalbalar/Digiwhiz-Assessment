function ImgContainer(props) {
  return (
    <div className="w-full h-[90vh] relative bg-transparent sm:h-[95vh]">
      <img className="w-full h-full object-cover" src={props.data.url} alt={props.data.title} />
      <div className="w-full h-full absolute bg-black inset-0 bg-opacity-65">
      </div>
      <div className="flex flex-col gap-6 absolute left-64 top-44 xs:left-2 xs:top-15 sm:left-4 sm:top-2 md:top-3 md:left-8">
        <div className="flex flex-col gap-3 xs:w-full">
          <p className="text-4xl text-white font-bold sm:text-2xl sm:w-full">{props.data.title}</p>
          <p className="max-w-full text-xl text-white w-6/12 xs:w-full">{props.data.description}</p>
        </div>
        <button className="w-fit bg-[#FFB700] font-semibold text-white py-3 px-4 xs:p-3 sm:p-4">Explore now </button>
      </div>
    </div>
  )
}

export default ImgContainer
