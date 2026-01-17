

const Book = ({e}) => {
  return (
    <div className='h-1/3 rounded-2xl shadow-[0px_0px_6px_rgba(17,17,26,0.3)] w-full px-2 py-2 bg-[#a3c9bc] flex hover:shadow-[0px_0px_7px_rgba(17,17,26,0.5)] duration-200'>
      <div className='h-full w-2.5/10 bg-gray-200 rounded-2xl  flex justify-center items-center'>{e.img}</div>
      <div className='h-full w-7.5/10  text-white px-4 py-3 flex flex-col justify-between'>
      <h4 className=' text-2xl font-semibold '>{e.title}</h4>
      <p>{e.desc}</p>
      </div>
    </div>
  )
}

export default Book
