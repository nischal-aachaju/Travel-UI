import React from 'react'
import TourPackagesCard from '../common/TourPackagesCard'
import img1 from "/src/assets/images/Body3/img1.jpg"
import img2 from "/src/assets/images/Body3/img2.jpg"
import img3 from "/src/assets/images/Body3/img3.avif"
import { Footprints,Ship } from 'lucide-react'
const Body3 = () => {
  const card = [
    {
      logo: <Ship size={30}/>,
      title: "Island Hopper  Adventure",
      decs: "accusantium nemo iste quasi cum expedita dolorum a ipsa ab cupiditate, facilis similique? Illum, quod. ",
      img: img1
    },
      {
      logo: <Ship size={30}/>,
      title: "South Nepal Landscape",
      decs: "Sint nihil optio ex sapiente provident dignissimos accusantium nemo iste quasi cum expedita dolorum  ",
      img: img2
    },
    {
      logo: <Footprints size={30} /> ,
      title: "Northern Highland Escape",
      decs: "cum expedita dolorum a ipsa ab cupiditate, facilis similique? Illum, quod. ",
      img: img3
    },
  ]

  return (
    <div className='h-100 w-full  flex text-white items-center px-14 gap-6 '>
      <div className='bg-gray-600 w-9/20 h-90 p-12 rounded-2xl flex justify-between flex-col mr-4'>
        <div className=' flex flex-col gap-4'>
          <h3 className='text-4xl font-semibold '>Tour Packages</h3>
          <p className='text-xl'>Affordable customizable, and unforgettable adventures.</p>
        </div>
        <button className=' bg-gray-900 w-fit  rounded-2xl py-1 px-4'>Browse all packages </button>
      </div>
      <div className=' w-11/20 h-90 flex  gap-6'>
        {card.map((e, idx) => {
          return <TourPackagesCard key={idx} e={e} />
        })}

      </div>

    </div>
  )
}

export default Body3
