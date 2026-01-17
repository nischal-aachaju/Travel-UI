import React from 'react'
import { Copyright } from 'lucide-react'
import LI_compont from '../common/LI_component'
const Footer = () => {
  return (
    <div className='h-60 w-full text-sm text-gray-800 border-t-bg-gray-300 border-t-gray-600-2 flex justify-center items-center '>
      <div className='h-full w-1/3  flex justify-between py-10 px-20 flex-col'>
        <div className='flex flex-col gap-3'>
          <h2 className='text-shadow-2xs text-shadow-black text-3xl font-bold fo'>WONDER</h2>
          <p>There is no risk-free trading</p>
        </div>
        <button className='w-fit flex bg-white border rounded-xl shadow-lg px-3  py-1'><div className='bg-green-400  shadow-black h-4 w-4 rounded-full mt-0.5 mr-2'></div>All system opertional</button>
      </div>
      <div className='h-full w-2/3  flex flex-col '>
        <div className='w-fit ml-10 h-40 flex  justify-start items-end gap-14  pt-4 font-sans'>
          <ul className=' flex flex-col gap-2'>

            <LI_compont text="Home" />
            <LI_compont text="Pricing" />
            <LI_compont text="Contact" />

          </ul>
          <ul className=' flex flex-col gap-2'>
            <LI_compont text="Documentation" />
            <LI_compont text="FAQ" />
            <LI_compont text="Support" />

          </ul>
          <ul className=' flex flex-col gap-2'>
            <LI_compont text="X (Twiter)" />
            <LI_compont text="LinkedIn" />
            <LI_compont text="YouTube" />
          </ul>
        </div>
        <div className='w-full h-20 flex justify-end items-center gap-6 pr-10 '>
          <p className=' flex items-center gap-1'><Copyright className='pt-1' size={16} color="#000" />2026 wonder. All right reserved</p>
          <p>Privacy Policy</p>
          <p>Terms of Use</p>
        </div>
      </div>

    </div>
  )
}

export default Footer
