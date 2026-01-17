import React from 'react'
import { Map, CalendarDays, Headphones, Facebook, Instagram, Twitter, Smile, CircleCheck, MapPinned } from 'lucide-react'
import Book from '../common/Book'
import Follow from '../common/Follow'

const Body1 = () => {
  const book = [
    {
      img: <Map color="#4a5565" size={120} />,
      title: "Local Expertise",
      desc: "Our filipino travle experts craft unique experiences with insider knowledge you won't find in typical hours"
    },
    {
      img: <CalendarDays color="#4a5565" size={120} />,
      title: "All-In-One Booking",
      desc: "Book everything on one place---easy,fast and hassel-free,weather for quick gateways or planned vacations "
    },
    {
      img: <Headphones color="#4a5565" size={120} />,
      title: "24/7 Support",
      desc: "We're here anytime,anywhere. Get real-time help anytime you need it before during or after your trip."
    }
  ]
  const status = [
    {
      img: <Smile color="#ffffff" size={30} strokeWidth={1.5} />,
      follow: "12k",
      desc: "Happy and Satisfied Travelers"
    },
    {
      img: <CircleCheck color="#ffffff" size={34} strokeWidth={1.5} />,
      follow: "10 yrs",
      desc: "Proven Travel Industry Experiences"
    },
    {
      img: <MapPinned color="#ffffff" size={30} strokeWidth={1.5} />,
      follow: "50+",
      desc: "Philippne Destinations Covered"
    },

  ]

  return (
    <div className='h-140 w-full px-32  pb-20 flex justify-center items-center'>
      <div className='h-full w-6/10 flex flex-col justify-between'>
        <div className=' flex flex-col gap-5'>
          <h2 className='font-semibold text-4xl'> Why Thousads of Travelers Choose <br /> WANDER.ph for Their Philippine Adventures</h2>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur iure quae libero reprehenderit commodi? Ad dignissimos id tempora sit, iste, ut officia veniam facere, obcaecati rerum harum suscipit repudiandae optio.</p>
          <div className=' flex gap-4'>
            <Instagram strokeWidth={2} />
            <Twitter strokeWidth={2} />
            <Facebook strokeWidth={2} />
          </div>
        </div>
        <div className=' h-50 w-0 flex justify-between items-center'>
          {status.map((e, idx) => {
            return <Follow key={idx} e={e} />
          })}
        </div>
      </div>
      <div className='h-full w-4/10 flex gap-4 flex-col px-2'>
        {book.map((e, idx) => {
          return <Book key={idx} e={e} />
        })}
      </div>
    </div>
  )
}

export default Body1
