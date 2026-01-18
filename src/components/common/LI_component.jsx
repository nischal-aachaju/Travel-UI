import React from 'react'

const LI_compont = ({ text }) => {
  return (
    <a className="
            w-fit
            relative
         after:content-['']
         after:absolute after:left-0 after:bottom-0
         after:h-px after:w-full
         after:origin-left after:scale-x-0
         after:bg-black
         after:transition-transform after:duration-200
         hover:after:scale-x-100
         cursor-pointer" >{text}</a>
  )
}

export default LI_compont
