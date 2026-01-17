

const navItems = ["Home","Destinations", "Packages", "About Us"]

const Navbar = () => {
  return (
    <nav className='w-full h-20 flex items-center px-16'>
      <div className=" font-bold text-black w-2/10 text-3xl h-full flex items-center justify-start ">WANDER</div>

      <ul className="h-full w-4/10 flex justify-evenly items-center ">
        {navItems.map((item,index)=>{
          return ( <li key={index} className="text-black/70 text-lg font-semibold hover:text-black transition">
            <a href="">
            {item}
            </a>
          </li>)


        })}
      </ul>

      <div className="w-4/10 h-full  flex justify-end gap-5 items-center">
        <input
          type="text"
          placeholder="Search for a place, city or a destination"
          className="h-[50%] w-2/3 bg-gray-200 rounded-full px-4 text-sm outline-none"
        />

        <button className='px-6  py-2 rounded-4xl w-fit shrink-0 bg-gray-800 font-semibold text-gray-200 '>Book now</button>
      </div>

    </nav>
  )
}

export default Navbar
