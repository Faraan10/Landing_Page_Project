import React from "react";

const bestsellers = [
  {
    title: "Multivitamins",
    img: "https://hebronnutrition.in/cdn/shop/files/51IA7vWBD3L.jpg?v=1738156501&width=1220",
  },
  {
    title: "Omega - 3",
    img: "https://hebronnutrition.in/cdn/shop/files/71JPfXzvOWL.jpg?v=1738154780&width=1220",
  },
  {
    title: "Nervous system support",
    img: "https://hebronnutrition.in/cdn/shop/files/613w0dP4o5L.jpg?v=1738154268&width=1220",
  },
  {
    title: "Gastrointestinal Health",
    img: "https://hebronnutrition.in/cdn/shop/files/51IA7vWBD3L.jpg?v=1738156501&width=1220",
  },
  {
    title: "Joint Health",
    img: "https://hebronnutrition.in/cdn/shop/files/71JPfXzvOWL.jpg?v=1738154780&width=1220",
  },
  {
    title: "Household Essentials",
    img: "https://hebronnutrition.in/cdn/shop/files/613w0dP4o5L.jpg?v=1738154268&width=1220",
  },
];

const Bestsellers = () => {
  return (
    <div className="px-4 py-10 mt-6 bg-white">
      <h2 className="text-2xl font-bold mb-6 text-left">Proven Bestsellers</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 md:gap-5 xl:gap-6 justify-center">
        {bestsellers.map((item, i) => (
          <div key={i} className="flex flex-col items-center text-center">
            <img
              src={item.img}
              alt={item.title}
              className="w-40 h-40 rounded-full object-cover mb-2"
            />
            <p className="text-sm">{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bestsellers;
