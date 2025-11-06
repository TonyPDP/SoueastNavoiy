import { GoArrowRight } from "react-icons/go";

const Testimonials = () => {
  return (
    <div>
      <div className="flex justify-between items-center p-6">
        <h1 className="font-cargo text-[40px] font-extrabold tracking-widest text-center mt-15 ml-[74px]">
          MODELS
        </h1>
        <h1 className="flex font-cargo text-xl font-extrabold tracking-widest text-center mt-20 mr-25 border-b-1 border-[#141414] ml-2 h-10">
          Discover All Models
          <span>
            <GoArrowRight style={{ marginTop: "5px", marginLeft: "20px" }} />
          </span>
        </h1>
      </div>
      <div></div>
    </div>
  );
};

export default Testimonials;
