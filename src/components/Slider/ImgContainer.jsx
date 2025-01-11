function ImgContainer(props) {
  return (
    <div className="w-full h-[90vh] relative bg-transparent">
      <img className="w-full h-full object-cover" src={props.data.url} alt={props.data.title} />
      <div className="w-full h-full absolute bg-black inset-0 bg-opacity-65">
      </div>
      <div className="flex flex-col gap-6 absolute left-64 top-44 xs:left-2 xs:top-15 sm:left-4 md:left-8">
        <div className="flex flex-col gap-3 xs:w-6/12">
          <p className="text-5xl text-white font-bold sm:text-2xl">{props.data.title}</p>
          <p className="text-xl text-white w-6/12 xs:w-full">{props.data.description}</p>
        </div>
        <button className="max-w-fit bg-[#FFB700] text-white py-2 px-4">Explore now </button>
      </div>
    </div>
  )
}

export default ImgContainer
