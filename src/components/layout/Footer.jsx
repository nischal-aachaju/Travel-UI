import React from 'react'
import { Copyright } from 'lucide-react'
const Footer = () => {
  return (
    <div className='h-60 w-full text-sm text-gray-800 border-t-bg-gray-300 border-t-gray-600-2 flex justify-center items-center '>
      <div className='h-full w-1/2  flex justify-between py-10 px-20 flex-col'>
        <div className='flex flex-col gap-3'>
          <h2 className='text-shadow-2xs text-shadow-black text-3xl font-bold fo'>WONDER</h2>
          <p>There is no risk-free trading</p>
        </div>
        <button className='w-fit flex bg-white border rounded-xl shadow-lg px-3  py-1'><div className='bg-green-400  shadow-black h-4 w-4 rounded-full mt-0.5 mr-2'></div>All system opertional</button>
      </div>
      <div className='h-full w-1/2  flex flex-col '>
        <div className='w-full h-40 flex justify-evenly items-start pt-4 font-sans'>
          <ul className=' flex flex-col gap-2'>
            <li>About</li>
            <li>Features</li>
            <li>Pricing</li>
            <li>Contact</li>
            <li>Blog</li>
          </ul>
          <ul className=' flex flex-col gap-2'>
            <li>Documentation</li>
            <li>FAQ</li>
            <li>Support</li>
          </ul>
          <ul className=' flex flex-col gap-2'>
            <li>X (Twiter)</li>
            <li>LinkedIn</li>
            <li>YouTube</li>
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
