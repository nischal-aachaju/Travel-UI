import React from 'react'

const TourPackagesCard = ({ e }) => {
    console.log(e);
    return (
        <div className='relative text-white h-full w-2/5 overflow-hidden rounded-2xl'>
            <img className='h-full w-full object-cover blur-[1px] brightness-100 opacity-86 ' src={e.img} alt="" />
            <div className='absolute top-8 left-6 bg-[#92b2a7] h-13 w-13 border-2 border-white flex justify-center items-center rounded-full'>{e.logo}</div>
            <h4 className='absolute font-mono font-semibold text-2xl text-shadow-black text-shadow-lg/30  z-10  top-40 left-4'>{e.title}</h4>
            <p className=' absolute top-62 left-4 text-sm text-shadow-black text-shadow-lg/30'>{e.decs}</p>

        </div>
    )
}

export default TourPackagesCard
