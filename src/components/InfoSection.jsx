import React from "react";

const InfoSection = () => {
  return (
    <div className="w-[90%] md:w-[80%] mx-auto bg-white px-4 py-10 flex flex-col md:flex-row items-center gap-8">
      {/* Image Section */}
      <div className="md:w-1/2">
        <img
          src="https://hebronnutrition.com/cdn/shop/files/5_1350x750_b10431ee-3d26-4d88-b372-8b94e9caee85_1350x750.png?v=1655420294" // Replace with your own image if needed
          alt="Health Info"
          className="rounded-lg w-full h-auto object-cover"
        />
      </div>

      <div className="md:w-1/2 text-left">
        <h2 className="text-2xl font-bold mb-4">
          Lorem ipsum heading main patterns
        </h2>
        <p className="text-sm text-gray-700 mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
          consequat massa quis enim...
        </p>
        <button className="btn bg-purple-800 text-white px-8">
          Lorem ipsum
        </button>
      </div>
    </div>
  );
};

export default InfoSection;
