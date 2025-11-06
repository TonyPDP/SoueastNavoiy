import { Input } from "antd";
import HotSales from "../../Components/HotSales";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";
import Testimonials from "../Testimonials/Testimonials";
import Location from "../Location/Location";

const { Search } = Input;

const Cars = () => {
  const navigate = useNavigate();

  const handleCarClick = (name) => {
    navigate(`/car/${encodeURIComponent(name)}`);
  };

  const onSearch = (value, _e, info) => console.log(info?.source, value);

  const cars = [
    { id: 2, name: "SOUEAST S07", image: "Soueast S07.png" },
    { id: 1, name: "SOUEAST S09", image: "Soueast S09.png" },
  ];

  return (
    <>
      <Hero />
      <Navbar />

      <div className="flex flex-wrap gap-6 p-6">
        {cars.map((car) => (
          <div
            key={car.id}
            onClick={() => handleCarClick(car.name)}
            className="cursor-pointer w-85 h-50 ml-5.5 bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out"
          >
            <img
              src={`/${car.image}`} // Make sure these paths work in your project
              alt={car.name}
              className="w-full h-2/3 object-cover p-2 rounded-t-xl"
            />
            <h1 className="text-[14.5px] tracking-normal font-mono text-center py-3">
              {car.name}
            </h1>
          </div>
        ))}
      </div>
      <Location />
    </>
  );
};

export default Cars;
