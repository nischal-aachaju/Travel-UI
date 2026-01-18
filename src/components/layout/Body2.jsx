import Card from "../common/DestinationCard";
import img1 from "../../assets/images/Body2/img1.png";
import img2 from "../../assets/images/Body2/img2.png";
import img3 from "../../assets/images/Body2/img3.png";
import img4 from "../../assets/images/Body2/img4.png";
import Button from "../common/Button";

const cards = [
  {
    price: "4999",
    title: "El Nido",
    desc: "Beach Paradise",
    rating: "4.8",
    visitors: "1.2k",
    loc: "Palawan Region",
    pic: img1,
  },
  {
    price: "5299",
    title: "Banaue",
    desc: "Mountain Retreat",
    rating: "4.7",
    visitors: "980",
    loc: "Ifugao Province",
    pic: img2,
  },
  {
    price: "4899",
    title: "Siargao",
    desc: "Surf Escape",
    rating: "4.9",
    visitors: "1.5k",
    loc: "Surigao del Norte",
    pic: img3,
  },
  {
    price: "5199",
    title: "Sagada",
    desc: "Highland Haven",
    rating: "4.6",
    visitors: "860",
    loc: "Mountain Province",
    pic: img4,
  },
];

const Body2 = () => {
  return (
    <div className=" h-screen w-full flex justify-center items-center  ">
      <div className=" h-9/10 w-9/10 bg-gray-200 rounded-3xl ">
        <div className=" w-full h-[20%] flex">
          <div className="w-1/2 h-full  flex items-center font-bold text-2xl p-16">
            <h1>Top Destinations</h1>
          </div>
          <div className="w-1/2 h-full flex items-center pr-16 pt-16 pb-16">
            <p>
              From island escapes to cool mountain towns, discover where your
              next journey will take you—explore hidden gems, iconic
              destinations, and unforgettable experiences.
            </p>
          </div>
        </div>
        <div className=" w-full h-[60%] px-16  flex justify-start items-center gap-10 flex-wrap ">
          {cards.map((e, idx) => {
            return <Card e={e} key={idx} />;
          })}
        </div>
        <div className=" w-full h-[20%] flex justify-start items-center px-16 shrink-0">
          <Button text="Book now" />
        </div>
      </div>
    </div>
  );
};

export default Body2;
