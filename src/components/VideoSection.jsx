import React from "react";

const VideoSection = () => {
  return (
    <div className="w-[90%] md:w-[80%] mx-auto my-10">
      <div className="relative rounded-lg overflow-hidden h-[250px] md:h-[500px]">
        <img
          src="https://i.ytimg.com/vi/Q1sT3sbVcQw/maxresdefault.jpg"
          alt="Mental Health"
          className="w-full h-full object-cover"
        />
        <a
          href="https://youtu.be/Q1sT3sbVcQw"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0 flex justify-center items-center"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png"
            alt="Play"
            className="w-16 h-16 sm:w-20 sm:h-20"
          />
        </a>
      </div>
    </div>
  );
};

export default VideoSection;
