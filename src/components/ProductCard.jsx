import React from "react";

const products = [
  {
    id: 1,
    title: "Arterosil HP by Calroy 60 capsules",
    subtitle: "Arterosil",
    price: "Rs. 99.00",
    image:
      "https://hebronnutrition.in/cdn/shop/files/613w0dP4o5L.jpg?v=1738154268&width=1220",
  },
  {
    id: 2,
    title: "Allergy Research Group Nattokinase",
    subtitle: "Allergy Research Group",
    price: ["Rs. 115.99", "Rs. 84.00"],
    image:
      "https://hebronnutrition.in/cdn/shop/files/31mtLGA_wJL.jpg?v=1744033791&width=1220",
  },
  {
    id: 3,
    title: "Nordic Naturals ProOmega 2000",
    subtitle: "Nordic Naturals",
    price: "Rs. 62.44 - Rs. 112.99",
    image:
      "https://hebronnutrition.in/cdn/shop/files/61ThhLzkbQL.jpg?v=1744033766&width=1220",
  },
  {
    id: 4,
    title: "Pure Encapsulations Magnesium",
    subtitle: "Pure Encapsulations",
    price: "Rs. 30.36 - Rs. 97.44",
    image:
      "https://hebronnutrition.in/cdn/shop/files/db5c02c4-8b68-4238-b8d7-06d6ed749fa8.png?v=1744279276&width=1220",
  },
  {
    id: 5,
    title: "Pure  O.N.E Multivitamin",
    subtitle: "Pure Encapsulations",
    price: "Rs. 26.76",
    image:
      "https://hebronnutrition.in/cdn/shop/files/Solgar_b_complex_100_SO_011502_F.webp?v=1738156501&width=1220",
  },
];

const ProductCard = ({ title, addToCart }) => {
  return (
    <div className="px-4 py-10 bg-white">
      <h2 className="text-2xl font-bold mb-6 text-left">{title}</h2>
      <div className="flex justify-center">
        <div className="carousel carousel-center space-x-6 rounded-box">
          {products.map((product) => (
            <div
              key={product.id}
              className="carousel-item w-[240px] md:w-[260px] bg-base-100 border rounded-lg shadow p-4 flex flex-col items-center text-center"
            >
              <img
                src={product.image}
                alt={product.title}
                className="h-44 object-contain mb-2"
              />
              <h3 className="text-sm font-semibold">{product.title}</h3>
              <p className="text-xs text-gray-500">{product.subtitle}</p>

              <p className="mt-2 text-sm font-bold text-blue-700">
                {Array.isArray(product.price) ? (
                  <>
                    <span className="line-through text-gray-500 mr-1">
                      {product.price[0]}
                    </span>
                    <span className="text-red-600">{product.price[1]}</span>
                  </>
                ) : (
                  product.price
                )}
              </p>

              <button
                className="btn mt-4 bg-purple-800 text-white btn-sm w-full"
                onClick={() => addToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
