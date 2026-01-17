import Card from "../common/DestinationCard"




 const cards = [
  {
      price:"4999",
    title:"El Nido",
    desc: "Beach Paradise",
    rating: "4.8",
   visitors: "1.2k",
     loc: "Palawan Region"
    // pic: img1

  },
  {
      price:"4999",
    title:"El Nido",
    desc: "Beach Paradise",
    rating: "4.8",
   visitors: "1.2k",
     loc: "Palawan Region"
    // pic: img1

  },
  {
      price:"4999",
    title:"El Nido",
    desc: "Beach Paradise",
    rating: "4.8",
   visitors: "1.2k",
     loc: "Palawan Region"
    // pic: img1

  },
  {
      price:"4999",
    title:"El Nido",
    desc: "Beach Paradise",
    rating: "4.8",
   visitors: "1.2k",
     loc: "Palawan Region"
    // pic: img1

  },
]

const Body2 = () => {
  return (
    <div className=' h-screen w-full flex justify-center items-center  bg-amber-500'>
      <div className=' h-9/10 w-9/10 bg-gray-200 rounded-3xl '> 

        <div className=' w-full h-[20%] flex'>
          <div className='w-1/2 h-full  flex items-center font-bold text-2xl p-16'><h1>Top Destinations</h1></div>
          <div className='w-1/2 h-full flex items-center pr-16 pt-16 pb-16' ><p>From island escapes to cool mountain towns, discover where your next journye will take you</p></div>
        </div>
        <div className='bg-blue-400 w-full h-[60%] px-16  flex justify-start items-center gap-5'>
            {cards.map((e,idx)=>{
              return <Card e={e} key={idx}/>
              
            })}
        </div>
        <div className='bg-amber-300 w-full h-[20%]'></div>
      </div>
      
    </div>
  )
}

export default Body2
