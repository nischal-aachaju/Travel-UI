import React from 'react'
import TourPackagesCard from '../common/TourPackagesCard'
import img1 from "/src/assets/images/Body3/img1.jpg"
import img2 from "/src/assets/images/Body3/img2.jpg"
import img3 from "/src/assets/images/Body3/img3.jpg"
import { Footprints, Ship } from 'lucide-react'
import Button from '../common/Button'
const Body3 = () => {
  const card = [
    // {
    //   logo: <Ship size={30}/>,
    //   title: "Island Hopper  Adventure",
    //   decs: "accusantium nemo iste quasi cum expedita dolorum a ipsa ab cupiditate, facilis similique? Illum, quod. ",
    //   img: img1
    // },
    {
      logo: <Ship size={30} />,
      title: "Southern Landscape",
      decs: "A peaceful journey through scenic southern lands, filled with open horizons & calm surroundings.",
      img: img2
    },
    {
      logo: <Footprints size={30} />,
      title: "Northern Highland Escape",
      decs: "An adventurous escape into rugged northern highlands, where raw nature await exploration.",
      img: img3
    },
  ]

  return (
    <div className='h-100 w-full  flex text-white items-center px-28 gap-6 '>
      <div className='bg-[#a3c9bc] w-9/20 h-90 p-12 rounded-2xl flex justify-between flex-col mr-4'>
        <div className=' flex flex-col gap-4'>
          <h3 className='text-4xl font-semibold '>Tour Packages</h3>
          <p className='text-xl'>Affordable customizable, and unforgettable adventures.</p>
        </div>
        <Button text="Browse all packages" />
      </div>
      <div className=' w-11/20 h-90 flex items-center justify-evenly gap-6'>
        {card.map((e, idx) => {
          return <TourPackagesCard key={idx} e={e} />
        })}

      </div>

    </div>
  )
}

export default Body3
