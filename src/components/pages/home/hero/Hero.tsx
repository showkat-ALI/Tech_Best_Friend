import React from "react";
// import videoFile from '../../../../assets/video.mp4'

const Hero = () => {
  return (
    <>
      <div className=" bg-gray-500 relative">
        <div className="absolute inset-0 flex justify-center items-center bg-gray-200/20">
          <div className="container text-white  sm:space-y-10 space-y-2">
            <h3 className="lg:text-4xl text-2xl font-bold text-center font-nunito">
              This Is Your One Stop Shop To Your Brand New Tech Career
            </h3>
            <p className="text-center font-medium text-xl lg:text-2xl font-nunito">
              Increasing Talent Within Tech Spaces That Are Lucrative.
            </p>
          </div>
        </div>

        <video
          autoPlay
          muted
          loop
          className="w-full  mx-auto"
          src={require("../../../../assets/video.mp4")}
        />
      </div>
    </>
  );
};

export default Hero;
