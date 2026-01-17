import bg from "../../assets/images/bg.jpg"

const Hero = () => {
  return (
    <section className='w-full h-screen px-16 pb-25'>
      <div className="w-full h-full  rounded-3xl flex flex-col justify-center items-center  gap-1" style={{ backgroundImage: `url(${bg})` }}>

        <div className="ml-24 max-w-225 flex flex-col gap-4">
          <h1  className="text-white font-bold text-[10rem] leading-none p-0 h-fit [text-shadow:0_8px_30px_rgba(0,0,0,0.45)]">
          WANDER
          </h1>

        <div className='text-white text-2xl w-[80%] [text-shadow:0_4px_16px_rgba(0,0,0,0.5)] '>
          Discover breathtaking destinations across the Phlipines with curated tours, local insights and hassle free planning all in one platform
        </div>
          
        <div className='flex gap-10'>
          <button className=' px-6 h-12 rounded-3xl shrink-0 bg-white  font-semibold text-gray-800 transition-all text-xl duration-300 ease-out
    hover:-translate-y-1 hover:shadow-xl
    active:translate-y-0 active:shadow-md'>Book now</button>
          <button className='px-6 h-12 rounded-3xl shrink-0 border-2 [text-shadow:0_4px_16px_rgba(0,0,0,0.5)] border-white font-semibold text-white text-xl  transition-all duration-300 ease-out
    hover:-translate-y-1 hover:bg-white/10
    hover:shadow-[0_10px_30px_rgba(0,0,0,0.25)]
    active:translate-y-0
 '>Explore destinations</button>
        
        </div>
        </div>
      
    </div>

    </section>
  )
}

export default Hero
