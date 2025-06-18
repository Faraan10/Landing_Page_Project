import React from "react";

const BrandGrid = () => {
  const brands = [
    {
      name: "pure encapsulations",
      logo: "https://cdn.cookielaw.org/logos/342fb339-6da0-4f6f-9910-97f858be21ab/0192bd6f-7098-7616-b5c1-50d387cec416/2e5f5bd0-4366-4d97-adb8-0b6da4c346ab/pure-logo_notag.jpg",
    },
    {
      name: "CELLCORE",
      logo: "https://www.a4m.com/assets/images/directory/CellCore.jpg",
    },
    {
      name: "Researched Nutritionals",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-Y71qvmAK9pn9yt4bcHsQUsGDKXWMSjg14w&s",
    },
    {
      name: "pure encapsulations",
      logo: "https://cdn.cookielaw.org/logos/342fb339-6da0-4f6f-9910-97f858be21ab/0192bd6f-7098-7616-b5c1-50d387cec416/2e5f5bd0-4366-4d97-adb8-0b6da4c346ab/pure-logo_notag.jpg",
    },
    {
      name: "CELLCORE",
      logo: "https://www.a4m.com/assets/images/directory/CellCore.jpg",
    },
  ];

  return (
    <div className="bg-white py-8 px-4">
      <h2 className="text-3xl font-semibold mb-6 text-left">Top Brands</h2>
      <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-5 gap-6 place-items-center">
        {brands.map((brand, index) => (
          <img
            key={index}
            src={brand.logo}
            alt={brand.name}
            className="h-16 w-auto object-contain"
          />
        ))}
      </div>
    </div>
  );
};

export default BrandGrid;
