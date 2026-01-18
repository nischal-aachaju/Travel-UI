import { Star } from "lucide-react";

const Card = ({ e }) => {
  console.log(e);
  return (
    <div
      className="w-70 gap-1 h-[95%] shadow-[0px_0px_6px_rgba(17,17,26,0.3)] bg-red-500 bg-cover bg-center bg-no-repeat rounded-4xl relative text-white  [text-shadow:0_2px_12px_rgba(0,0,0,0.3)] shrink-0"
      style={{ backgroundImage: `url(${e.pic})` }}
    >
      <span className="px-2  w-fit text-sm py-1 rounded-4xl bg-gray-50/70 bordering-white h-fit absolute top-5 right-5 ">
        Starts at {e.price}
      </span>

      <div className="flex absolute flex-col gap-0.3 bottom-5 left-5 ">
        <span>{e.title}</span>

        <span className="flex justify-center items-center gap-1">
          {e.desc} | <Star size={16} fill="#ffd700" color="#ffd700" />{" "}
          {e.rating} ({e.visitors}){" "}
        </span>

        <span>{e.loc}</span>
      </div>
    </div>
  );
};

export default Card;
