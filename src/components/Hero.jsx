import React from "react";

const Hero = () => {
  return (
    <div className="carousel w-full h-[60vh] md:h-[70vh]">
      <div id="slide1" className="carousel-item relative w-full">
        <img
          src="https://hebronnutrition.com/cdn/shop/files/3_a3c3672f-bd40-4984-b7f4-9e16d6_2000x1111.png?v=1655420182"
          className="w-full"
        />
        <div className="absolute inset-0 flex justify-center text-white bg-black/20">
          <div className="text-center px-4 mt-12 sm:mt-16 md:mt-20 lg:mt-24 xl:mt-28">
            <h1 className="text-3xl md:text-5xl font-bold">Immune Support</h1>
            <button className="btn btn-lg btn-primary mt-4 md:mt-6 px-8 text-lg">
              Shop now
            </button>
          </div>
        </div>

        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img
          src="https://hebronnutrition.com/cdn/shop/files/2_14ab276d-ea5e-4823-b8ce-a1a4de_2000x1111.png?v=1655420606"
          className="w-full"
        />
        <div className="absolute inset-0 flex justify-center text-white bg-black/20">
          <div className="text-center px-4 mt-12 sm:mt-16 md:mt-20 lg:mt-24 xl:mt-28">
            <h1 className="text-3xl md:text-5xl font-bold">Immune Support</h1>
            <button className="btn btn-lg btn-primary mt-4 md:mt-6 px-8 text-lg">
              Shop now
            </button>
          </div>
        </div>

        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img
          src="https://hebronnutrition.com/cdn/shop/files/1_1c185389-cefd-4943-928a-471eab_2000x1111.png?v=1655420700"
          className="w-full"
        />
        <div className="absolute inset-0 flex justify-center text-white bg-black/20">
          <div className="text-center px-4 mt-12 sm:mt-16 md:mt-20 lg:mt-24 xl:mt-28">
            <h1 className="text-3xl md:text-5xl font-bold">Immune Support</h1>
            <button className="btn btn-lg btn-primary mt-4 md:mt-6 px-8 text-lg">
              Shop now
            </button>
          </div>
        </div>

        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
