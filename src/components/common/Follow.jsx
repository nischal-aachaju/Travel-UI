const Follow = ({ e }) => {
  return (
    <div className=" flex  flex-col items-center ">
      <div className=" bg-[#a3c9bc] h-12 w-12 rounded-full flex justify-center items-center mb-6">
        {e.img}
      </div>
      <h5 className=" text-2xl font-semibold">{e.follow}</h5>
      <p className="text-center w-46 ">{e.desc}</p>
    </div>
  );
};

export default Follow;
