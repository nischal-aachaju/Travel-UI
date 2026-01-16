import React from 'react'

const navItems = ["Home","Destinations", "Packages", "About Us"]

const Navbar = () => {
  return (
    <div className='w-full h-20 flex items-center '>
      <div className=" font-bold text-black w-[15%] text-3xl h-full flex items-center justify-start m-16">WANDER</div>

      <ul className="h-full w-[40%] flex justify-evenly items-center ">
        {navItems.map((item,index)=>{
          return ( <li key={index} className="text-black/70 text-lg font-semibold hover:text-black transition">
            <a href="">
            {item}
            </a>
          </li>)


        })}
      </ul>

      <div className="w-[45%] h-full  flex justify-end gap-10 items-center">
        <input
          type="text"
          placeholder="Search for a place, city or a destination"
          className="h-[50%] w-[60%] bg-gray-200 rounded-full px-4 text-sm outline-none"
        />

        <button className='px-4 py-2 rounded-4xl w-10% bg-gray-800 font-semibold text-gray-200 m-15'>Book now</button>
      </div>

    </div>
  )
}

export default Navbar
