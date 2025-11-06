import React, { useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

const dealerships = [
  {
    name: "SOUEAST - Navoiy",
    address: "40°06'48.5\"N 65°30'21.6\"E, Navoiy, Uzbekistan",
    lat: 40.113461,
    lng: 65.506005,
  },
];

const DealershipMapStatic = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selected = dealerships[selectedIndex];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 bg-gray-100">
      {/* Left Side: Map */}
      <div>
        <h2 className="text-2xl font-bold mb-4 text-gray-800">
          Bizni xaritada toping
        </h2>
        <div className="rounded-lg shadow-lg overflow-hidden">
          <iframe
            title={selected.name}
            width="100%"
            height="400"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            src={`https://maps.google.com/maps?q=${selected.lat},${selected.lng}&z=14&output=embed`}
          ></iframe>
        </div>
      </div>

      {/* Right Side: Dealership List */}
      <div>
        <h2 className="text-2xl font-bold mb-4 text-gray-800">
          Bizning filiallarimiz
        </h2>
        <div className="space-y-4">
          {dealerships.map((dealership, index) => (
            <div
              key={index}
              className={`bg-white p-4 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg cursor-pointer ${
                selectedIndex === index
                  ? "border-2 border-blue-500"
                  : "border border-gray-200"
              }`}
              onClick={() => setSelectedIndex(index)}
            >
              <h3 className="flex items-center gap-2 text-lg font-semibold text-gray-900">
                <FaMapMarkerAlt className="text-orange-500" />
                {dealership.name}
              </h3>
              <p className="text-sm text-gray-600">{dealership.address}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DealershipMapStatic;
